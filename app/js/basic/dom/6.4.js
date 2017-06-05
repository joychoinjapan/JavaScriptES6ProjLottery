/**
 * Created by baobaochu on 2017/6/1.
 */
/**
 * Form要素にアクセス
 */

//入力ボックスの値を取得
{
    document.addEventListener('DOMContentLoaded',function () {
        document.querySelectorAll('#input #btn').item(0).addEventListener('click',function () {
            let name=document.querySelectorAll('#input #name').item(0);
            console.log(name.value);

        },false);
    },false);
}
//チェックボックスの値を取得
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         document.querySelectorAll('#checkbox #btn').item(0).addEventListener('click',function () {
//             let result=[];
//             let foods=document.getElementsByName('food');
//             for(let i=0,len=foods.length;i<len; i++){
//                 let food=foods.item(i);
//                 if (food.checked){
//                     result.push(food.value);
//                 }
//
//             }
//             window.alert(result.toString());
//         },false)
//     },false)
// }
//ラジオボタンの値を取得
// {
//     document.addEventListener('DOMContentLoaded',function () {
//         let getRadioValue=function (name) {
//             let result='';
//             let elems=document.querySelectorAll('#radio input[name='+name+']');
//
//             for(let i=0,len=elems.length;i<len;i++){
//                 let elem=elems.item(i);
//                 if(elem.checked){
//                     result=elem.value;
//                     break;
//                 }
//             }
//             return result;
//         };
//
//
//         document.querySelectorAll('#radio #btn').item(0).addEventListener('click',function () {
//             window.alert(getRadioValue('food'));
//         },false);
//
//     },false)
// }

//ラジオボタン・チェックボックスの値を設定
{
    document.addEventListener('DOMContentLoaded',function () {
        let setRadioValue=function (name,value) {
            let elems = document.querySelectorAll('#radio input[name=' + name + ']');
            for (let i = 0, len = elems.length; i < len; i++) {
                let elem = elems.item(i);
                if (elem.value === value) {
                    elem.checked = true;
                    break;
                }
            }
        };

        setRadioValue('food','焼肉');



        },false)
}

//チェックボックスの設定
{
    document.addEventListener('DOMContentLoaded',function () {
        let setCheckValue=function (name,value) {
            let elems=document.querySelectorAll('#checkbox input[name='+name+']');
            for(let i=0,len=elems.length;i<len;i++){
                let elem=elems.item(i);
                if(value.indexOf(elem.value)>-1){
                    elem.checked=true;
                }
            }
        };

        setCheckValue('food',['餃子','焼肉']);
    },false)
}
//6.4.5複数選択できるリストボックスの値を取得
{
    document.addEventListener('DOMContentLoaded',function () {

        let getSelectedValue=function (name) {
            let result=[];
            let opts=document.querySelectorAll('#listbox #'+name).item(0).options;
            for(let i=0,len=opts.length;i<len;i++){
                let opt=opts.item(i);
                if(opt.selected){
                    result.push(opt.value);
                }
            }
            return result;
        };

        document.querySelectorAll("#listbox #btn").item(0).addEventListener('click',function () {
            window.alert(getSelectedValue('food'));
        },false)


    },false)

}
//listboxの設定
{
    document.addEventListener('DOMContentLoaded',function () {
        let setSelectedValue=function (name,value) {
            let opts=document.querySelectorAll('#listbox #'+name).item(0).options;
            for(let i=0,len=opts.length;i<len;i++){
                let opt=opts.item(i);
                if(value.indexOf(opt.value)>-1){
                    opt.selected=true;
                }
            }

        }

        setSelectedValue('food',['ラーメン','焼肉']);

    },false)


}
//アップロードされたファイルの情報を取得
// {
//     window.addEventListener('DOMContentLoaded',function () {
//         document.getElementById('file').addEventListener('change',function (e) {
//             let inputs=document.getElementById('file').files;
//             for(let i=0,len=inputs.length;i<len;i++){
//                 let input=inputs[i];
//                 console.log('filename',input.name);
//                 console.log('type',input.type);
//                 console.log('size',input.size/1024+'KB');
//                 console.log('最終更新日'+input.lastModifiedDate);
//             }
//         })
//     })
// }
//テキストファイルの内容を取得
{
    window.addEventListener('DOMContentLoaded',function () {
        document.getElementById('file').addEventListener('change',function (e) {
            let input=document.getElementById('file').files[0];
            let reader=new FileReader();
            //load event listenerを定義　ファイルの読み込みに成功したタイミングで実行されます
            reader.addEventListener('load',function () {
                //pre id=result 要素に反映
                document.getElementById('result01').textContent=reader.result;
            },true);
            reader.readAsText(input,'UTF-8');
        },true);

    },true)
}
//バイナリファイルの内容を取得
{
    window.addEventListener('DOMContentLoaded',function () {
        document.getElementById('file01').addEventListener('change',function (e) {
            let input=document.getElementById('file01').files[0];
            let reader=new FileReader();
            reader.addEventListener('load',function (e) {
                document.getElementById('result02').src=reader.result;
            },true);
            reader.readAsDataURL(input)
        },true)
    },true)
}