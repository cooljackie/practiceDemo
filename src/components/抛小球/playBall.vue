<template>
  <div class="box">
  <p>题目描述

小东和三个朋友一起在楼上抛小球，他们站在楼房的不同层，假设小东站的楼层距离地面N米，球从他手里自由落下，每次落地后反跳回上次下落高度的一半，并以此类推知道全部落到地面不跳，求4个小球一共经过了多少米？(数字都为整数)
给定四个整数A,B,C,D，请返回所求结果。

测试样例：

100,90,80,70
返回：

1020

</p>
    <label for="second">输入N个整数(逗号隔开)</label>
    <input type="text" name="second" id="second" v-model="secondNum"/>
    <button @click="getRes">结果</button>
    <div class="result" v-html="res"></div>
  </div>
</template>

<script>
function person(num) {
  this.journey = 0
  this.play = function(h=num){
    if(parseInt(h) <= 0){return 0}
      this.journey += (h+h/2)
      this.play(h/2)
  }
}
  export default {
    data () {
      return {
        secondNum: [100,90,80,70],
        res:""
      }
    },
    methods: {
      getRes () {
        let one = new person(100)
        let two = new person(90)
        let three = new person(80)
        let four = new person(70)
        one.play()
        two.play()
        three.play()
        four.play()
        this.res = one.journey+two.journey+three.journey+four.journey
      },
      quickSort (arr) {

      }
    }
  }
</script>

<style>
  .box{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
</style>
