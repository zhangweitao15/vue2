// 加载路由模块
import VueRouter from 'vue-router';
import Vue from 'vue';

// 路由路径
import Herolist from '../views/heroes/list.vue';
import WeaponList from '../views/weapon/list.vue';
import Equiplist from '../views/equip/list.vue';
import HeroAdd from '../views/heroes/Add.vue';
import HeroEdit from '../views/heroes/Edit.vue';

// 注册路由模块
Vue.use(VueRouter)
// 创建路由对象 
const router = new VueRouter({
    // 精确匹配显示高亮
    // linkExactActiveClass: 'active',
    linkActiveClass: 'active',
    // 路由规则
      routes: [
        { path: '/', redirect: '/heroes' },
        { path: '/heroes', component: Herolist },
        { path: '/weapons', component: WeaponList },
        { path: '/equips', component: Equiplist },
        { path: '/heroes/add', component: HeroAdd },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },

      ]
  })
  // 导出对象
export default router;