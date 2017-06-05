/**
 * Created by baobaochu on 2017/5/30.
 */
const AUTOHR='baobaochu';
export class Member{

    //コンストラクタ
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //メソッド
    getName(){
        return this.lastName+this.firstName;
    }

};
export class Area{};