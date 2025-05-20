import Vue from 'vue'
import Vuex from 'vuex'
import {products, ProductsState} from "@/store/modules/products";
import {categories} from "@/store/modules/categories";

Vue.use(Vuex)
export interface RootState {
  products: ProductsState
}
export default new Vuex.Store<RootState>({
  modules: {
    products,
    categories,
  }
})
