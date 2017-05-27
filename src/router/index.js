import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import snake from '@/components/贪吃蛇/tanchiSnake'
import PEGame from '@/components/体育老师题目/PEGame'
import goHome from '@/components/度度熊回家/goHome'
import maozi from '@/components/买帽子/maozi'
import quickSort from '@/components/快速排序/quickSort'
import playBall from '@/components/抛小球/playBall'
import strReplace from '@/components/字符串替换/strReplace'
import wuziqi from '@/components/五子棋/wuziqi'
import waterFall from '@/components/瀑布流布局/waterFall'
import master from '@/components/推拉门特效/master'
import gallery from '@/components/3D幻灯片切换/gallery3D'
import dance from '@/components/仿劲舞团公测好礼/dance'
import fullpage from '@/components/全屏网站/fullpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/snake',
      name: 'snake',
      component: snake
    },
      {
      path: '/PEGame',
      name: 'PEGame',
      component: PEGame
    },
    {
      path: '/goHome',
      name: 'goHome',
      component: goHome
    },
     {
      path: '/maozi',
      name: 'maozi',
      component: maozi
    },
    {
      path: '/quickSort',
      name: 'quickSort',
      component: quickSort
    },
    {
      path: '/playBall',
      name: 'playBall',
      component: playBall
    },
    {
      path: '/strReplace',
      name: 'strReplace',
      component: strReplace
    },
    {
      path: '/wuziqi',
      name: 'wuziqi',
      component: wuziqi
    },
    {
      path: '/waterFall',
      name: 'waterFall',
      component: waterFall
    },
    {
      path: '/master',
      name: 'master',
      component: master
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/dance',
      name: 'dance',
      component: dance
    },
    {
      path: '/fullpage',
      name: 'fullpage',
      component: fullpage
    }
  ]
})
