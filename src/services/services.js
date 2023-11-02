import http from '@/utils/axios-interceptor';
import services from './methods';

const ServiceApp = {};

ServiceApp.getAllProducts = () => {
  return http.get(services.getAllProducts);
};

ServiceApp.getAllCategories = () => {
  return http.get(services.getAllCategories);
};

ServiceApp.getProductsByCategory = (category) => {
  return http.get(`${services.getProductsByCategory}${category}`);
};

export default ServiceApp;
