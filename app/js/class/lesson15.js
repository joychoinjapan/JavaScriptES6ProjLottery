/**
 * Created by baobaochu on 2017/5/28.
 */
/**
 * 什么是异步
 * Promise的作用
 * Promise的基本用法
 */

{
    //回调es5的实现

    let ajax=function (callback) {
        console.log('执行');
      setTimeout(function () {
          callback&&callback.call()
      },1000);
    };

    ajax(function () {
        console.log('timeout1');
    });
}
{
    let ajax=function () {
      console.log('执行2');
      return new Promise(function (resolve,reject) {
          setTimeout(function () {
              resolve()
          },1000)
      })
    };

    ajax().then(function () {
        console.log('promise','timeout2');
    })
}
{
    //串联
    let ajax=function () {
        console.log('执行3');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    };

    ajax().then(function () {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },2000)
        })
    }).then(function () {
        console.log('timeout3')
    })
}
//捕获异常错误
{
    let ajax=function (num) {
        console.log('执行4');
        return new Promise(function (resolve,reject) {
            if(num>5){
                resolve()
            }else {
                throw  new Error('出错了')
            }
        })
    };

    ajax(3).then(function () {
        console.log('log',3);
    }).catch(function (err) {
        console.log('catch',err)
    });
}

//场景描述：所有图片加载完毕再加载页面
{
    function loadingImg(src) {
        return new Promise((resolve,reject)=>{
            let img=documtent.createElement('img');
            img.src=src;
            img.onload=function () {
                resolve(img);
            }
            img.onerror=function (err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('http://ir.buimg.com/567571/dfle0720bea6832.png'),
        loadImg('http://ir.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i2.muimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)

}