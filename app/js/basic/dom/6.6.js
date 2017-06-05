/**
 * Created by baobaochu on 2017/6/3.
 */
// {
//     document.addEventListener('DOMContentLoaded',function (){
//         console.log('loaded');
//         let elem=document.getElementById('elem');
//         elem.addEventListener('mouseover',function () {
//             this.style.backgroundColor='Yellow';
//         },false);
//
//         elem.addEventListener('mouseout',function () {
//             this.style.backgroundColor='';
//         },false);
// },false);
//
// }
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         let elem=document.getElementById('elem');
//         elem.addEventListener('click',function () {
//             elem.addEventListener('click',function () {
//                 this.classList.toggle('highlight');
//             })
//
//         },false);
//     })
// }
{
    document.addEventListener('DOMContentLoaded',function () {
        let Counter=function (elem) {
            this.count=0;
            this.elem=elem;
            elem.addEventListener('click',()=> {
                this.count++;
                this.show();
            },false)
        };

        Counter.prototype.show=function () {
            console.log(this.elem.id+'は'+this.count+"回クリックされました")
        };


        let c=new Counter(document.getElementById('btn'));
    },false)
}