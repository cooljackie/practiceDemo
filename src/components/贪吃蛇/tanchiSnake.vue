<template>
  <div id="container">
    <div id="ground"></div>
     <div id="gameControl">
        <div id="button">
            <button id="start" @click="clickStart">开始</button>
            <button id="pause" @click="pauseStart">暂停</button>
        </div>
    </div>
  </div>
</template>
<script >
  export default{
    data () {
      return {
        snakeBody: [],
        diRection: 'left',
        oFood:'',
        timer:''
      }
    },
    methods:{
      createGround () {
        let oGround = document.getElementById('ground');
        let oDiv;
        for(let i=0;i<50;i++){
          for(let j=0;j<25;j++){
            oDiv = document.createElement('div');
            oDiv.className = 'block';
            oGround.appendChild(oDiv);
          }
        }
      },
      createSnake () {
        let oGround = document.getElementById('ground');
        let oDiv;
        for(let i = 5;i<8;i++){
          oDiv = document.createElement('div');
          oDiv.className = 'snakeBody';
          oDiv.style.left = 20*i + 'px';
          oDiv.style.top = 60+'px';
          oGround.appendChild(oDiv);
          this.snakeBody.push(oDiv);
        }
      },
      createFood () {
        let flag = true;
        let len = this.snakeBody.length;
        let oGround = document.getElementById('ground');
        let iTop,iLeft;
          iTop = parseInt(Math.random()*24)*20;
          iLeft = parseInt(Math.random()*49)*20;
        let oDiv = document.createElement('div');
        oDiv.className = 'food';
        for(let i = 0; i<len;i++){
          if(this.snakeBody[i].offsetTop === iTop && this.snakeBody[i].offsetLeft === iLeft){
            flag = false;
            break;
          }
        }
        if(flag){
          oDiv.style.top=iTop+'px';
          oDiv.style.left=iLeft+'px';
          this.oFood = oDiv;
          oGround.appendChild(oDiv);
        }else{
          this.createFood();
        }
      },
      snakeMove (direction) {
        let snakeHead = this.snakeBody[0];
        let len = this.snakeBody.length;
        this.diRection = direction;
           for(let i=len-1;i>0;i--){
          this.snakeBody[i].style.left = this.snakeBody[i-1].offsetLeft + 'px';
          this.snakeBody[i].style.top = this.snakeBody[i-1].offsetTop + 'px';;
        }
        switch(direction){
          case 'left':
            snakeHead.style.left = snakeHead.offsetLeft - 20 +'px';
            break;
          case 'right':
            snakeHead.style.left = snakeHead.offsetLeft + 20 + 'px';
            break;
          case 'top':
            snakeHead.style.top = snakeHead.offsetTop - 20 + 'px';
            break;
          case 'bottom':
            snakeHead.style.top = snakeHead.offsetTop + 20 +'px';
        }
        if(snakeHead.offsetTop < 0 || snakeHead.offsetTop > 500 || snakeHead.offsetLeft < 0 || snakeHead.offsetLeft > 1000){
          clearInterval(this.timer);
          if(confirm('再来一次？')){
            window.location.reload();
          }
        }
        for(let i=1;i<len;i++){
          if(snakeHead.offsetTop === this.snakeBody[i].offsetTop && snakeHead.offsetLeft === this.snakeBody[i].offsetLeft){
            clearInterval(this.timer);
            if(confirm('再来一次？')){
              window.location.reload();
            }
          }
        }
        if(snakeHead.offsetLeft === this.oFood.offsetLeft && snakeHead.offsetTop === this.oFood.offsetTop){
          this.oFood.className = 'snakeBody';
          this.snakeBody.push(this.oFood);
          switch(direction){
            case 'left':
              this.snakeBody[len-1].style.left = this.snakeBody[len-2].offsetLeft + 20 +'px';
              break;
            case 'right':
              this.snakeBody[len-1].style.left = this.snakeBody[len-2].offsetLeft - 20 +'px';
              break;
            case 'top':
              this.snakeBody[len-1].style.top = this.snakeBody[len-2].offsetTop + 20 +'px';
              break;
            case 'bottom':
              this.snakeBody[len-1].style.top = this.snakeBody[len-2].offsetTop - 20 +'px';
          }
          this.createFood();
        }
      },
      clickStart () {
        let _this = this;
         clearInterval(_this.timer);  //防止多次点击开始
            _this.timer=setInterval(function(){
                _this.snakeMove(_this.diRection);
            },150);
      },
      pauseStart () {
         clearInterval(this.timer);
      }
    },
    mounted () {
      let _this = this;
      this.createSnake();
      this.createFood();
         document.onkeydown=function(e){  //document不要换成window，出滚动条的话，window会导致窗口移动
        var event=e || window.event;
        var direction=event.keyCode;
        switch (direction){
            case 37:
                if(_this.diRection != 'right'){
                    _this.snakeMove('left');
                }
            break;  //左
            case 39:
                if(_this.diRection != 'left'){
                    _this.snakeMove('right');
                }
            break;  //右
            case 38:
                if(_this.diRection != 'top'){
                    _this.snakeMove('top');
                }
            break;  //上
            case 40:if(_this.diRection != 'bottom'){
                _this.snakeMove('bottom');
            }
            break;  //下
        }
    }
    }
  }
</script>

<style >
   #container{
            width: 1000px;
            height: 550px;
            border: 1px solid #000;
            margin: 100px auto;
        }
        #ground{
            width: 1000px;
            height: 500px;
            position: relative;
        }
        #button{
            float: right;
            height: 50px;
            line-height: 50px;
        }
        button{
            width: 50px;
            height: 20px;
            cursor: pointer;
        }
        .block{
            width: 20px;
            height: 20px;
            background: #2abad9;
            float: left;
        }
        .snakeBody{
            width: 20px;
            height: 20px;
            position: absolute;
            background: #f57926;
        }
        .food{
            width: 20px;
            height: 20px;
            background: green;
            position: absolute;
        }
</style>
