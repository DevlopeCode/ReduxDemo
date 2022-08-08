import {COSTTANT} from './constant';
const initState = {
  setuser: {},
  rmuser: {},
  getallproduct:{},
  productdetails:{}
};
export default function userReducer(state = initState, action) {
  switch (action.type) {
    case COSTTANT.USER.SET_USER:
      return {...state, setuser: action.payload};
    case COSTTANT.USER.DELETE_USER:
      return {...state, rmuser: action.payload};
    case COSTTANT.Product.GETALL:
      return {...state, getallproduct: action.payload};
      case COSTTANT.Product.GETALLDETAILS:
        return {...state, productdetails: action.payload};
    default:
      return state;
  }
}
