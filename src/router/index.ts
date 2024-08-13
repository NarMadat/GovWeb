import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import TypePage from '../views/TypePage.vue'
import EmailPage from '../views/EmailPage.vue'
import TitlePage from '../views/TitlePage.vue'
import DemoPage from '../views/DemoContentPage.vue'
import SectionPage from '../views/SectionPage.vue'
import AnimationPage from '../views/AnimationPage.vue'
import DonePage from '../views/DonePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/',
       name: 'start',
       component: StartPage
    },
    {
       path: '/email',
       name: 'email',
       component: EmailPage
    },
    {
       path: '/type',
       name: 'type',
       component: TypePage
    },
    {
      path: '/title',
      name: 'title',
      component: TitlePage
   },
   {
      path: '/demo',
      name: 'demo',
      component: DemoPage
   },
   {
      path: '/section',
      name: 'section',
      component: SectionPage
   },
   {
      path: '/anim',
      name: 'anim',
      component: AnimationPage
   },
   {
      path: '/done',
      name: 'done',
      component: DonePage
   },
 ]
})

export default router
