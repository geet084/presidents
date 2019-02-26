import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { fetchPresReducer } from './fetchPresReducer';
import { hasErroredReducer } from './hasErroredReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  presidents: fetchPresReducer,
})

export default rootReducer;