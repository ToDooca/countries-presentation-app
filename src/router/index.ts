import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/landing-page/landing-page.vue'
import CountryPreview from "@/views/country-preview/country-preview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing_page',
    component: LandingPage
  },
  {
    path: '/preview/:name',
    name: 'country_preview',
    component: CountryPreview
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
