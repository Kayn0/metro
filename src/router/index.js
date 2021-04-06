import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//Services
import Buying from '../views/Buying.vue'
import Selling from '../views/Selling.vue'
import Transferring from '../views/Transferring.vue'
import Financing from '../views/Financing.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'
import Blog from '../views/Blog.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services/buying',
    name: 'Buying',
    component: Buying
  },
  {
    path: '/services/selling',
    name: 'Selling',
    component: Selling
  },
  {
    path: '/services/transferring',
    name: 'Transferring',
    component: Transferring
  },
  {
    path: '/services/financing',
    name: 'Financing',
    component: Financing
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
