import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (color, changeType) => {
    return {
        type: STATUSCHANGED,
        payload: {
            color, changeType
        }
    }
}

export const statusChanged = (status) => {
    return {
        type: COLORCHANGED,
        payload: status
    }
}