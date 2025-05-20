import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import CategoryPage from "@/views/CategoryPage.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/', component: MainPage},
  {
    path: '/products/:id',
    name: "Product",
    component: ProductPage

  },
  {
    path: '/category/:id',
    name: "Category",
    component: CategoryPage

  },
  {path: '*', component: NotFound}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
