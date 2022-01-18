import allReducers from '../reducers/reducer'
import { createStore } from 'redux';


const myStore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default myStore