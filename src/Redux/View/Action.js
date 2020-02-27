import { LIST_VIEW, GRID_VIEW } from './ActionType';

export const toggleViewOpen = () => {
    return {
        type: GRID_VIEW
    }
}

export const toggleListClose = () => {
    return {
        type: LIST_VIEW
    }
}