<template>
  <div class="product">
    <NoImage/>
    <h3>{{ product.name }}</h3>
    <p>Brand: {{ product.brand }}</p>
    <p>Color: {{ product.color }}</p>
    <p>Price: {{ product.price }}₴</p>
  </div>
</template>

<script>
import NoImage from "@/components/NoImage.vue";

export default {
  name: 'ProductCard',
  components: {NoImage},
  props: {
    product: Object
  }
}
</script>
<style lang="scss">
.product {
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 15px;
  border: 2px solid transparent;
  transition: border .3s ease;
  &:hover {
    border: 2px solid mediumpurple;
  }
  svg {
    max-width: 100%;
    width: 100%;
    fill: #ccc;
  }
}
</style>