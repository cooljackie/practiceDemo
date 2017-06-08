<template>
  <div class="container">
    <div class="main">
      <div class="mainIn">
        <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
      </div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>


<style scoped>
  .container{
    width: 100%;
    height: 850px;
    border: 1px #000 solid;
  }
  .main,.left,.right{
    float: left;
    height: 850px;
  }
  .main{
    width:100%;  background:#ace;
  }
  .left{
    width:250px; background:#eee; margin-left:-100%;
  }
  .right{
    width:250px; background:#000; margin-left:-250px;
  }
  .mainIn{margin:0 250px 0 250px}
</style>
