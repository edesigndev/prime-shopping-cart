import configService from './config';

const services = {
  getAllProducts: configService.apiUrl + '/products',
  getAllCategories: configService.apiUrl + '/products/categories',
  getProductsByCategory: configService.apiUrl + '/products/category/', // + category
};

export default services;
