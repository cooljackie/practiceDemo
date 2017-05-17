
<template>
  <div class="box">
  <p>请你实现一个简单的字符串替换函数。原串中需要替换的占位符为”%s”,请按照参数列表的顺序一一替换占位符。若参数列表的字符数大于占位符个数。则将剩下的参数字符添加到字符串的结尾。
给定一个字符串A，同时给定它的长度n及参数字符数组arg，请返回替换后的字符串。保证参数个数大于等于占位符个数。保证原串由大小写英文字母组成，同时长度小于等于500。

测试样例：

“A%sC%sE”,7,[‘B’,’D’,’F’]
返回：

“ABCDEF”

</p>
    <label for="second">输入字符串A</label>
    <input type="text" name="second" id="second" v-model="secondNum"/>
    <label for="second">输入字符数组</label>
    <input type="text" name="str" id="second" v-model="strArr"/>
    <button @click="getRes">结果</button>
    <div class="result" v-html="res"></div>
  </div>
</template>

<script>
String.prototype.replaceStr = function(arr){
  let flag = 0
  let newStr = ""
  let strArr = this.split("%s")
  for(let i=0;i<strArr.length;i++){
    newStr += strArr[i]+arr[i]
  }
  for(let i=strArr.length; i<arr.length; i++){
    newStr += arr[i]
  }
  return newStr
}
  export default {
    data () {
      return {
        secondNum: "A%sC%sE",
        strArr: "B,D,F",
        res:""
      }
    },
    methods: {
      getRes () {
        let arr = this.strArr.split(",")
        this.res = this.secondNum.replaceStr(arr)
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
