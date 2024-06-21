import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product',
      name: 'ProductPage',
      component: () => import('@/views/product/Product.vue'),
      children: [
        {
          path: '',
          name: 'ProductList',
          component: () => import('@/views/product/pages/ProductList.vue'),
          meta: {
            title: 'รายการสินค้า',
            icon: 'mdi:mdi-package-variant',
            auth: true
          }
        },
        {
          path: ':id/detail',
          name: 'ProductDetail',
          component: () => import('@/views/product/pages/ProductDetail.vue'),
          meta: {
            title: 'รายละเอียดสินค้า',
            icon: 'mdi:mdi-package-variant',
            auth: true
          }
        },
        {
          path: 'create',
          name: 'ProductCreate',
          component: () => import('@/views/product/pages/ProductCreate.vue'),
          meta: {
            title: 'สร้างสินค้า',
            icon: 'mdi:mdi-package-variant',
            auth: true
          }
        },
        {
          path: ':id/edit',
          name: 'ProductEdit',
          component: () => import('@/views/product/pages/ProductEdit.vue'),
          meta: {
            title: 'แก้ไขสินค้า',
            icon: 'mdi:mdi-package-variant',
            auth: true
          }
        },
        {
          path: ':id/print',
          name: 'ProductPrint',
          component: () => import('@/views/product/pages/ProductPrint.vue'),
          meta: {
            title: 'พิมพ์เอกสาร',
            icon: 'mdi:mdi-package-variant',
            auth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/error/404.vue'),
      meta: {
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const authData = localStorage.getItem('workshop_auth') ? JSON.parse(localStorage.getItem('workshop_auth')) : null
  const dateNow = Math.floor(new Date().valueOf() / 1000)

  // console.log('dd', to?.meta.auth && authData?.accessToken && (1000 <= dateNow))
  // console.log('userStore.resetUserData()', userStore)

  if (to?.meta.auth && authData?.accessToken && (authData?.tokenExpire <= dateNow)) {
    userStore.resetUserData()
    return next({ name: 'login' })
  }

  if (!to?.meta.auth && authData?.accessToken) return next({ name: 'home' })

  if (to?.meta?.auth && !authData?.accessToken) return next({ name: 'login' })

  else return next()
})

export default router
