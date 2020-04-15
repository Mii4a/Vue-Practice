import Vue from 'vue'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  }
];

const router = new VueRouter({
  routes
})

export default router;
