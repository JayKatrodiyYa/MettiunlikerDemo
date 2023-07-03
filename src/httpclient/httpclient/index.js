import {baseURL, app, version} from '../../utils/constant';
import {axiosClient} from './axiosClient';
export const apiInstance = axiosClient(`${baseURL}/`);
