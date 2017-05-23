<template>
  <div class="water-fall-box">
  <div class="item" v-for="item in imgs">
    <img :src="item" />
  </div>
  </div>
</template>

<script >
  export default{
    data () {
      return {
        imgs:['/static/images/1.jpeg','/static/images/2.jpeg','/static/images/3.jpeg','/static/images/4.jpeg','/static/images/5.jpeg',
        '/static/images/6.jpeg','/static/images/7.jpeg','/static/images/8.jpeg','/static/images/9.jpeg','/static/images/10.jpeg','/static/images/11.jpeg','/static/images/12.jpeg'],
        oboxWidth: 224
      }
    },
    mounted () {
      this.$nextTick(function(){
        var items = document.querySelectorAll('.item')
        var oboxWidth = 224
        var rows = Math.floor(800 / oboxWidth)
        console.log(document.querySelector('.water-fall-box').offsetWidth)
        var allHeight = []
        for(var i=0;i<this.imgs.length;i++){
          if(i<rows){
            allHeight.push(items[i].offsetHeight)
            items[i].style.left = i*oboxWidth + 'px'
          }else{
            items[i].style.left = (i%rows)*oboxWidth + 'px'
            items[i].style.top = allHeight[(i%rows)] + 'px'
            allHeight[(i%rows)] += items[i].offsetHeight
          }
        }
      })
    }
  }
</script>
<style scoped>
  .water-fall-box{
    width: 800px;
    margin: 100px auto 0;
    vertical-align: top;
    position: relative;
  }
  .item{
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: blue;
    vertical-align: top;
    position: absolute;
  }
/*  .item:nth-child(1){
    height: 230px;
  }
   .item:nth-child(2){
    height: 200px;
  }
   .item:nth-child(3){
    height: 270px;
  }
   .item:nth-child(4){
    margin-top:-40px;
    height: 180px;
  }
   .item:nth-child(5){
    margin-top:-70px;
    height: 220px;
  }
   .item:nth-child(6){
    height: 200px;
  }*/
</style>
