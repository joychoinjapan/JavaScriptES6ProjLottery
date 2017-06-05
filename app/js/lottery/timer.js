/**
 * Created by baobaochu on 2017/6/4.
 */
/**
 *倒计时模块
 */

//倒计时从服务器端获取
//遗漏 多少期没有出这个号码了
class Timer{
    //定时器的方法:
    /**
     * @param end 截止时间
     * @param update 时间更新回调
     * @handle handle 倒计时结束时用于回调
     */
    countdown(end,update,handle){
        //获取当前时间
        const now=new Date().getTime();
        //获取当前对象的指针
        const self=this;
        //如果当前时间大于截止时间，说明倒计时已经结束。用handle.call来执行倒计时结束的回调
        if(now-end){
            handle.call(self);
        }else {
            //如果当前时间没有结束，首先要判断当前时间离截止时间的剩余时间
            let last_time=end-now;
            //设置常量：1000*60*60*24 毫秒转换 一天多少毫秒
            const px_d=1000*60*60*24;
            //一小时多少毫秒
            const px_h=1000*60*60;
            //一分钟多少毫秒
            const px_m=1000*60;

            const px_s=1000;
            //剩余时间还剩多少天
            let d=Math.floor(last_time/px_d);
            //剩余时间还剩多少小时；
            let h=Math.floor((last_time-d*px_d)/px_h);
            //剩余时间还剩多少分
            let m=Math.floor((last_time-d*px_d-h*px_h)/px_m);
            //剩余时间还剩多少秒
            let s=Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);

            let r=[];
            if(d>0){
                r.push(`<em>${d}</em>天`)
            }
            //除了判断小时是否大于0，还得判断数组中有没有天这种情况
            if(r.length||(h>0)){
                r.push(`<em>${h}</em>时`)
            }
            if(r.length||(m>0)){
                r.push(`<em>${m}</em>分`)
            }
            if(r.length||(s>0)){
                r.push(`<em>${s}</em>秒`)
            }
            //把数组中的元素全部连接起来存入last_time里面
            self.last_time=r.join('');
            //一秒钟轮询一次,更新
            update.call(self,r.join(''));
            //重新倒计时
            setTimeout(function () {
                self.countdown(end,update,handle)
            },1000);
        }

    }
}

export default Timer;