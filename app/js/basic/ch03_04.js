
/**
 * 3.4 日付時刻データを操作する
 * 3.4.1 Dateオブジェクトを生成
 *
 */


{
    //生成された時点でのシステムの日付をセット
    let date1=new Date();
    //日付文字列の元にDateオブジエクトを生成
    let date2=new Date('2017/02/03 20:07:15');
    //年月日/時分秒/ミリ秒で指定。ただし月は0-11
    let date3=new Date(2017,6,12,12,56,500);
    //タイムスタンプ値で指定する
    let date4=new Date(1480849635500);
    console.info(date1);
    console.info(date2);
    console.info(date3);
    console.info(date4);
}

{
  let date=new Date(2017,5,12,11,37,15,999);

    console.info(date);
    console.info('年',date.getFullYear());
    console.info('月',date.getMonth());
    console.info('日',date.getDate());
    console.info('曜日',date.getDay());
    console.info('時',date.getHours());
    console.info('分',date.getMinutes());
    console.info('秒',date.getSeconds());
    console.info('タイムスタンプ',date.getTime());
    console.info('協定世界時との時差',date.getTimezoneOffset());

    console.info('年',date.getUTCFullYear());
    console.info('月',date.getUTCMonth());
    console.info('日',date.getUTCDate());
    console.info('時',date.getUTCHours());
    console.info('分',date.getUTCMinutes());
    console.info('秒',date.getUTCSeconds());
    console.info('ミリ秒',date.getUTCMilliseconds());

}

//日付/時刻値を加算/減算する

{
    let date=new Date(2017,5,12,11,37,15,999);
    console.log(date.toLocaleString());
    date.setMonth(date.getMonth()+3);
    console.info(date.toLocaleString());
    date.setDate(date.getDate()-20);
    console.log(date.toLocaleString());

}
//最終日を求める
{　
    let date=new Date(2017,5,12,11,37,15,999);
    console.log(date.toLocaleString());
    date.setMonth(date.getMonth()+1);
    date.setDate(0);
    console.log(date.toLocaleString());
}
//日付/時刻の差分を求める
{
    let date=new Date(2017,4,15);
    let date2=new Date(2017,5,23);
    let dif=(date2.getTime()-date.getTime())/(1000*60*60*24);
    console.log(dif);
}
