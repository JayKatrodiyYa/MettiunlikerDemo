import { FETCH_USERS, SET_LOADING } from '../../utils/constant';

const initialState = {
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
      
    default:
      return state;
  }
};

export default userReducer;

