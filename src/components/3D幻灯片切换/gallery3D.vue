<template>
  <div class="container">
    <div class="wrap">
      <div class="gallery-item" v-for="(imgPath,index) in imgsList" :class="{'front':index===current,'item-left':index===currentLeft(current),'item-right':index===currentRight(current),'gallery-out':index!==current&&index!==currentLeft(current)&&index!==currentRight(current)}" @click="switchImg($event)"><img :src="imgPath" alt="图片"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        imgsList: ['static/images/gallery3D/slide-1_f2cbddb.png',
            'static/images/gallery3D/slide-2_3514fcb.png',
            'static/images/gallery3D/slide-3_2a30e56.png',
            'static/images/gallery3D/slide-4_be49976.png',
            'static/images/gallery3D/slide-5_af8e7d5.png'],
        current: 0
      }
    },
    methods:{
      currentLeft(i) {
        console.log(i)
        return i<1?this.imgsList.length-1:i-1
      },
      currentRight(i) {
        return i===this.imgsList.length-1?0:i+1
      },
      switchImg (e) {
        console.log(e.target.parentNode)
        let _this = this
        if(e.target.parentNode.className.indexOf('item-left')>-1){
          if(_this.current===0){
            _this.current=_this.imgsList.length-1
          }else{
            _this.current -= 1
          }
        }else if(e.target.parentNode.className.indexOf('item-right')>-1){
          if(_this.current===_this.imgsList.length-1){
            _this.current = 0
          }else{
            _this.current += 1
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    margin: 0 auto;
    width: 788px;
    height: 567px;
    perspective: 900;
  }
  .wrap{
    position: relative;
    transform-style: preserve-3d;
  }
  .gallery-item{
    position: absolute;
    transition: .6s;
    transform: scale(0.4);
  }
  .gallery-out{
    display: none;
    z-index: -1;
  }
  .front{
    z-index: 5;
    transform: rotateY(0deg) translateX(0) translateZ(0px) scale(0.84);
  }
  .item-left{
    z-index: 3;
    transform: rotateY(55deg) translateX(45px) translateZ(-364px) scale(0.64);
  }
  .item-right{
    z-index: 3;
    transform: rotateY(-55deg) translateX(-45px) translateZ(-364px) scale(0.64);
  }
</style>
