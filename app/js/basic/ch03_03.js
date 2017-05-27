/**
 * Created by baobaochu on 2017/5/26.
 */

/**
 * 3.3値の集合を管理操作する Array/Map/Set
 *
 */

/**3.3.1配列を操作する*/
{
    let ary01 = ['佐藤', '高江', '長田'];
    let ary02=new Array('佐藤', '高江', '長田');
    let ary03=new Array();
    let ary04=new Array(10);//長さが10の配列
    //勧める
    let ary05=[];

}
/**メソッドの用法*/
{
    let ary1=['Sato','Takae','Osada','Hio','Saito','Sato'];
    let ary2=['Yabuki','Aoki','Moriyama','Yamada'];
    console.log('長さ',ary1.length);
    console.log('配列ですか',Array.isArray(ary1));
    console.log('文字列に変換',ary1.toString());
    console.log('index0の要素',ary1.indexOf('Sato'));
    console.log('最初のSatoは何番目ですか',ary1.indexOf('Sato'));
    console.log('最後のSatoは何番目ですか',ary1.lastIndexOf('Sato'));

    //配列連結。元の配列は変わらない。
    console.log(ary1.concat(ary2));
    console.log(ary1,ary2);

    //配列の要素を区切り文字delで連結
    console.log(ary1.join('/'));

    //要素の抜き出し 元の配列は変わらない
    console.log(ary1.slice(2));
    console.log(ary1);
    console.log(ary1.slice(0,2));

    //要素の置き換え。置き換え対象要素の取得。置き換え後の配列は変わる
    console.log(ary1.splice(1,2,'Kakeya','Yamaguchi'));
    console.log(ary1);

    //可変長引数を配列に転換
    console.log(Array.of(20,40,60));
    //copyWithin(t,s,e) indexがsからe-1までの要素をindex tからcopy。元の配列は変わるが、要素数が変わらない
    console.log(ary1);
    console.log(ary1.copyWithin(1,3,5));
    console.log(ary1);


    //置き換え。元の要素と変わる
    console.log(ary2);
    console.log(ary2.fill('suzuki',1,3));
    console.log(ary2);

    //配列の末尾の要素を削除
    console.log(ary1);
    console.log(ary1.pop());
    //配列の末尾に要素を追加
    console.log(ary1.push('Kondo'));
    console.log(ary1);
    //配列先頭の要素を取得し、削除
    console.log(ary1.shift());
    console.log(ary1);
    //配列先頭に要素を追加
    console.log(ary1.unshift('Ozawa','Kuge'));
    console.log(ary1);

    //配列の反転
    console.log(ary1.reverse());
    //配列をソート
    console.log(ary1.sort());

}
//stackとキューの実現
{
    let data=[];
    data.push(1);
    data.push(2);
    data.push(3);
    console.log(data.pop());
    console.log(data.pop());
    console.log(data);

    let queue=[3,4,5];
    queue.push(1);
    let q_out=queue.shift();
    console.log(q_out);
    console.log(queue);
}
//配列の内容を順に処理する forEach
{
    let data=[2,3,6,4,8];
    data.forEach(function (value,index,array) {
        console.log(index,value*value);
    })
}
//配列を指定されたルールで加工する mapメソッド
//mapメソッドは新たな配列を作成
{
    let data=[2,3,6,4,8];
    let result=data.map(function (value,index,array) {
        return value;
    });
    console.log(result);
}
//配列に条件に合致した要素が存在するかを確認 some メソッド
{
    let data=[3,6,8,4,0];
    let res=data.some(function (value,index,array) {
        return value%3===0;
    });
    //resはtrue / falseです
    if(res){
        console.log('3の倍数が見つかりました');
    }else{
        console.log('3の倍数は見つかりませんでした');
    }
}
//配列の内容を特定の条件で絞り込む　fileterメソッド
{
    let data=[4,9,16,25];
    let result=data.filter(function (value,index,array) {
        return value%2===1;
        //返すのは条件に合致した要素を並ぶ配列です
    });
    console.log(result);
}
//独自のルールで配列を並べ替える-sortメソッド
{
    let ary=[5,25,10];
    console.log(ary.sort());//文字列としてソート
    console.log(ary.sort(function (x,y) {
        return y-x;//数値としてソート
    }))
}
{
    let classes=['部長','課長','主任','担当'];
    let members=[
        {name:'鈴木',clazz:'主任'},
        {name:'山口',clazz:'部長'},
        {name:'井上',clazz:'担当'},
        {name:'和田',clazz:'課長'},
        {name:'小森',clazz:'担当'},
    ]
    //返すのは順序を並ぶあとのオブジェクトを格納した配列です。
    console.log(members.sort(function (x,y) {
        return classes.indexOf(x.clazz)-classes.indexOf(y.clazz);
    }))
    
}

/**
 * 3.3.2 連想配列を操作する
 * 　Mapオブジェクト
 *
 */
{
    let m=new Map();
    m.set('dog','わんわん');
    m.set('cat','にゃー');
    m.set('mouse','チュー');

    console.log(m.size);
    console.log(m.get('dog'));
    console.log(m.has('cat'));

    for( let key of m.keys()){
        console.log(key);
    }

    for(let value of m.values()){
        console.log(value);
    }

    for(let [key,value] of m){
        console.log(value);
    }

    for(let value of m.values()) {
        console.log(value);
    }

    for(let [key,value] of m){
        console.log(key,value);
    }

    m.delete('dog');
    console.log(m.size);

    for( let [key,value] of m){
        console.log(key,value);
    }
    m.clear();
    console.log(m.size);
}

/**
 * 重複しない値の集合を操作する -setオブジェクト
 *
 */
{
    let s=new Set();
    s.add(10);
    s.add(5);
    s.add(100);
    s.add(50);
    s.add(5);

    console.log(s.has(100));
    console.log(s.size);

    for(let val of s.values()){
        console.log(val);
    }

    for(let val of s){
        console.log(val);
    }

    s.delete(100);
    console.log(s.size);
    s.clear();
    console.log(s.size);
    let s2=new Set([10,5,100,50,5]);
}