/**
 * Created by baobaochu on 2017/6/1.
 */
/**
 * 属性値やテキストを取得/設定する
 */
//getAttribute/setAttribute
{
    document.addEventListener('DOMContentLoaded',function () {
        let logo=document.getElementById('logo');
        let attrs=logo.attributes;
        let len=attrs.length;
        for(let i=0;i<len;i++){
            let attr=attrs.item(i);
            console.log(attr.name+':'+attr.value);
        }
        let title=document.createAttribute('title');
        title.value='logo画像';
        attrs.setNamedItem(title);
        attrs.removeNamedItem('alt');
        for(let i=0;i<len;i++){
            let attr=attrs.item(i);
            console.log(attr.name+':'+attr.value);
        }
        let src=logo.getAttribute('src');
        console.log('src属性'+':'+src);

    },false);

}
//textを取得/設定
//innerHTML/textContent
{
    document.addEventListener('DOMContentLoaded',function () {

        document.getElementById('result_text').textContent=
            '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
        document.getElementById('result_html').innerHTML=
            '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';

    },false)
}
//innerHTML/textContent　テキスト取得時の挙動
{
    document.addEventListener('DOMContentLoaded',function () {
        let list=document.getElementById('list');
        console.log('innerHTML',list.innerHTML);
        console.log('textContent',list.textContent);
    })
}