<template>
  <div>
    <p>{{fatherNum}},{{getNum}}</p>
     <child v-on:getChildNum="doChildNum"></child>
  </div>
</template>

<script >
import child from './child'
  export default {
    data () {
      return {
        fatherNum: 100,
        getNum:0
      }
    },
    methods:{
      doChildNum (value) {
          this.getNum = value
      }
    },
    components: {
      child
    }
  }
</script>
