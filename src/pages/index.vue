<template>
  <div id="app" class="d-flex flex-wrap justify-content-center align-items-center">
    <div v-for="product in productsList" :key="product.handle">
      <Product
        id="product-item"
        :name="product.name"
        :category-name="product.category"
        :image-url="product.image"
        :price="19.00 + '€'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Product from '../components/home/list/Product.vue'

export default Vue.extend({
    name: "IndexPage",
    
    computed: {
      productsList() {
        // @ts-ignore
        return this.$store.getters['home/getProducts'];
      }
    },
    components: { Product },
})
</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

#app > div {
  display: flex;
  justify-content: center;
}

#product-item {
  font-weight: bold;
}

@media (min-width: 992px) {
    #app > div {
      flex: 0 1 calc(100%/4);
      min-width: calc(100%/4);
    }
  }
</style>