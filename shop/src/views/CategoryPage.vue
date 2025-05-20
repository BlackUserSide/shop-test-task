<script>
import {mapActions, mapGetters} from "vuex";
import Product from "@/components/Product.vue";
import "@/scss/main.scss"

export default {
  name: 'CategoryPage',
  data() {
    return {
      filters: {
        brand: "",
        minPrice: 0,
        maxPrice: 0,
        color: ""
      }
    }
  },
  components: {
    Product
  },
  watch: {
    category: {
      immediate: true,
      handler(val) {
        if (val && val.id) {
          this.getFilteredData({...this.filters, categoryId: val.id}, {})
        }
      }
    },
    products() {
      this.getFilter({})
    },
    prices: {
      immediate: true,
      handler(val) {
        if (val.length) {
          if(this.filters.minPrice !== 0 && this.filters.maxPrice !== 0){
            return
          }
          this.filters.minPrice = Math.min(...val)
          this.filters.maxPrice = Math.max(...val)
        }
      }
    }
  },
  computed: {
    ...mapGetters('products', ['products', 'brands', 'colors', "clearProducts", "prices"]),
    ...mapGetters('categories', ['categories', "category"])
  },

  methods: {
    syncFiltersWithRoute() {
      this.filters = {
        brand: this.$route.query.brand || '',
        color: this.$route.query.color || '',
        minPrice: Number(this.$route.query.minPrice) || 0,
        maxPrice: Number(this.$route.query.maxPrice) || 0,
        categoryId: this.$route.query.categoryId || ''
      }
    },
    updateRouteFilters() {
      const query = {}
      if (this.filters.brand) query.brand = this.filters.brand
      if (this.filters.color) query.color = this.filters.color
      if (this.filters.minPrice) query.minPrice = this.filters.minPrice
      if (this.filters.maxPrice) query.maxPrice = this.filters.maxPrice
      if (this.filters.categoryId) query.categoryId = this.filters.categoryId
      this.$router.push({ path: this.$route.path, query })
    },
    ...mapActions('products', ['getProducts', 'getFilter', 'getFilteredData']),
    ...mapActions('categories', ['getDataCategories', "setManualCategory"]),
    handlerFilter() {
      this.updateRouteFilters()
      this.getFilteredData(this.filters)
    },
    handlerResetFilter() {
      this.filters = {
        brand: "",
        minPrice: 0,
        maxPrice: 0,
        color: ""
      }
      this.$router.push({ path: this.$route.path, query: {} })
      this.getProducts()
    },
    handleRouteCategory(route) {
      this.setManualCategory(route)
      const target = route === '' ? '/' : `/category/${route}`
      if (this.$route.path === target) {
        return
      }
      this.$router.push(target)
    }
  },
  mounted() {
    if(this.products.length === 0) {
      this.getProducts({});
    }
    this.syncFiltersWithRoute()
    this.setManualCategory(this.$route.params.id, {})
    this.getFilteredData({...this.filters, categoryId: this.$route.params.id}, {})
    this.getDataCategories()
  },
}
</script>
<template>
  <div>
    <div class="title-container">
      <h1 class="h1">Catalog Products</h1>
    </div>
    <div class="content-shop">

      <div class="filters-container">
        <h3 class="h3">Categories</h3>
        <div class="container-categories">
          <div class="item-category" @click="handleRouteCategory('')"><span>Main Page</span></div>
          <div v-for="item in categories" :key="item.id" class="item-category" @click="handleRouteCategory(item.id)">
            <span>{{ item.name }}</span></div>
        </div>
        <h3 class="h3">
          Filters
        </h3>
        <div class="container-brand-filter">
          <select v-model="filters.brand">
            <option value="">Select Brand</option>
            <option v-for="(brand, index) in brands" :key="index" :value="brand">{{ brand }}</option>
          </select>
        </div>
        <div class="container-color-filter">
          <select v-model="filters.color">
            <option value="">Select Color</option>
            <option v-for="(color, index) in colors" :key="index" :value="color">{{ color }}</option>
          </select>
        </div>
        <div class="price-range">
          <input v-model="filters.minPrice" type="number">
          <input v-model="filters.maxPrice" type="number">
        </div>
        <button @click="handlerFilter">Change filter</button>
        <button @click="handlerResetFilter">Reset filter</button>
      </div>
      <div class="container-shop">
        <div v-for="product in products" :key="product.id" class="item-products">
          <router-link :to="`/products/${product.id}`">
            <Product :product="product"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-categories {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  gap: 10px;

  .item-category {
    cursor: pointer;
    transition: color .3s ease;

    &:hover {
      color: mediumpurple;
    }
  }
}

.container-shop {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  flex: 1;

  .item-products {
    flex: 0 0 280px;

    a {
      text-decoration: none;
      color: #000;
    }
  }
}

.content-shop {
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 10px;

  .filters-container {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 15px;
    flex-shrink: 0;

    select {
      width: 100%;
      height: 38px;
      padding: 10px 15px;
      border-radius: 10px;

    }

    input {
      width: 100%;
      height: 38px;
      border-radius: 10px;
      display: inline-block;
      margin-bottom: 20px;
      border: 1px solid #000;
      outline: none;
      padding: 10px 15px;
    }

    button {
      width: 100%;
      height: 38px;
      border-radius: 10px;
      border: none;
      outline: none;
      background: mediumpurple;
      color: #fff;
      cursor: pointer;
      transition: background .3s ease;

      &:hover {
        background: rgba(mediumpurple, .8)
      }
    }
  }
}
</style>


