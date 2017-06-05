/**
 * Created by baobaochu on 2017/5/31.
 */
//遍历器函数
{
    let tell=function* () {
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k=tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}
{
    let obj={


    };
    obj [Symbol.iterator]=function* () {
        yield 1;
        yield 2;
        yield 3;
    }


    for (let value of obj){
        console.log('value',value);
    }
}

{
    let state=function* () {
        while (1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    };

    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

//抽奖
{
    //抽奖业务逻辑
    let draw=function (count) {
        //具体抽奖逻辑
        console.info(`剩余${count}次`)
    };

    let residue=function* (count) {
        while (count>0){
            count--;
            yield draw(count);
        }

    };

    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function () {
        star.next();
    },false)

}

//实时取得服务器状态
