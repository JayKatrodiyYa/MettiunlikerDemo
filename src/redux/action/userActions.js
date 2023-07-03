import { apiInstance } from '../../httpclient/httpclient';
import { FETCH_USERS, SET_LOADING } from '../../utils/constant';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await apiInstance.get('users');
      const users = response.data;
      dispatch(
        {
          type: FETCH_USERS,
          payload: users
        });
      dispatch(
        setLoading(false)
      )
    } catch (error) {
      dispatch(setLoading(false))
      console.error(error);
    }
  };
};


