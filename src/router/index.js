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
    }
  ]
})
