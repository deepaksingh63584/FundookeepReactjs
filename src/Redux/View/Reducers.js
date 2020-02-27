import { GRID_VIEW, LIST_VIEW } from './ActionType';

const initialState = {
    viewOpen: false
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GRID_VIEW: return {
            ...state,
            viewOpen: true
        }
        case LIST_VIEW: return {
            ...state,
            viewOpen: false
        }
        default: return state
    }
}
export default reducers;