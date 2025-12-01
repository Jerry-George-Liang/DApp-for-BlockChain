import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home = () => import('../views/HomeView.vue')
const Papers = () => import('../views/PapersView.vue')
const TechPrinciples = () => import('../views/TechPrinciplesView.vue')
const CodeTutorials = () => import('../views/CodeTutorialsView.vue')
const Tools = () => import('../views/ToolsView.vue')
const Applications = () => import('../views/IndustryApplicationsView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: '区块链技术科普与应用指南' }
  },
  {
    path: '/papers',
    name: 'papers',
    component: Papers,
    meta: { title: '区块链技术论文聚合平台' }
  },
  {
    path: '/tech-principles',
    name: 'tech-principles',
    component: TechPrinciples,
    meta: { title: '技术原理拆解' }
  },
  {
    path: '/code-tutorials',
    name: 'code-tutorials',
    component: CodeTutorials,
    meta: { title: '区块链开发代码教程' }
  },
  {
    path: '/tools',
    name: 'tools',
    component: Tools,
    meta: { title: '区块链工具聚合' }
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('../views/IndustryApplicationsView.vue'),
    meta: { title: '行业应用' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 全局前置守卫，设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '区块链专题网站'
  next()
})

export default router