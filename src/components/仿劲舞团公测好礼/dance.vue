<template>
  <div class="dance-box">
    <div class="mask-wrapper" v-if="maskShow">
       <div class="danceMask" ></div>
         <div class="content-wrapper">
          <a  class="close-btn" @click="closeMask"></a>
          <transition-group name="list" tag="div">
            <div class="content" v-for="(item,index) in contentList" v-show="index===current" :key="index">
              <div class="head">
                <h4>{{item.sub}}</h4>
                <h3>{{item.title}}</h3>
                <div class="qr-box">
                  <p>扫一扫，下载游戏</p>
                  <div class="qrcode">
                    <img src="https://adl.netease.com/d/g/dance/c/fab/qr" alt="">
                  </div>
              </div>
              </div>
              <div class="text">{{item.text}}</div>
            </div>
          </transition-group>
          <a  class="left-btn" @click="prevContent"></a>
          <a  class="right-btn" @click="nextContent"></a>
        </div>
    </div>
    <div class="dance-wrapper">
      <a  v-for="(imgPath,num) in bgImgList" @click="setMaskShow(num)">
        <img :src="imgPath" alt="tupian">
        <div class="line-top" ></div>
        <div class="line-right" ></div>
        <div class="line-bottom" ></div>
        <div class="line-left" ></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        bgImgList: ['static/images/dance/h1.png','static/images/dance/h2.png','static/images/dance/h3.png',
            'static/images/dance/h4.png','static/images/dance/h5.png','static/images/dance/h6.png'],
        maskShow: false,
        contentList: [{"sub":"[六大公测豪礼]","title":"首充大礼！任意金额送永久翅膀","text":"活动时间：9月16日至9月31日活动内容：活动期间内，首次充值任意金额即可获取绝版翅膀（永久），活动结束后将不再有哦。千载难逢，机会难得！参与方式：游戏内直接参与即可。[六大公测豪礼]招财猫！海量钻石大放送扫一扫，下载游戏活动时间："},{"sub":"[六大公测豪礼]","title":"VIP专属礼包！独享贵族福利","text":"<p>活动时间：9月16日至9月31日</p><p>活动内容：</p><p>活动期间内，玩家充值对应不同VIP等级，将可连续每日获得相应的额外奖励。除了每日礼包之外，在线累计一定时长，也有不同的奖励赠送！这是属于VIP的专有福利，</p><p>机不可失！</p><p>参与方式：</p><p>游戏内直接参与即可。</p><p>[六大公测豪礼]</p>"},
        {"sub":"[六大公测豪礼]","title":"七日登陆！天天有惊喜","text":"活动时间：9月16日至9月31日活动内容：活动期间内，首次充值任意金额即可获取绝版翅膀（永久），活动结束后将不再有哦。千载难逢，机会难得！参与方式：游戏内直接参与即可。[六大公测豪礼]招财猫！海量钻石大放送扫一扫，下载游戏活动时间："},{"sub":"[六大公测豪礼]","title":"限时彩蛋！奢华专属服饰","text":"活动时间：9月16日至9月31日活动内容：活动期间内，首次充值任意金额即可获取绝版翅膀（永久"},
        {"sub":"[六大公测豪礼]","title":"限时彩蛋！奢华专属服饰","text":"动时间：9月16日至9月31日活动内容：活动期间内，首次充值任意金额即可获取绝版翅膀（永久"},{"sub":"[六大公测豪礼]","title":"幸运夺宝！一元得绝版服饰","text":"活动时间"}],
        current: 0
      }
    },
    methods:{
      setMaskShow (num) {
        this.maskShow = true
        this.current = num
      },
      closeMask () {
        this.maskShow = false
      },
      prevContent () {
        if(this.current === 0) {
          this.current = this.contentList.length - 1
        }else{
          this.current -=1
        }
      },
      nextContent () {
        if (this.current === this.contentList.length - 1) {
          this.current = 0
        }else{
          this.current += 1
        }
      }
    }
  }
</script>

<style scoped>
  .dance-box{
    width: 100%;
    height: 430px;
    background: url('/static/images/dance/bg-2-1.jpg') no-repeat;
  }
  .dance-wrapper{
    width: 1500px;
    margin: 0 auto;
    font-size: 0;
  }
  .dance-wrapper a{
    display: inline-block;
    margin: 20px 10px 0 0;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
  .line-top,.line-right,.line-bottom,.line-left{
    position: absolute;
    background-color: #fff;
    z-index: -1;
  }
  .line-top{
    height: 2px;
    width: 0;
    top: 10px;
    left: 10px;
    transition: width .2s;
  }
  .line-right{
    width: 2px;
    height: 0;
    top: 10px;
    right:10px;
    transition: height .2s .2s;
  }
    .line-bottom{
    height: 2px;
    width: 0;
    bottom: 10px;
    right: 10px;
    transition: width .2s .4s;
  }
   .line-left{
    width: 2px;
    height: 0;
    bottom: 10px;
    left:10px;
    transition: height .2s .6s;
  }
  .dance-wrapper a:hover .line-top,.dance-wrapper a:hover .line-bottom{
    width: 435px;
    z-index: 10;
  }
   .dance-wrapper a:hover .line-right,.dance-wrapper a:hover .line-left{
    height: 157px;
    z-index: 10;
  }
  .danceMask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.7;
    z-index: 100;
  }
  .content-wrapper{
    position: absolute;
    width: 598px;
    height: 450px;
    background-color:#fff;
    top: 250px;
    left: 50%;
    margin-left: -300px;
    z-index: 1000;
    opacity: 1;
  }
  .content-wrapper .content{
    position: absolute;
    z-index: 1002;
    height: 100%;
    width: 100%;
  }
  .head{
    background-color: rgb(220,91,147);
    height: 133px;
    position: relative;
  }
  .head h4,h3{
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: left;
  }
  .head h4{
    width: 150px;
    padding: 35px 0 0 20px;
    font-size: 16px;
  }
  .head h3{
    font-size: 22px;
    padding: 10px 0 0 20px;

  }
  .qr-box{
    position: absolute;
    top: -2px;
    right: 10px;
  }
  .qr-box p{
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px;
  }
  .qr-box .qrcode{
    width: 94px;
    height: 93px;
    margin-left: 9px;
    background: url(https://dance.res.netease.com/pc/fab/20160912104704/img/qrcode-bg-2_f5f2036.png) no-repeat;
  }
  .qr-box .qrcode img{width: 100%;height: 100%;}
  .close-btn{
    position: absolute;
    width: 59px;
    height: 59px;
    right: -65px;
    top: 0;
    background: url(https://dance.res.netease.com/pc/fab/20160912104704/img/close_469b4a1.png) no-repeat;
  }
  .close-btn:hover,.left-btn:hover,.right-btn:hover{
    background-position: 0 -59px;
  }
  .left-btn,.right-btn{
    position: absolute;
    width: 59px;
    height: 59px;
    top: 50%;
    margin-top: -30px;
  }
  .left-btn{
    background: url(https://dance.res.netease.com/pc/fab/20160912104704/img/prev_955f4f7.png) no-repeat;
    left: -65px;
  }
   .right-btn{
    background: url(https://dance.res.netease.com/pc/fab/20160912104704/img/next_f4a3145.png) no-repeat;
    right: -65px;
  }
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateX(-600px);
}
</style>
