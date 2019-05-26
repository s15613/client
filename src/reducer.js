import {
    GET_ALL,
    GET_CATEGORY,
    GET_ONE,
    LOADING
} from './constants'

const initialState = {
    loading: false,
    videos: [],
    toPlay: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                videos: action.payload
            }
        
        case GET_CATEGORY:
            return {
                ...state,
                videos: action.payload
            }

        case GET_ONE:
            return {
                ...state,
                toPlay: action.payload
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}