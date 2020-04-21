import Vue from 'vue'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import About from './components/About'
import Users from './components/Users'
import UsersHeader from './components/UsersHeader'
import UsersPost from './components/UsersPost'
import UsersProfile from './components/UsersProfile'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page3',
    component: Page3
  },
  {
    path: '/page4',
    component: Page4
  },
  {
    path: '/page5',
    component: Page5,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users/:id',
    components: {
      default: Users,
      header: UsersHeader
    },
    props: {
      default: true,
      header: false
    },
    children: [{
      path: "posts",
      component: UsersPost
    }, {
      path: "profile",
      component: UsersProfile,
      name: "users-id-profile"
    }]
  },
  {
    path: "/users*",
    redirect: "/"
  },
]
// scrollBevavior(to, from, savedPosition) {
//   return new Promise(resolve => {
//     this.app.$root.$on('triggerScroll', () => {
//       let position = {
//         x: 0,
//         y: 0
//       }
//       if (savedPosition) {
//         position = savedPosition
//       }
//       if (to.hash) {
//         position = {
//           selector: to.hash
//         }
//       }
//       resolve(position);
//     })
//   })
// }
const router = new VueRouter({
  routes
})

export default router;
