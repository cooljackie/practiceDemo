<template>
  <div class="percent">
    <canvas id="percentLoad" width="300" height="300">
      <p>您的浏览器不支持canvas</p>
    </canvas>
  </div>
</template>

<script>
  export default{
    methods:{
      getPercentLoad () {
        let canvas = document.getElementById('percentLoad'),
            context = canvas.getContext('2d'),
            centerX = canvas.width/2,
            centerY = canvas.height/2,
            rad = Math.PI*2/100,
            speed = 0.1
            console.log(centerX,centerY)
        let blueCircle = function (n){
            context.save();
            context.beginPath();
            context.strokeStyle = "#49f";
            context.lineWidth = 12;
            context.arc(centerX,centerY,100,-Math.PI/2,-Math.PI/2 + n*rad,false);
            context.stroke();
            context.restore();
          },
            whiteCircle = function () {
            context.save();
            context.beginPath();
            context.strokeStyle = "#A5DEF1";
            context.lineWidth = 12;
            context.arc(centerX,centerY,100,0,Math.PI*2,false);
            context.stroke();
            context.closePath();
            context.restore();
          },
            textC = function  (n) {
            context.save();
            context.fillStyle = "#F47C7C";
            context.font = "40px Arial";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(n.toFixed(0)+"%",centerX,centerY);
            context.restore;
          };
           (function drawFrame(){
             window.requestAnimationFrame(drawFrame, canvas);
             context.clearRect(0, 0, canvas.width, canvas.height);

             whiteCircle();
             textC(speed);
             blueCircle(speed);

             if(speed > 100) speed = 0;
             speed += 0.1;
        }());
      },
    },
    mounted () {
      this.getPercentLoad()
    }
  }
</script>
