import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vfooter from "@/components/vfooter"
import loadCompo from "@/view/load.vue"
import operaCompo from "@/view/operation"
import formCompo from "@/view/formOpera"
import formShow from "@/view/formShow"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path:"/f",
    	name:"f",
    	component:vfooter
    },
    {
    	path:"/load",
    	name:"loadRouter",
    	component:loadCompo
    },
    {
      path:"/opera",
      name:"operaCompo",
      component:operaCompo
    },
    {
      path:"/form",
      name:"formCompo",
      component:formCompo
    },
    {
      path:"/show",
      name:"formShow",
      component:formShow
    }
  ]
}) 
