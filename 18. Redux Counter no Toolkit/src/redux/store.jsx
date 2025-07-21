import { createStore } from 'redux';
import { counterReducer } from './reducer.jsx';

export const store = createStore(counterReducer);