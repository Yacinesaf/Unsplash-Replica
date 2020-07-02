import { getRandomImg } from '../services/apiEndpoints'

export const getHeaderImage = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_HEADER', payload: true })
  return getRandomImg().then(res => {
    console.log("res.urls", res.urls)
    dispatch({ type: 'SET_HEADERIMG', payload: res.urls.raw })
    dispatch({ type: 'SET_NAME', payload: res.user.name })
    dispatch({ type: 'SET_FETCHING_HEADER', payload: false })
  })
}