<template>
  <div class="fullpage">
     <page :currentPage="currentPage">

    </page>
    <page :currentPage="currentPage">

    </page>
    <page :currentPage="currentPage">

    </page>
    <page :currentPage="currentPage">

    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
  </div>
</template>

<script>
import Page from './Page.vue';
import PageController from './PageController.vue';
export default {
  name: 'app',
  data () {
    return {
      currentPage: 1,
      options: [{
        // the color of background
        background: 'rgba(229, 199, 46, 1)',
        // the color of text
        color: '#fff',
        // is content center
        isCenter: true,
        // the function before page show
        afterEnter ($child) {
          this.$refs.section1.classList.remove('move-left','move-right');
        },
        // the function after page show
        beforeLeave ($child) {
          let moveType = Math.random()>0.5?'move-left':'move-right';
          this.$refs.section1.classList.add(moveType);
        }
      },{
        background: 'rgba(79, 204, 76, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter ($child) {
          this.$refs.section2.classList.remove('move-left','move-right');
        },
        beforeLeave ($child) {
          let moveType = Math.random()>0.5?'move-left':'move-right';
          this.$refs.section2.classList.add(moveType);
        }
      },{
        background: 'rgba(233, 84, 84, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter ($child) {
          this.$refs.section3.classList.remove('move-left','move-right');
        },
        beforeLeave ($child) {
          let moveType = Math.random()>0.5?'move-left':'move-right';
          this.$refs.section3.classList.add(moveType);
        }
      },{
        background: 'rgba(46, 153, 229, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter ($child) {
          this.$refs.section4.classList.remove('move-left','move-right');
        },
        beforeLeave ($child) {
          let moveType = Math.random()>0.5?'move-left':'move-right';
          this.$refs.section4.classList.add(moveType);
        }
      }],
      controllerOption: {
        arrowsType: 'animate',
        navbar: true
      }
    }
  },
  computed: {
    // 总page数
    pageNum () {
      return this.options.length;
    }
  },
  methods: {
    changePage (index) {
      // beforeLeave Hook
      let beforeIndex = this.currentPage - 1;
      let leaveFunction = this.options[beforeIndex].beforeLeave;
      typeof leaveFunction === 'function' && leaveFunction.call(this,this.$children[beforeIndex]);
      // 改变page
      this.currentPage = index;
      // afterEnter Hook
      let nextIndex = index-1;
      let enterFunction = this.options[nextIndex].afterEnter;
      this.$nextTick(function () {
        typeof enterFunction === 'function' && enterFunction.call(this,this.$children[nextIndex]);
      })
    }
  },
  components: {
    Page, PageController
  },
  mounted () {
    this.$children.forEach((child, index) => {
      // 动态设置各个page内的options
      if (child.option === null) {
        let childOption = this.options[index];
        this.$set(childOption,'index',index+1);
        child.option = childOption;
      }
    });
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.app {
  height: 100%;
  width: 100%;
}
/* 下面的是与fullPage无关的样式 */
.animate {
  transition: all 1s ease-out 0s;
}
.move-left {
  transform: translateX(-1000%);
}
.move-right {
  transform: translateX(1000%);
}
@media screen and (max-width:768px) {
  html,body {
    font-size: 12px;
  }
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: underline;
}
.person-img {
  width: 223px;
  height: 185px;
  float: left;
  background-color: #fff;
  box-shadow: 3px 3px 10px #999;
}
.person-img img {
  height: 100%;
  width: 100%;
}
.person-basic-info {
  overflow: hidden;
  float: right;
  margin-left: 40px;
}
.info-line {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.text-center {
  text-align: center;
}
.text-bold {
  font-weight: bold;
}
.demo-intro {
  text-indent: 2em;
}
dt {
  font-weight: bold;
  font-size: 16px;
}
ul {
  padding-left: 1em;
}
.avatar {
  margin: 10px auto;
  display: block;
  box-shadow: 1px 1px 5px #666;
}
.author-info {
  text-align: center;
}
</style>
