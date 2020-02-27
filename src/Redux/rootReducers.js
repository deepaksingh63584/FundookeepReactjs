import { combineReducers } from 'redux'
import drawerReducer from './Drawer/Reducers';
import gridListReducers from './View/Reducers';

const rootReducers = combineReducers({
    drawer: drawerReducer,
    view: gridListReducers
})

export default rootReducers;