import ProductServices from '../Utility/productServices';
import {COSTTANT} from './constant';
export const CreateUser = parms => async dispatch => {
  dispatch({
    type: COSTTANT.USER.SET_USER,
    payload: parms,
  });
};
export const GetAllProduct = parms => async dispatch => {
  const Response = await ProductServices.getProductAll();
  dispatch({
    type: COSTTANT.Product.GETALL,
    payload: Response.data,
  });
};

export const GetProductDetails = parms => async dispatch => {
  const Response = await ProductServices.getProductdetails(parms);
  dispatch({
    type: COSTTANT.Product.GETALLDETAILS,
    payload: Response.data,
  });
};
