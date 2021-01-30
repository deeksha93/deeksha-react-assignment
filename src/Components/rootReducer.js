import {combineReducers} from 'redux';
import TaskReducer from './Redux/TaskReducer';


export default combineReducers({
    task:TaskReducer,
})