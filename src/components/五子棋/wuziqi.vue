
<template>
  <div class="box">
    <div id="chessboard">
      <div v-for="item in 700" class="chess-box" @click="paintChess($event,item)"></div>
      <div class="mask" v-if="!startGame"></div>
    </div>
    <div class="btn-box">
      <button @click="blackStart" id="blackStart">黑棋先行开始</button>
      <button @click="whiteStart" id="whiteStart">白棋先行开始</button>
      <button @click="restart">重新开始</button>
      <button @click="regret">悔棋</button>
    </div>
  </div>
</template>
<script>
const map = new Map()
  export default {
    data () {
      return {
        blackFirst: true,
        startGame: false,
        memory: []
      }
    },
    methods: {
      paintChess (e,item) {
        if(e.target.hasChildNodes() || e.target.className!="chess-box"){
          return
        }
        let oDiv = document.createElement("div")
        if(this.blackFirst){
          oDiv.className = 'black-chess'
        }else{
          oDiv.className = 'white-chess'
        }
        e.target.appendChild(oDiv)
        let x = (item % 28)===0 ? 28:(item%28)
        let y = parseInt(item/25)+1
        let data = {"point":[x,y],"isBlack":this.blackFirst}
        map.set(item,data)
        if(this.isWin(item,this.blackFirst)){
          if(this.blackFirst){
            alert("恭喜黑棋获胜")
            this.startGame=false
          }else{
            alert("恭喜白棋获胜")
            this.startGame=false
          }
        }
        this.memory.push(item)
        this.blackFirst = !this.blackFirst
      },
      blackStart () {
        this.blackFirst = true
        this.startGame = true
        document.getElementById("blackStart").disabled=true
        document.getElementById("whiteStart").disabled=true
      },
      whiteStart () {
        this.blackFirst = false
        this.startGame = true
        document.getElementById("blackStart").disabled=true
        document.getElementById("whiteStart").disabled=true
      },
      restart () {
        if(confirm("确定要重新开始游戏?")){
          let boxs = document.querySelectorAll(".chess-box")
          for(let i=0;i<boxs.length;i++){
            if(boxs[i].firstChild){
              boxs[i].removeChild(boxs[i].firstChild)
            }
          }
          map.clear()
          document.getElementById("blackStart").disabled=false
          document.getElementById("whiteStart").disabled=false
        }
      },
      regret () {
        if(this.memory.length === 0){
          alert('已无棋可悔')
        }else{
          let str = this.blackFirst?"是否同意白方悔棋?":"是否同意黑方悔棋?"
            if(confirm(str)){
              let num = this.memory.pop()
              map.delete(num)
              let box = document.querySelectorAll(".chess-box")[num-1]
              box.removeChild(box.firstChild)
              this.blackFirst = !this.blackFirst
          }
        }
      },
      isWin (num,isBlack) {
        let point = []
        let win = false
        let sameTimes = 0
        for(let i=1;i<5;i++){
          //判断被点击水平是否联系同色棋子
          let rightObj = map.get(num+i)
          let leftObj = map.get(num-i)
          //没有棋子直接返回false
          if(typeof rightObj !="undefined"){
             //坐标不超出边界
            if(parseInt((num+i)/28)===parseInt(num/28) && rightObj.isBlack === isBlack){
              sameTimes += 1
            }
          }
          if(typeof leftObj !="undefined"){
             //坐标不超出边界
            if(parseInt((num-i)/28)===parseInt(num/28) && leftObj.isBlack ===isBlack){
              sameTimes += 1
            }
          }
        }
      if(sameTimes>=4){return true}else{sameTimes=0}
      for(let i=1;i<5;i++){
          //判断被点击竖直是否联系同色棋子
          let topObj = map.get(num-28*i)
          let downObj = map.get(num+28*i)
          //没有棋子直接返回false
          if(typeof topObj !="undefined"){
             //坐标不超出边界
            if(parseInt((num+28*i)%28)===parseInt(num%28) && topObj.isBlack === isBlack){
              sameTimes += 1
            }
          }
          if(typeof downObj !="undefined"){
             //坐标不超出边界
            if(parseInt((num-28*i)%28)===parseInt(num%28) && downObj.isBlack ===isBlack){
              sameTimes += 1
            }
          }
        }
      if(sameTimes>=4){return true}else{sameTimes=0}
      for(let i=1;i<5;i++){
        //判断被点击右上和左下是否联系同色棋子
        let topRightObj = map.get(num-28*i+i)
        let downLeftObj = map.get(num+28*i-i)
         if(typeof topRightObj !="undefined"){
             //坐标不超出边界
            if(topRightObj.isBlack === isBlack){
              sameTimes += 1
            }
          }
          if(typeof downLeftObj !="undefined"){
             //坐标不超出边界
            if(downLeftObj.isBlack ===isBlack){
              sameTimes += 1
            }
          }
        }
        if(sameTimes>=4){return true}else{sameTimes=0}
        for(let i=1;i<5;i++){
        //判断被点击左上和右下是否联系同色棋子
        let topLeftObj = map.get(num-28*i-i)
        let downRightObj = map.get(num+28*i+i)
         if(typeof topLeftObj !="undefined"){
             //坐标不超出边界
            if(topLeftObj.isBlack === isBlack){
              sameTimes += 1
            }
          }
          if(typeof downRightObj !="undefined"){
             //坐标不超出边界
            if(downRightObj.isBlack ===isBlack){
              sameTimes += 1
            }
          }
        }
        if(sameTimes>=4){return true}else{sameTimes=0}
        return false
      }
    }
  }
</script>

<style>
  .box{
    width: 700px;
    height: 500px;
    margin: 0 auto;
  }
  #chessboard{
    width: 560px;
    height: 500px;
    border: 1px #000 solid;
    float: left;
    background-color: rgb(167,199,231);
    position: relative;
  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .btn-box{
    float: left;
    width: 136px;
    height: 500px;
  }
  .chess-box{
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-collapse: collapse;
    border: 1px #666 solid;
    float: left;
  }
  .black-chess{
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #000;
  }
  .white-chess{
     width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: #fff;
  }
  .btn-box button{
    width: 100%;
    height: 50px;
    font-size: 18px;
    display: block;
    text-align: center;
  }
</style>
