import { createRouter, createWebHistory } from 'vue-router'

import Work from '../views/Work/Work.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'

import OnlineBookings from '../views/Projects/OnlineBookings.vue'
import SalesDashboard from '../views/Projects/SalesDashboard.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
