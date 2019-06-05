import { createStore, combineReducers} from 'redux';
import { mainReducer } from './reducer/main-reducer';

let reducers = combineReducers({
  mainReducer,
});

export default createStore(reducers);