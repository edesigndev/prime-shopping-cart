import { defineStore } from 'pinia';
import ServiceApp from '@/services/services';

export const useProductStore = defineStore('product', {
  state: () => ({
    productItems: [],
    categoriesItems: [],
  }),
  getters: {
    productTotal: (state) => state.productItems.length || 0,
  },
  actions: {
    async getAllProducts() {
      try {
        const response = await ServiceApp.getAllProducts();
        this.productItems = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCategories() {
      try {
        const response = await ServiceApp.getAllCategories();
        this.categoriesItems = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductsByCategory(category) {
      try {
        const response = await ServiceApp.getProductsByCategory(category);
        this.productItems = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
