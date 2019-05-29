import {
    GET_ALL,
    GET_CATEGORY,
    GET_ONE
} from './constants'

const initialState = {
    loading: true,
    videos: [],
    toPlay: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        
        case GET_CATEGORY:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }

        case GET_ONE:
            return {
                ...state,
                toPlay: action.payload,
                loading: false
            }

        // case LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        default:
            return state
    }
}