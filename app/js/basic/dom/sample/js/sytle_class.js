/**
 * Created by baobaochu on 2017/6/3.
 */
{
    document.addEventListener('DOMContentLoaded',function () {
        var elem=document.getElementById('elem');
        elem.addEventListener('mouseover',function () {
            this.className='highlight';

        },false);

        elem.addEventListener('mouseout',function () {
            this.className='';
        },false);

        elem.addEventListener('click',function () {
            this.className=(this.className==='highlight'?'':'highlight')
        },false);
    },false);
}