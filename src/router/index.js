import { createRouter,createWebHistory } from "vue-router"

import About from '../views/About'
import Submit from '../views/Submit'
import Browser from '../views/Browser'
import Purchase from '../views/Purchase'
import Blog from '../views/Blog'
import Shop from '../views/Shop'
import Profile from '../views/Profile'
import Home from '../views/Home'




const routes = [
     {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/submit',
        name: 'Submit',
        component: Submit,
      },
      {
        path: '/browser',
        name: 'Browser',
        component: Browser,
      },
      {
        path: '/purchase',
        name: 'Purchase',
        component: Purchase,
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
      },
      {
        path: '/shop',
        name: 'Shop',
        component: Shop,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router