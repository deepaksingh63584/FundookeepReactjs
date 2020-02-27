import { DRAWER_OPEN, DRAWER_CLOSE } from './ActionTypes';

export const toggleDrawerOpen = () => {
    return {
        type: DRAWER_OPEN
    }
}

export const toggleDrawerClose = () => {
    return {
        type: DRAWER_CLOSE
    }
}