import { getRandomImg, getPictures } from '../services/apiEndpoints'

export const getHeaderImage = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_HEADER', payload: true })
  return getRandomImg().then(res => {
    dispatch({ type: 'SET_HEADERIMG', payload: res.urls.raw })
    dispatch({ type: 'SET_NAME', payload: res.user.name })
    dispatch({ type: 'SET_FETCHING_HEADER', payload: false })
  })
}

export const getPhotoes = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_PHOTOES', payload: true })
  return getPictures().then(res => {
    dispatch({ type: 'SET_PHOTOES', payload: res })
    dispatch({ type: 'SET_FETCHING_PHOTOES', payload: false })
  })
}