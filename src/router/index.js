import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productstk',
    name: 'producttk',
    component: () => import(/* webpackChunkName: "about" */ '../components/ProductTK.vue')
  },
  {
    path: '/products',
    name: 'productlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductList.vue')
  },

  {
    path: '/products/create',
    name: 'productcreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductForm.vue')
  },

  {
    path: '/products/edit/:id',
    name: 'productedit',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductForm.vue')
  },

  {
    path: '/products/login',
    name: 'productlogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductLogin.vue')
  },

  {
    path: '/products/dangky',
    name: 'productdangky',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductDangKy.vue')
  },
  {
    path: '/products/loaisp',
    name: 'productloaisp',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductLoaiSanPham.vue')
  },
  {
    path: '/products/sanpham',
    name: 'productsanpham',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductSanPham.vue')
  },
  {
    path: '/store',
    name: 'storevue',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/StoreVue.vue')
  },

  {
    path: '/index',
    name: 'IndexNgDung',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/nguoidung/IndexNgDung.vue')
  },
  {
    path: '/cart',
    name: 'IndexCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/nguoidung/IndexCart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
