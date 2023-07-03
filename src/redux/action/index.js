import { createAction } from "redux-actions";
import * as constant from '../../utils/constant'


export const getUserRequest = createAction(constant.GET_USER_REQUEST);
export const getUserSuccess = createAction(constant.GET_USER_SUCCESS);
export const getUserError = createAction(constant.GET_USER_ERROR);