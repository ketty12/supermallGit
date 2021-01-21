import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('views/home/Home')
const Category =()=> import('views/category/Category')
const ShopCart =()=> import('views/shopcart/ShopCart')
const ProFile =()=> import('views/profile/ProFile')
// 1，配置路由
Vue.use(VueRouter)
// 改正由双击 重复路由引起的错误
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
// 3.配置映射关系
const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catagory',
    component:Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: ProFile
  }
]
// 2.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})


// 4.导出router
export default router