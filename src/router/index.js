import { createRouter, createWebHistory } from 'vue-router'

import Work from '../views/Work/Work.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'

import OnlineBookings from '../views/Projects/OnlineBookings.vue'
import SalesDashboard from '../views/Projects/SalesDashboard.vue'
import CommunicationsCenter from '../views/Projects/CommunicationsCenter.vue'

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/online-bookings',
    name: 'OnlineBookings',
    component: OnlineBookings,
  },
  {
    path: '/sales-dashboard',
    name: 'SalesDashboard',
    component: SalesDashboard,
  },
  {
    path: '/communications-center',
    name: 'CommunicationsCenter',
    component: CommunicationsCenter,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router
