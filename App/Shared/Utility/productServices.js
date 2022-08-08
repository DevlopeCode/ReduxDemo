

import API from './apicore';
import Config from './config';

const ProductServices = {
  getProductAll: async params => {
    return await API.GET(Config.Product.getall, params);
  },
  getProductdetails: async params => {
    return await API.GET(`${Config.Product.getbyid}${params}`);
  },
};

export default ProductServices;