<template>
  <div class="card">
    <DataTable :value="searchData" table-style="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Products</span>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="searchText" placeholder="Title" />
          </span>
        </div>
      </template>
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
        <template v-if="col.header === 'Image'" #body="slotProps">
          <img
            :src="`${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-6rem shadow-2 border-round"
          />
        </template>
        <template v-else-if="col.header === 'Rating'" #body="slotProps">
          <Rating :model-value="slotProps.data.rating.rate" readonly :cancel="false" />
        </template>
        <template v-else-if="col.header === 'Price'" #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column header="Acciones">
        <template #body="slotProps">
          <Button icon="pi pi-shopping-cart" rounded @click="addToCart(slotProps.data)"></Button>
        </template>
      </Column>
    </DataTable>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

import { useToast } from 'primevue/usetoast';

import { useProductStore } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';

const toast = useToast();
const cartStore = useCartStore();
const productStore = useProductStore();

const products = computed(() => productStore.productItems);

const columns = [
  { field: 'title', header: 'Title' },
  { field: 'image', header: 'Image' },
  { field: 'price', header: 'Price' },
  { field: 'category', header: 'Category' },
  { field: 'rating', header: 'Rating' },
];

const searchText = ref('');

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getProduct = async () => {
  await productStore.getAllProducts();
};

const getCategories = async () => {
  await productStore.getAllCategories();
};

const addToCart = (product) => {
  toast.add({
    severity: 'info',
    summary: 'Product Selected',
    detail: product.title,
    life: 3000,
  });
  cartStore.addToCart(product);
};

const searchData = computed(() => {
  if (searchText.value === '') return [...products.value];
  return products.value.filter((product) => {
    return product.title.toLowerCase().includes(searchText.value.toLowerCase());
  });
});

onMounted(() => {
  getProduct();
  getCategories();
});
</script>
