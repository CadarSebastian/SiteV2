import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Inscrieri from '../views/Inscrieri.vue'
import Contactare from '../views/Contactare.vue'
import IronMan from '../views/IronMan.vue'
import Locatii from '../views/Locatii.vue'
import MoonRover from '../views/MoonRover.vue'
import Orare from '../views/Orare.vue'
import R2D2 from '../views/R2D2.vue'
import SPHERO from '../views/SPHERO.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage1',
      component: HomePage
    },
    {
      path: '/inscrieri',
      name: 'inscrieri',
      component: () => import('../views/Inscrieri.vue')
    },
    {
      path: '/contactare',
      name: 'contactare',
      component: () => import('../views/Contactare.vue')
    },
    {
      path: '/ironman',
      name: 'ironman',
      component: () => import('../views/IronMan.vue')
    },
    {
      path: '/locatii',
      name: 'locatii',
      component: () => import('../views/Locatii.vue')
    },
    {
      path: '/MoonRover',
      name: 'moonrover',
      component: () => import('../views/MoonRover.vue')
    },
    {
      path: '/orare',
      name: 'orare',
      component: () => import('../views/Orare.vue')
    },
    {
      path: '/R2D2',
      name: 'r2d2',
      component: () => import('../views/R2D2.vue')
    },
    {
      path: '/SPHERO',
      name: 'sphero',
      component: () => import('../views/SPHERO.vue')
    }
  ]
})

export default router
