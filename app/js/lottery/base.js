import $ from 'jquery';

/**
 * 未定义的数据结构：
 * play_list map 玩法
 * number set 号码
 * omit map 遗漏数据
 * openCode set 奖号
 *
 */
class Base{
  /**
   * [initPlayList 初始化奖金和玩法及说明]
   * @return {[type]} [description]
   */
  //保存玩法以及提示。设置奖金，提示和名称
  //采用map的数据结构。可以级联操作
  initPlayList(){
    this.play_list.set('r2',{
      bonus:6,
      tip:'从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
      name:'任二'
    })
    .set('r3',{
      bonus:19,
      tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
      name:'任三'
    })
    .set('r4',{
      bonus:78,
      tip:'从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
      name:'任四'
    })
    .set('r5',{
      bonus:540,
      tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
      name:'任五'
    })
    .set('r6',{
      bonus:90,
      tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
      name:'任六'
    })
    .set('r7',{
      bonus:26,
      tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
      name:'任七'
    })
    .set('r8',{
      bonus:9,
      tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
      name:'任八'
    })
  }
  /**
   * [initNumber 初始化号码]
   * @return {[type]} [description]
   */

  //1的时候个位数要补充一个0
  //number是个set对象，是因为投注号码不可能重复，set不允许元素重复，所以使用set
  initNumber(){
    for(let i=1;i<12;i++){
      //padStart让字符串保持两位长度，如果长度不够，添加0／补白
      this.number.add((''+i).padStart(2,'0'))
    }
  }

  /**
   * [setOmit 设置遗漏数据]
   * @param {[map]} omit [description]
   */
  setOmit(omit){
    //保存对当前对象的引用
    let self=this;
    //把当前omit对象的的数据清空
    //omit是一个map对象
    self.omit.clear();
    //遍历map对象omit
    for(let [index,item] of omit.entries()){
      //从参数中传进来的新的遗漏数据保存。index指的是数字号码，item指的是还剩多少个遗漏。
      self.omit.set(index,item)
    }

    //omit_el是一个选择器。将遗漏数据的每个数值item设置为新的数值（从omitmap中拿到的数值）
    $(self.omit_el).each(function(index,item){
      $(item).text(self.omit.get(index))
    });
  }

  /**
   * [setOpenCode 设置开奖]
   * @param {[type]} code [description]
   */
  //opencode是一个set。code是新传来的奖号参数set，将新传进来的code set的每个值加入opencode开奖set对象中
  setOpenCode(code){
    let self=this;
    //从当前对象中拿到open_code map，将codemap的内容全部清除
    self.open_code.clear();
    for(let item of code.values()){
      self.open_code.add(item);
    }
    //调用更新奖号的接口
    self.updateOpenCode&&self.updateOpenCode.call(self,code);
  }

  /**
   * [toggleCodeActive 号码选中取消]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  //
  toggleCodeActive(e){
    let self=this;
    //借助jquery获取当前选中的对象dom
    let $cur=$(e.currentTarget);
    //将该对象切换为选中状态激活。
    $cur.toggleClass('btn-boll-active');
    //计算选中的金额。选中之后自动计算金额。
    self.getCount();
  }

  /**
   * [changePlayNav 切换玩法的交互]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  changePlayNav(e){
    let self=this;
    //获取当前对象。currenttarget指的是子元素，事件绑定的是父元素。
    let $cur=$(e.currentTarget);
    //添加激活类名，去除所有其他兄弟元素节点的激活状态（active）
    $cur.addClass('active').siblings().removeClass('active');
    //将desc属性中的描述R2之类的转换为小写
    self.cur_play=$cur.attr('desc').toLocaleLowerCase();
    //通过playlist map拿到提示说明tip，然后切换dom中的说明文字
    //比如从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖540元
    $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
    //切换玩法的时候会把上一次选中的号码全部清空。
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    self.getCount();
  }

  /**
   * [assistHandle 操作区 全 大 小 奇 偶 清除]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  assistHandle(e){
    //阻止默认事件
    e.preventDefault();
    let self=this;
    //获取当前dom对象
    let $cur=$(e.currentTarget);
    //返回了当前选中的数据[全 大 小 奇偶 等]list中的index
    let index=$cur.index();
    //做操作前，要清空之前的所有选中的东西
    $('.boll-list .btn-boll').removeClass('btn-boll-active');

    //1.全选，将所有号码选中。
    if(index===0){
      $('.boll-list .btn-boll').addClass('btn-boll-active');
    }

    // 大 要求选中所有的大于五的数字，如果遍历到大于五的数字，则全部变为选中。
    if(index===1){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-5>0){
          $(t).addClass('btn-boll-active')
        }
      })
    }

    //小 要求选中所有小于六的数字。如果遍历到小于六的数字，则全部变为选中。
    if(index===2){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-6<0){
          $(t).addClass('btn-boll-active')
        }
      })
    }

    //奇 要求选中所有奇数的数字。如果遍历到奇数的数字，则全部变为选中。
    if(index===3){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==1){
          $(t).addClass('btn-boll-active')
        }
      })
    }
      //偶 要求选中所有级偶数的数字。如果遍历到奇数的数字，则全部变为选中。
    if(index===4){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    self.getCount();
  }

  /**
   * [getName 获取当前彩票名称]
   * @return {[type]} [description]
   */
  getName(){
    //这个name就是当前彩票的玩法名称
    return this.name
  }

