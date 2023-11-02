<template>
  <div class="flex flex-wrap lg:flex-nowrap gap-1">
    <div class="col lg:col-2 flex p-0 flex-column lg:w-2">
      <CategoriesList :options="categories" @selected="changeCategory" />
    </div>

    <div
      class="col lg:col-7 w-full border-dashed border-round surface-border surface-section lg:w-7"
    >
      <ProductList />
    </div>

    <div class="col lg:col-2 flex p-0 flex-column border-round lg:w-3">
      <ShoppingCart />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import CategoriesList from './components/CategoriesList.vue';

import { useProductStore } from '@/store/productStore';

const productStore = useProductStore();

const categories = computed(() => productStore.categoriesItems);

const changeCategory = async (category) => {
  if (category === null) {
    await productStore.getAllProducts();
  } else {
    await productStore.getProductsByCategory(category);
  }
};
</script>
