/**
 * Created by baobaochu on 2017/6/4.
 */
/**
 * 接口模块
 */
import $ from 'jquery';
class Interface{
    /**
     * [getOmit 获取遗漏数据]
     * @param {string} issue [当前的期号]
     */
    getOmit(issue){
        let self=this;
        //promise方便异步操作。
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    //前端后端的约定格式
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    //把服务器取到的数据保存到当前的对象
                    self.setOmit(res.data);
                    //把数据取到前端
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }

            })
        })
    }
    /**
     * [getOpenCode 获取开奖号码]
     * @param {string} issue[期号]
     *
     */
    getOpenCode(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
           $.ajax({
               url:'/get/opencode',
               data:{
                   issue:issue
               },
               dataType:'json',
               success:function (res) {
                   self.setOpenCode(res.data);
                   resolve.call(self,res);
               },
               error:function (err) {
                   reject.call(err);
               }
           })
        })
    }

        /**
         * [getState 获取当前状态]
         * @param {string} issue[期号]
         *
         */
    getState(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })

    })
    }

}

export  default  Interface
