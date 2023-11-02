<template>
  <div class="px-5 py-5 md:px-2 lg:px-5 surface-50">
    <div class="border-bottom-1 pb-3 surface-border">
      <span class="text-900 font-medium text-xl">Your Cart</span>
    </div>

    <CardProduct
      v-for="(item, index) in cartItems"
      :key="index"
      :item="item"
      @remove="removeCart"
    />

    <div v-if="cartItems.length" class="py-2 mt-3">
      <div class="flex justify-content-between align-items-center mb-3">
        <span class="text-900 font-medium">Subtotal</span
        ><span class="text-900">$ {{ total }}</span>
      </div>
      <div class="flex justify-content-between align-items-center mb-3">
        <span class="text-900 font-bold">Total</span
        ><span class="text-900 font-medium text-xl">$ {{ total }}</span>
      </div>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

import CardProduct from './CardProduct.vue';
import { useCartStore } from '@/store/cartStore';

const toast = useToast();
const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cartItems);
const total = computed(() => cartStore.cartTotal);

const removeCart = (item) => {
  toast.add({
    severity: 'warn',
    summary: 'Product Unselected',
    detail: item.title,
    life: 3000,
  });
  cartStore.removeFromCart(item);
};
</script>
