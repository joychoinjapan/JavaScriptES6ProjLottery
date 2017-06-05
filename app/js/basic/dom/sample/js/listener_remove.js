/**
 * Created by baobaochu on 2017/6/3.
 */

//delete event listener

{
    document.addEventListener('DOMContentLoaded',function () {
        var btn=document.getElementById('btn');
        var listener=function () {
            window.alert('hello');
        };

        btn.addEventListener('click',listener,false);
        btn.removeEventListener('click',listener,false);
    })
}