/**
 * Created by baobaochu on 2017/5/31.
 */
//要素ノーどを取得
{
    let current=new Date();
    let result=document.getElementById('result');
    result.textContent=current.toLocaleString();
}
{
    let list=document.getElementsByTagName('a');
    for(let i=0,len=list.length;i<len;i++){
        console.log(list.item(i).href);
    }
    for(let i=0,len=list.length;i<len;i++){
        console.log(list.namedItem('book').href);
    }
}
{
    let current=new Date();
    let nam=document.getElementsByName("time");
    nam[0].value=current.toLocaleString();
}
{
    let list=document.getElementsByClassName('my');
    for(let i=0,len=list.length;i<len;i++){
        console.log(list.item(i).href);}
}
{
    let list=document.querySelectorAll('#list .external');
    let len=list.length;
    for(let i=0;i<len;i++){
        console.log('external',list.item(i).href);
    }
}

//文書ツリー間を行き来する　ノードウォーキング
{
    let s=document.getElementById('food');
    let opts=s.childNodes;
    console.log(opts);
    let len=opts.length;
    for(let i=0;i<len;i++){
        let opt=opts.item(i);
        if(opt.nodeType===1){
            console.log(opt.value);
        }
    }
}
/**
 * nodeType
 * 1 要素
 * 2.属性
 * 3.テキスト
 * ４.CDATA
 */

//子要素リストを取得する別の方法
//firstChild 初めての子　/nextSibling　次の子
{
    let s=document.getElementById('food');
    let child=s.firstChild;
    console.log(child);
    while (child){
        if(child.nodeType===1){
            console.log(child.value)
        }
        child=child.nextSibling;
    }
}

//firstElementChild/nextElementSibling
//初めての子要素/次の子要素
{
    let s=document.getElementById('food');
    let child=s.firstElementChild;
    while(child){
        console.log('lementChild',child.value);
        child=child.nextElementSibling;
    }

}

//6.2.3 イベントドリプンモデル
//イベントハンドラーを定義
// {
//     window.onload=function () {
//         document.getElementById('btn').onclick=function () {
//             window.alert('click');
//         }
//     }
// }
//addEventListenerメソッドで宣言
{
    document.addEventListener('DOMContentLoaded',function () {
        document.getElementById('btn').addEventListener('click',function () {
            window.alert('click2');
        },false)
    },false)
}