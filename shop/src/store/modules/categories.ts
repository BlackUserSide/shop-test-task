import {Module} from "vuex";
import {useApi} from "@/api";

export interface Category {
    id: number;
    name: string
}

export interface CategoryState {
    categories: Category[];
    currentCategory: Category;
}

const state: CategoryState = {
    categories: [],
    currentCategory: {} as Category,
}

export const categories: Module<CategoryState, any> = {
    namespaced: true,
    state,
    mutations: {
        setCategories: (state, categories: Category[]) => {
            state.categories = categories
        },
        setCategory: (state, category: Category) => {
            state.currentCategory = category
        },
    },
    actions: {
        async getDataCategories({commit}:any) {
            const api = useApi()
            try {
                const result = api.get(`/categories`)
                commit('setCategories',(await result).data)
            } catch (e:any) {
                throw new Error(e)
            }
        },
       setManualCategory({commit}:any, category: number) {
            const findCategory = state.categories.find((c) => c.id === category)
            commit('setCategory', findCategory)
       }

    },
    getters: {
        categories: state => state.categories,
        category: state => state.currentCategory,
    }
}