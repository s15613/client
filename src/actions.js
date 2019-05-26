import axios from 'axios'
import {
    GET_ALL,
    GET_CATEGORY,
    GET_ONE,
    LOADING
} from './constants'

axios.defaults.baseURL = 'https://videosserverapi.herokuapp.com/api'

export const getAll = () => (dispatch) => {

    dispatch({type: LOADING})

    axios.get('/videos')
        .then(res => dispatch({
            type: GET_ALL,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
export const getCategory = (url) => (dispatch) => {
    axios.get(`/videos${url}`)
        .then(res => dispatch({
            type: GET_CATEGORY,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
export const getOne = (id) => (dispatch) => {
    axios.get(`/videos/all/${id}`)
        .then(res => dispatch({
            type: GET_ONE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}