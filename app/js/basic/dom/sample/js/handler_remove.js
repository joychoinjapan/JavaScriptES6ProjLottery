/**
 * Created by baobaochu on 2017/6/3.
 */

//delete event handler
{
    window.onload=function () {
        var btn=document.getElementById('btn');

        btn.onclick=function () {
            window.alert('hello');
        };

        btn.onclick=null;
    }
}
//delete event listener

{

}