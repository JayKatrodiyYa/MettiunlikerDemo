import { createStore, applyMiddleware  } from 'redux';
import userReducer from './reducer/userReducer';
import thunk from './middleware/thunk';

// Passing userReducer to createStore
const configureStore = createStore(userReducer, applyMiddleware(thunk));
export default configureStore; 