import { getRandomImg } from '../services/apiEndpoints'

export const getHeaderImage = () => dispatch => {
  dispatch({type : 'SET_FETCHING_HEADER', payload : true})
  return getRandomImg().then(res => {
    dispatch({type : 'SET_HEADERIMG', payload : res})
    dispatch({type : 'SET_FETCHING_HEADER', payload : false})
  })
}