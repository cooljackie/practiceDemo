<template>
  <div id="box">
    <ul>
      <li v-for="(path,index) in imgList"  @mouseover="overDo(index)" @mouseout="outDo"><img :src="path" alt=""></li>
    </ul>
  </div>
</template>
<script>
let oUl = document.getElementsByTagName('ul')[0]
let oLis = document.getElementsByTagName('li')
let num = 0
export default{
  data () {
    return {
      imgList:['static/images/master/1.jpg','static/images/master/2.jpg','static/images/master/3.jpg',
          'static/images/master/4.jpg','static/images/master/5.jpg']
    }
  },
  methods:{
    initPosition () {
      num = Math.ceil(470/this.imgList.length)
      console.log(num)
      for (let i = 0; i < oLis.length; i++) {
        oLis[i].style.left = num * i + 'px'
      }
    },
    overDo (index) {
      for(let i=0; i < oLis.length; i++){
        if(i<=index){
          this.startMove(oLis[i],{left: i*30})
        }else{
          this.startMove(oLis[i],{left: 470 - 120 + (i-1)*30})
        }
      }
    },
    outDo () {
      for(let i=0; i < oLis.length; i++){
        this.startMove(oLis[i],{left: num*i})
      }
    },
    startMove (obj, json, endFn) {
      var _this = this
      clearInterval(obj.timer)
      obj.timer = setInterval(function(){
        let bBtn = true
        for (let attr in json) {
          let iCur = 0

          if(attr === 'opacity') {
            if(Math.round(parseFloat(_this.getStyle(obj,attr))*100)===0){
              iCur = Math.round(parseFloat(_this.getStyle(obj,attr))*100)
            }else{
              icur = Math.round(parseFloat(_this.getStyle(obj,attr))*100) || 100
            }
          }else{
            iCur = parseInt(_this.getStyle(obj,attr)) || 0
          }

          let iSpeed = (json[attr] - iCur)/8
          iSpeed = iSpeed>0? Math.ceil(iSpeed) : Math.floor(iSpeed)
          if(iCur!=json[attr]){
            bBtn = false
          }
          if(attr === 'opacity') {
            obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed) +')'
            obj.style.opacity = (iCur + iSpeed) / 100
          }else{
            obj.style[attr] = iCur + iSpeed + 'px'
          }
        }
        if(bBtn) {
          clearInterval(obj.timer);
          if(endFn) {
            endFn.call(obj)
          }
        }
      },30)
    },
    getStyle(obj,attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr]
      }else {
        return getComputedStyle(obj,false)[attr]
      }
    }
  },
  mounted (){
    this.initPosition()
  }
}
</script>
<style scoped>
  body,ul,ol{margin:0;padding:0;}
  li{ list-style:none;}
  img{ border:none; vertical-align:top; }
  #box{
    width:470px;
    height:150px;
    position:relative;
    margin:30px auto;
    overflow:hidden;
  }
ul{ width:470px; position:absolute;left:0; top:0; z-index:1;}
ul li{width:470px; position:absolute; top:0;}
</style>
