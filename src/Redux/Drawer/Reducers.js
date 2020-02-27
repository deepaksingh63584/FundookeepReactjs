import { DRAWER_OPEN, DRAWER_CLOSE } from './ActionTypes';

const initialState = {
    drawerOpen: false
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_OPEN: return {
            ...state,
            drawerOpen: true
        }
        case DRAWER_CLOSE: return {
            ...state,
            drawerOpen: false
        }
        default: return state
    }
}
export default reducers