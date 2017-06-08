<template>
  <div class="matrix">
    <canvas id="matrix" width='500' height="500">
      <p>您的浏览器不支持canvas</p>
    </canvas>
  </div>
</template>

<script>
  export default {
    methods:{
      initMatrix () {
        let canvas = document.getElementById('matrix'),
            context = canvas.getContext('2d'),
            w = canvas.width = window.innerWidth,
            h = canvas.height = window.innerHeight;
        let clearColor = 'rgba(0, 0, 0, .1)',
            wordColor = "#33ff33",
            words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
            wordsArr = words.split(''),
            font_size = 16,
            clumns = w / font_size,
            drops = [];
        for(let i=0;i<clumns; i++) {
          drops[i] = 1;
        }
        let drawStart = function () {
          context.save();
          context.fillStyle = wordColor;
          context.font = font_size + "px arial";
          for (let i =0; i < drops.length; i++) {
            let text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
                context.fillText(text,i * font_size, drops[i] * font_size);
                if (drops[i] * font_size > h && Math.random() > 0.98){
                  drops[i] = 0;
                }
                  drops[i]++;
          }
          context.restore();
        };
        (function drawFrame(){
          window.requestAnimationFrame(drawFrame,canvas);
          context.fillStyle = clearColor;
          context.fillRect(0,0,w,h);
          drawStart();
        }())
      }
    },
    mounted () {
      this.initMatrix()
    }
  }
</script>
