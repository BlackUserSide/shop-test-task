import {Module} from "vuex";
import {useApi} from "@/api";

export interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    color: string;
}
export interface Filters {
    brand?: string;
    price?: string;
    color?:string;
    minPrice?:string | number;
    maxPrice?:string |number;
}
export interface ProductsState  {
    products: Product[];
    clearProducts: Product[];
    brands: string[]
    colors: string[]
    prices: string[] | number[]
    currentProduct: Product;
}

const state:ProductsState = {
    clearProducts: [],
    products: [],
    brands: [],
    colors:[],
    prices: [],
    currentProduct: {} as Product,
}

export const products: Module<ProductsState, any> = {
    namespaced: true,
    state,
    mutations: {
        setProducts: (state, products: Product[]) => {
            state.products = products;
        },
        setClearProducts: (state, product:Product[]) => {
            state.clearProducts = product;
        },
        setBrands: (state, brands: string[]) => {
            state.brands = brands
        },
        setColors: (state, colors: string[]) =>{
            state.colors = colors;
        },
        setPrices: (state, prices: string[] | number[]) => {
            state.prices = prices;
        },
        setProduct(state, product: Product) {
            state.currentProduct = product;
        }
    },
    actions: {
        async getProducts({commit}) {
            const api = useApi()
            try {
                const result = await api.get('/products')
                commit('setProducts', result.data)
                commit('setClearProducts', result.data)
                commit('setPrices', result.data.map((e:Product)=> e.price))
            } catch (e:any) {
                throw new Error(e)
            }
        },
        getFilter({commit}) {
            const tmpBrand:string[] = []
            const tmpColors: string[] = []
            state.clearProducts.forEach(e => {
                if(!tmpBrand.includes(e.brand)) {
                    tmpBrand.push(e.brand)
                }
                if(!tmpColors.includes(e.color)) {
                    tmpColors.push(e.color)
                }
            })
            commit('setBrands',tmpBrand)
            commit('setColors',tmpColors)

        },
        async getFilteredData({commit}:any,filters:Filters) {
            const api = useApi()
            try {
                const res = await api.get(`/products`, {params: filters})
                commit('setProducts',res.data)
                commit('setPrices', res.data.map((e:Product)=> e.price))
            } catch (e:any) {
                throw new Error(e)
            }

        },
        async getOneProduct({commit}: any, id: string) {
            const api = useApi()
            try {
                const res = await api.get(`/products/${id}`)
                commit('setProduct',res.data)
            } catch (e:any) {
                throw new Error(e)
            }
        }
    },
    getters: {
        products: state => state.products,
        brands: state => state.brands,
        colors: state => state.colors,
        clearProducts: state => state.clearProducts,
        prices: state => state.prices,
        currentProduct: state => state.currentProduct
    }
}