import { combineReducers } from 'redux';
import { fetchPresReducer } from './fetchPresReducer';

const rootReducer = combineReducers({
  presidents: fetchPresReducer,
})

export default rootReducer;