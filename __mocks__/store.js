import {createStore} from 'redux';

import allReducers from '../src/redux/reducers/rootReducer';

const store = createStore(allReducers);

export default store;
