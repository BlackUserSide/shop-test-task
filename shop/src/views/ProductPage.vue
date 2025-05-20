<template>
  <div v-if="currentProduct">
    <div class="title-container">
      <h1 class="h1">Product: {{currentProduct.name}}</h1>
    </div>
    <div class="container-content-product-page">
      <div class="image-wrapper">
        <NoImage/>
      </div>
      <div class="content-wrapper">
        <h3>{{ currentProduct.name }}</h3>
        <p>Brand: {{ currentProduct.brand }}</p>
        <p>Color: {{ currentProduct.color }}</p>
        <p>Price: {{ currentProduct.price }}₴</p>
      </div>
    </div>
  </div>
</template>

<script>
import NoImage from "@/components/NoImage.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ProductPage',
  components: {NoImage},
  computed: {
    productId() {
      return this.$route.params.id
    },
    ...mapGetters('products', ['currentProduct'])
  },
  methods: {
    ...mapActions('products', ['getOneProduct'])
  },
  mounted() {
    this.getOneProduct(this.productId);
  }
}
</script>
<style lang="scss">
  .container-content-product-page {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 25px;
    align-items: center;
    .image-wrapper {
      flex: 0 0 calc(50% - 12.5px);
      max-width: calc(50% - 12.5px);
    }
    .content-wrapper {
      flex: 0 0 calc(50% - 12.5px);
      max-width: calc(50% - 12.5px);
    }
  }
</style>