  /**
   * [addCode 添加号码]
   */
  //点击确认选号按钮之后，点击完毕放入购物车
  addCode(){
    let self=this;
    //获取选中的号码的文本值拿出来 是一个02030405之类拼接的字符串，然后将它分割为两位一格的数组
    let $active=$('.boll-list .btn-boll-active').text().match(/\d{2}/g);
    //如果active存在，则取得数组的长度
    let active=$active?$active.length:0;
    //计算注数
    let count=self.computeCount(active,self.cur_play);
    //如果注数字大于0，则添加单次号码文本模版，文本模版见下方
      //任五复式 02 07 08 09 10 11 [6注,12元]
      //02 07 08 09 10 11 就是 $active.join(' ') 用空格将数组链连接为一个字符串格式
      //任五 就是玩法名 self.play_list.get(self.cur_play)拿出的字符串
      //count 就是注数
    if(count){
      self.addCodeItem($active.join(' '),self.cur_play,self.play_list.get(self.cur_play).name,count);
    }
  }

  /**
   * [addCodeItem 添加单次号码]
   * @param {[string]} code     [ 02 07 08 09 10 11]
   * @param {[string]} type     [r1等]
   * @param {[type]} typeName [任五等]
   * @param {[number]} count    [注数]
   */
  addCodeItem(code,type,typeName,count){
    let self=this;
    //字符串模版
      //注数大于1的是复式
    const tpl=`
    <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
		 <div class="code">
		     <b>${typeName}${count>1?'复式':'单式'}</b>
			 <b class="em">${code}</b>
			 [${count}注,<em class="code-list-money">${count*2}</em>元]
		 </div>
	 </li>
    `;
    //把文字添加到cart_el的dom对象中去
    $(self.cart_el).append(tpl);

    //追加玩法或者号码后的投注金额
    self.getTotal();
  }


    /**
     * 描述如下：
     * 您选了 1 注，共 2 元 若中奖，奖金： 540 元， 您将盈利 538 元
     * 您选了 6 注，共 12 元 若中奖，奖金： 6 至 36 元， 您将盈利 -6 至 24 元
     */
  getCount(){
    let self=this;
    //获取当前选中的号码组成的数组的长度。
    let active=$('.boll-list .btn-boll-active').length;
    //计算组合的注数
    let count=self.computeCount(active,self.cur_play);
    //获取奖金的范围。为一个数组 rang[0]为最小盈利的额度,rang[1]为最大的盈利的额度。
    let range=self.computeBonus(active,self.cur_play);
    //要花的钱
    let money=count*2;

    //盈利 win1为最小盈利的额度-花的钱 win1为最大盈利的额度-花的钱
    let win1=range[0]-money;
    let win2=range[1]-money;
    //字符串模版
    let tpl;
    //如果最小盈利和最大盈利都小于0，都亏了，显示会亏最多的钱，否则显示最少赚的钱
    let c1=(win1<0&&win2<0)?Math.abs(win1):win1;
    //如果最小盈利和最大盈利都小于0，都亏了，显示会亏最少的钱，否则显示赚的的最多的钱。
    let c2=(win1<0&&win2<0)?Math.abs(win2):win2;

    //如果注数等于0，没有任何盈利。就是 您选了 0 注，共 0 元
    if(count===0){
      tpl=`您选了 <b class="red">${count}</b> 注，共 <b class="red">${count*2}</b> 元`
    }else if(range[0]===range[1]){
      //如果最大盈利和最小盈利都相等
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将${win1>=0?'盈利':'亏损'}
			<strong class="${win1>=0?'red':'green'}">${Math.abs(win1)} </strong> 元</em>`
    }else{
      //如果最大盈利和最小盈利不等
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			您将${(win1<0&&win2<0)?'亏损':'盈利'}
			<strong class="${win1>=0?'red':'green'}">${c1} </strong>
			至 <strong class="${win2>=0?'red':'green'}"> ${c2} </strong>
			元</em>`
    }
    //将结果输出到页面上
    $('.sel_info').html(tpl);

  }

  /**
   * [getTotal 计算所有金额]
   * @return {[type]} [description]
   */
  // 购物车里的金额计算。
  getTotal(){
    let count=0;
    //遍历购物车，取出每个条目的注数累加即可。
    $('.codelist li').each(function(index,item){
      count+=$(item).attr('count')*1;
    })
    $('#count').text(count);
    $('#money').text(count*2);
  }

  /**
   * [getRandom 生成随机数]
   * @param  {[type]} num [机选的注数5]
   * @return {[type]}     [description]
   */
  //机选注数的前置。
  getRandom(num){
    let arr=[],index;
    //定义好随机的空间。number对象就是之前定义的初始化对象。将类似数组的集合转成数组。
    let number=Array.from(this.number);

    //生成num个在1到11范围内的随机数字最后放入数组中。
    while(num--){
      index=Number.parseInt(Math.random()*number.length);
      arr.push(number[index]);
      //将该生成的数字删除掉，就不会有重复的了
      number.splice(index,1);
    }
    return arr.join(' ')
  }

  /**
   * [getRandomCode 添加随机号码]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  getRandomCode(e){
    //阻止默认事件
    e.preventDefault();
    //获取机选几注的count的值
    let num=e.currentTarget.getAttribute('count');
    //获取当前玩法，获取选取多少个号码 任五-五个号码
    let play=this.cur_play.match(/\d+/g)[0];
    let self=this;
    //如果注数为0，则添加无内容进入购物车／清空购物车
    if(num==='0'){
      $(self.cart_el).html('')
    }else{
      //如果注数不为0，则调用addCodeItem方法将数据加入购物车。机选都是单式，都是1
      for(let i=0;i<num;i++){
        self.addCodeItem(self.getRandom(play),self.cur_play,self.play_list.get(self.cur_play).name,1);
      }
    }
  }

}

export default Base
