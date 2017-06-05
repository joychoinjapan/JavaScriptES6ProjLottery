/**
 * Created by baobaochu on 2017/6/2.
 */
//新規にノードを作成
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         document.getElementById('btn').addEventListener('click',function () {
//             console.log('click');
//             //テキストボックスを取得
//             let name=document.getElementById('name');
//             let url=document.getElementById('url');
//
//             //<a>要素を生成
//             let anchor=document.createElement('a');
//             //<a>要素のhref属性を設定
//             anchor.href=url.value;
//             //テキストノードを生成
//             let text=document.createTextNode(name.value);
//
//             anchor.appendChild(text);
//             //br要素を生成
//             let br=document.createElement('br');
//             //id はlist のノードを取得
//             let list=document.getElementById('list');
//             //<a><br>要素を順番で追加
//             list.appendChild(anchor);
//             list.appendChild(br);
//         },false);
//     },false);
// }
//
// //DocumentFragmentオブジエクトの利用
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         let books=[{title:'独習PHP',price:3200}, {title:'Java',price:2600},{title:'Android',price:2000},];
//
//         let list=document.getElementById('booklist');
//         //ストック容器を生成
//         let frag=document.createDocumentFragment();
//
//         for(let i=0,len=books.length;i<len;i++){
//             let b=books[i];
//             let li=document.createElement('li');
//             let text=document.createTextNode(b.title+':'+b.price+'円');
//             li.appendChild(text);
//             //容器に一時保存
//             frag.appendChild(li);
//         }
//         list.appendChild(frag);
//     },false);
// }
//既存のノードを置き換え、削除する
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         let list=document.getElementById('bookList');
//         let pic=document.getElementById('pic');
//         let del=document.getElementById('del');
//
//         list.addEventListener('click',function (e) {
//             let isbn=e.target.getAttribute('data-isbn');
//             if(isbn){
//
//                 let img=document.createElement('img');
//                 img.src='http://www.wings.msn.to/books/'+isbn+'/'+isbn+'.jpg';
//                 img.alt=e.innerHTML;
//                 img.height=150;
//                 img.width=108;
//
//                 if(pic.getElementsByTagName('img').length>0){
//                     pic.replaceChild(img,pic.lastChild);
//                 }else {
//                     del.disabled=false;
//                 }
//             }
//         },false);
//
//         del.addEventListener('click',function () {
//
//             pic.removeChild(pic.lastChild);
//             del.disabled=true;
//         },false)
//
//
//     },false)
// }

// {
// document.addEventListener('DOMContentLoaded', function() {
//     var list = document.getElementById('bookList');
//     var pic = document.getElementById('pic');
//     var del = document.getElementById('del');
//
//     list.addEventListener('click', function(e) {
//         var isbn = e.target.getAttribute('data-isbn');
//
//         if (isbn) {
//             var img = document.createElement('img');
//             img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
//             img.alt = e.innerHTML;
//             img.height = 150;
//             img.width = 108;
//             if(pic.getElementsByTagName('img').length > 0){
//                 pic.replaceChild(img, pic.lastChild);
//             } else {
//                 del.disabled = false;
//                 pic.appendChild(img);
//             }
//         }
//     }, false);
//
//     del.addEventListener('click', function() {
//         pic.removeChild(pic.lastChild);
//         del.disabled = true;
//     }, false);
// }, false);
// }
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         let li=document.getElementsByTagName('li');
//         console.log('変更前:'+li.length);
//
//         let ul=document.getElementById('list03');
//         ul.appendChild(document.createElement('li'));
//         console.log('変更後'+li.length);
//     },false);
// }
{
    document.addEventListener('DOMContentLoaded',function () {
        let second=document.getElementById('second');
        let li=document.getElementsByTagName('li');
        let len=li.length;

        for(let i=0;i<len;i++){
            let item=li.item(i);
            let new_li=document.createElement('li');
            let new_text=document.createTextNode(item.textContent);
            new_li.appendChild(new_text);
            second.appendChild(new_li);
        }
    },false)
}