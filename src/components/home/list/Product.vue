<script lang="ts" setup>
  defineProps<{
    imageUrl: string
    categoryName: string
    name: string
    price: string
  }>()
  </script>
  
<template>
  <div class="flex flex-col items-center px-5">
    <img class="product-image" :src="imageUrl" alt="">
    <p class="item-category">{{ categoryName }}</p>
    <p class="item-name">{{ name }}</p>
    <p class="item-price">{{ price }}</p>
  </div>
</template>
  
<style scoped>  
  div > img {
    max-width: 240px;
    max-height: 300px;
  }
  
  @media (max-width: 460px) { 
    div > img {
      max-width: 150px;
    }
  }

.item-category {
  color: #999;
}

.item-name {
  font-weight: 600;
  color: #000000bd;
  min-width: 200px
}

.item-price {
  font-size: 2em;
}
</style>