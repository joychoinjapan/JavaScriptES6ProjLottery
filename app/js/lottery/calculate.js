/**
 * Created by baobaochu on 2017/6/4.
 */
/**
 *计算模块
 */
class Calculate{
    /**
     *[computeCount 计算注数]
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前的玩法]
     * @return {number}          [注数]
     */

    computeCount(active,play_name){
        let count=0;
        //通过传进去的玩法列表判断是否含有该玩法。判断map play_list中是否有该play_name
        const exist=this.play_list.has(play_name);
        //组合运算 active 是长度
        const arr=new Array(active).fill('0');
        if(exist&&play_name.at(0)==='r'){
            count=Calculate.combine(arr,play_name.split('')[1]).length;
        }
        return count;

    }

    /**
     *[computeBonus 奖金范围预测]
     * @param {number} active[当前选中的号码总数]
     * @param {string} play_name    [当前的玩法标识]
     * @return {array}              [奖金范围]
     */
    computeBonus(active,play_name){
        //把字符串拆分成数组;
        const play=play_name.split('');
        const self=this;
        //将指定大小的数组里面填充0；
        let arr=new Array(play[1]*1).fill(0);
        let min,max;
        if(play[0]==='r'){
            //最小命中数
            let min_active=5-(11-active);
            if(min_active>0){
                if(min_active-play[1]>=0){
                    arr=new Array(min_active).fill(0);
                    min=Calculate.combine(arr,play[1]).length;
                }else{
                    if(play[1]-5>0&&active-play[1]>=0){
                        arr=new Array(active-5).fill(0);
                        min=Calculate.combine(arr,play[1]-5).length;
                    }else{
                        min=active-play[1]>-1?1:0;
                    }

                }
            }else {
                min=active-play[1]>-1?1:0;
            }

            let max_active=Math.min(active,5);
            if(play[1]-5>0){
                if(active-play[1]>=0){
                    arr=new Array(active-5).fill(0);
                    max=Calculate.combine(arr,play[1]-5).length;
                }else {
                    max=0;
                }
            }else if(play[1]-5<0){
                arr=new Array(Math.min(active,5)).fill(0);
                max=Calculate.combine(arr,play[1]).length;
            }else {
                max=1;
            }
        }
        //返回金额;
        return [min,max].map(item=>item*self.play_list.get(play_name).bonus)

    }

    //静态方法
    /**
     * [combine 组合运算]
     * @param {array} arr [参与组合运算的数组]
     * @param {number} size [组合运算的基数]
     * @return {number}    [计算注数]
     */
    static combine(arr,size){
        let allResult=[];
        //递归必须起一个匿名函数
        (function f(arr,size,result) {
            let arrLen=arr.length;
            if(size>arrLen){
                return;
            }
            if(size===arrLen){
                allResult.push([].concat(result,arr))
            }else {
                for(let i=0;i<arrLen;i++){
                    let newResult=[].concat(result);
                    newResult.push(arr[i]);
                    if(size===1){
                        allResult.push(newResult)
                    }else {
                        let newArr=[].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);
                    }
                }
            }
        })(arr,size,[]);

        return allResult;

    }
}

export default Calculate;