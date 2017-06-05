/**
 * Created by baobaochu on 2017/6/3.
 */
{
    document.addEventListener('DOMContentLoaded',function () {
        document.getElementById('key').addEventListener('keydown',function (e) {
            console.log('キーコード:'+e.keyCode+"/"+e.key);
        },false)
    },false)
}