<template>
  <div class="box">
  <p>给定一个数组,使用快速排序对数组排序
</p>
    <label for="second">输入N个整数(逗号隔开)</label>
    <input type="text" name="second" id="second" v-model="secondNum"/>
    <button @click="getRes">结果</button>
    <div class="result" v-html="res"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        secondNum: [10,3,56,46,23,7,30,78,-35,66,-8],
        res:""
      }
    },
    methods: {
      getRes () {
        let arr = this.secondNum
        arr = this.quickSort(arr)
        this.res = arr.join(",")
        console.log(arr)
      },
      quickSort (arr) {
        if(arr.length<=1) {return arr}
        let index = Math.floor(arr.length/2)
        var point = arr.splice(index,i)[0]
        console.log(point)
        let left = [],right =[]
        for(let i=0;i<arr.length;i++){
          if(arr[i] < point){
            left.push(arr[i])
          }else{
            right.push(arr[i])
          }
        }
        console.log(left.join(",")+"--------"+right.join(","))
        return this.quickSort(left).concat([point],this.quickSort(right))
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
