/**
 * Created by baobaochu on 2017/5/31.
 */
{
    let arr=['hello','world'];
    //调用接口
    let map=arr[Symbol.iterator]();
    //map有个方法叫next
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());

}


//object实现接口
{
    let obj={
        start:[1,3,2],
        end:[7,9,6],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }

        }
    };

    for (let value of obj){
        console.log(value);
    }

}
{
    let arr=['hello','world'];
    for(let value of arr){
        console.log(value);
    }
}