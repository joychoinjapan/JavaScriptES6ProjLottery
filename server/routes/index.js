var express = require('express');
var mockjs = require('mockjs');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

//用来输出当前的状态 期号以及截止时间
var makeIssue=function(){
    //获取服务端当前时间
    var date=new Date();
    //获取第一期的时间
    var first_issue_date=new Date();
    //第一期的时间设定为每天的九点，截止时间为九点十分零秒
    first_issue_date.setHours(9);
    first_issue_date.setMinutes(10);
    first_issue_date.setSeconds(0);
    //计算最后一期截止的时间 22点截止
    var end_issue_date=new Date(first_issue_date.getTime()+77*10*60*1000);

    //当前期，截止时间，状态值
    var cur_issue,end_time,state;
    //正常销售情况：如果当前时间大于第一期的时间，并且小于截止时间
    if(date.getTime()-first_issue_date.getTime()>0&&date.getTime()-end_issue_date.getTime()<0){
        //判断当前的期号 公式：现在的时间-开始销售的时间（毫秒）／（1000*60*10）
        var cur_issue_date=new Date();
        cur_issue_date.setHours(9);
        cur_issue_date.setMinutes(0);
        cur_issue_date.setSeconds(0);
        var minus_time=date.getTime()-cur_issue_date.getTime();
        //当前日的第多少期
        var h=Math.ceil(minus_time/1000/60/10);
        //截止的时间 公式：当前日的时间+当前的期*10分钟的毫秒数
        var end_date=new Date(cur_issue_date.getTime()+1000*60*10*h);
        end_time=end_date.getTime();
        //生成当前期号的字符串 例如：第2017060854期
        cur_issue=[end_date.getFullYear(),('0'+(end_date.getMonth()+1)).slice(-2),('0'+end_date.getDate()).slice(-2),('0'+h).slice(-2)].join('')
    }else{
        // 今天销售已截止
        var today_end=new Date();
        today_end.setHours(23);
        today_end.setMinutes(59);
        today_end.setSeconds(59);
        //如果过了22点，则把期号往后一日加
        if(today_end.getTime()-date.getTime()<2*60*60*1000){
            first_issue_date.setDate(date.getDate()+1);
        }

        //截止日期为下一日的日期
        end_time=first_issue_date.getTime();
        // 当前期号设定
        cur_issue=[first_issue_date.getFullYear(),('0'+(first_issue_date.getMonth()+1)).slice(-2),('0'+first_issue_date.getDate()).slice(-2),'01'].join('')
    }

    //前两分钟销售，后8分钟开奖

    var cur_date=new Date();
    if(end_time-cur_date.getTime()>1000*60*2){
        state='正在销售'
    }else{
        state='开奖中'
    }
    //返回结果
    return {
        issue:cur_issue,
        state:state,
        end_time:end_time
    }
}

//获取遗漏的接口的实现 express的写法
router.get('/get/omit',function(req,res,next){
    //返回一个json的格式
    res.json(mockjs.mock({
        //返回长度为11的数据
        'data|11':[/[1-9]{1,3}|0/],
        //返回期号：假的
        'issue':/[1-9]{8}/
    }))
})
//获取开奖接口的实现
router.get('/get/opencode',function(req,res,next){
    var issue=makeIssue().issue;
    //模拟开奖数据
    var data=mockjs.mock({
        //假的开奖号码
        'data':[/[1-3]/,/[4-5]/,/[6-7]/,/[8-9]/,/1[0-1]/]
    }).data;
    res.json({
        issue:issue,
        data:data
    })
})

//状态的接口 通过makeIssue真实的计算出来
router.get('/get/state/',function(req,res,next){
    var state=makeIssue();
    res.json(state);
})

module.exports = router;
