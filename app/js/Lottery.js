//引入模块
import 'babel-polyfill';
//需要加入变量
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

//多重继承。深度拷贝的方法。target：要拷贝的目标，source：要拷贝的原对象
const copyProperties=function(target,source){
  //reflect映射拿到原对象所有属性
  for(let key of Reflect.ownKeys(source)){
    //选择性拷贝，判断是不是构造函数，原型，是不是name，不是这三个属性才完成拷贝过程
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
      //拷贝
      let desc=Object.getOwnPropertyDescriptor(source,key);
      //复制到目标对象
      Object.defineProperty(target,key,desc);
    }
  }
};

//实现深度拷贝之后，要有一个多重继承的方法
const mix=function(...mixins){
  class Mix{}
  //申明一个空的类，深度拷贝原型
  for(let mixin of mixins){
    //将mixin拷贝到mix上去
    copyProperties(Mix,mixin);
    //拷贝原型
    copyProperties(Mix.prototype,mixin.prototype);
  }
  return Mix
};
//定义最终实现彩票的模块。实现多重继承
class Lottery extends mix(Base,Calculate,Interface,Timer){
  //参数：1.name：区分彩票 2:cname:中文名称 3.issue:当前期号 4.状态
  constructor(name='syy',cname='11选5',issue='**',state='**'){
    //继承的时候super放在最前面
    super();
    this.name=name;
    this.cname=cname;
    this.issue=issue;
    this.state=state;
    //选择器
    this.el='';
    //遗漏 map对象
    this.omit=new Map();
    //开奖号码
    this.open_code=new Set();
    //开奖记录
    this.open_code_list=new Set();
    //玩法列表
    this.play_list=new Map();
    //选号
    this.number=new Set();
    //期号的选择器
    this.issue_el='#curr_issue';
    //倒计时的选择器
    this.countdown_el='#countdown';
    //状态的选择器
    this.state_el='.state_el';
    //购物车的选择器
    this.cart_el='.codelist';
    //遗漏的选择器
    this.omit_el='';
    //当前的默认玩法
    this.cur_play='r5';
    //初始化玩法列表，数字，更新状态，事件初始化
    this.initPlayList();
    this.initNumber();
    //这个是lottery里面的方法
    this.updateState();
    this.initEvent();
  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState(){
    //保存当前对象
    let self=this;
    //完成异步操作
    this.getState().then(function(res){
      //拿到当前的期号
      self.issue=res.issue;
      //拿到最新的销售截止时间
      self.end_time=res.end_time;
      //拿到当前的状态
      self.state=res.state;
      //更新当前的期号
      $(self.issue_el).text(res.issue);
      //倒计时更新
      self.countdown(res.end_time,function(time){
        //在网页中更新时间
        $(self.countdown_el).html(time)
      },function(){
        //倒计时结束后做什么
        setTimeout(function () {
          //重新获取最新的销售状态
          self.updateState();
          //获取当前最新的遗漏
          self.getOmit(self.issue).then(function(res){

          });
          //更新奖号
          self.getOpenCode(self.issue).then(function(res){

          })
        }, 500);
      })
    })
  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent(){
    let self=this;
    //玩法切换。通过bind转换当前对象
    $('#plays').on('click','li',self.changePlayNav.bind(self));
    //号码的选中
    $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
    //添加号码
    $('#confirm_sel_code').on('click',self.addCode.bind(self));
    //操作区，大小奇偶清除事件
    $('.dxjo').on('click','li',self.assistHandle.bind(self));
    //随机号码
    $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
  }
}
//导出
export default Lottery;
