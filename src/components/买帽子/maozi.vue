<template>
  <div class="box">
  <p>度度熊想去商场买一顶帽子，商场里有N顶帽子，有些帽子的价格可能相同。度度熊想买一顶价格第三便宜的帽子，问第三便宜的帽子价格是多少？

输入描述:

首先输入一个正整数N（N <= 50），接下来输入N个数表示每顶帽子的价格（价格均是正整数，且小于等于1000）
输出描述:

如果存在第三便宜的帽子，请输出这个价格是多少，否则输出-1
输入例子:

10
10 10 10 10 20 20 30 30 40 40
输出例子:

30
</p>
   <label for="first">输入一个正整数N</label>
    <input type="text" name="first" id="first" v-model="firstNum"/>
    <label for="second">输入N个整数表示帽子价格(逗号隔开)</label>
    <input type="text" name="second" id="second" v-model="secondNum"/>
    <button @click="getRes">结果</button>
    <div class="result" v-html="res"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        firstNum: 10,
        secondNum: "10,10,10,10,20,20,30,30,40,40",
        res: 0
      }
    },
    methods: {
      getRes () {
        this.res = 0
        let arr = this.secondNum.split(",")
        arr = this.getOne(arr)
        arr.sort(function(a,b){return a-b})
        if(arr[2]==='undefined'){
          this.res = -1
        }else{
          this.res = arr[2]
        }
      },
      getOne (arr){
        let newArr = []
        for(let i=0;i<arr.length;i++){
          if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
          }
        }
        return newArr
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
