
<template>
  <div class="box">
  <p>一个数轴上共有N个点，第一个点的坐标是度度熊现在位置，第N-1个点是度度熊的家。现在他需要依次的从0号坐标走到N-1号坐标。

但是除了0号坐标和N-1号坐标，他可以在其余的N-2个坐标中选出一个点，并直接将这个点忽略掉，问度度熊回家至少走多少距离？

输入描述:

输入一个正整数N, N <= 50。

接下来N个整数表示坐标，正数表示X轴的正方向，负数表示X轴的负方向。绝对值小于等于100
输出描述:

输出一个整数表示度度熊最少需要走的距离。
输入例子:

4
1 4 -1 3
输出例子:

4</p>
   <label for="first">输入一个正整数N</label>
    <input type="text" name="first" id="first" v-model="firstNum"/>
    <label for="second">输入N个整数表示坐标(逗号隔开)</label>
    <input type="text" name="second" id="second" v-model="secondNum"/>
    <button @click="getRes">结果</button>
    <div class="result" v-html="res"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        firstNum: 4,
        secondNum: "1,4,-1,3",
        res: 0
      }
    },
    methods: {
      getRes () {
        this.res = 0
        let arr = this.secondNum.split(",")
        arr.splice(this.getOne(arr),1)
        console.log(arr)
        for(let i =1;i<arr.length;i++){
          this.res +=Math.abs(arr[i])
        }
      },
      getOne (arr){
        let maxNum = 0,maxIndex=0
        for(let i =0;i<arr.length;i++){
          if(arr[i] > Math.abs(maxNum)){
            maxNum = arr[i]
            maxIndex = i
          }
        }
        return maxIndex
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
