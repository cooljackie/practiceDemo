<template>
  <div>{{childNum}}</div>
</template>

<script >
  export default{
    data () {
      return {
        childNum: 10
      }
    },
    methods:{

    },
    mounted () {
      let _this = this
      setTimeout(function(){
        _this.$emit("getChildNum","this message")
      },2000)
    }
  }
</script>
