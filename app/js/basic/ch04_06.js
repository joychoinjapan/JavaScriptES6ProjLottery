/**
 * Created by baobaochu on 2017/5/29.
 */
/**
 * 4.6関数呼び出しと戻り値
 */
//関数から複数の値を返したい
{
    function getMaxMin(...nums) {
        return [Math.max(...nums),Math.min(...nums)];
    }
    let array=[10,35,-5,78,0];
    let res=getMaxMin(...array);
    console.log(res);

    let [max,min]=getMaxMin(...array);
    console.log(max);
    console.log(min);
    let[,min1]=getMaxMin(...array);
    console.log(min1);
}
//関数自身を再帰的に呼び出す-再帰関数-
{
    function factorial(n) {
        if(n!=0){
            return n*factorial(n-1);
        }
        return 1;
    }

    console.log(factorial(6));
}
//関数の引数も関数　-高階関数-
{
    //高階関数arrayWalkを定義
    function arrayWalk(data, f) {
        for (let key in data) {
            f(data[key], key)
        }
    }

    //配列を処理するためのユーザー定義関数
    function showElement(value, key) {
        console.log(key + ':' + value);
    }

    let ary = [1, 2, 4, 8, 16];
    arrayWalk(ary,showElement);
}
{
    let result=0;
    function arrayWalk(data,f) {
        for(let key in data){
            f(data[key],key);
        }

    }
    function sumElement(value,key) {
        result+=value;
    }

    let array=[1,2,3,4,5];
    arrayWalk(array,sumElement);
    console.log(result);
}

//使いすての関数 匿名関数
{
    let arrayWalk=(data,f)=>{
     for(let key in data){
         f(data[key],key)
     }
    };

    let array=[1,2,3,4,5];
    let sum=0;
    arrayWalk(array,(value,key)=>{
        sum+=value;
    });
    console.log('sum is',sum);
}

