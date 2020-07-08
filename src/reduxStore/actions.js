import { getRandomImg, getPictures, getRelatedCollectionPictures, getPhotoById } from '../services/apiEndpoints'

export const getHeaderImage = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_HEADER', payload: true })
  return getRandomImg().then(res => {
    dispatch({ type: 'SET_HEADERIMG', payload: res.urls.raw })
    dispatch({ type: 'SET_NAME', payload: res.user.name })
    dispatch({ type: 'SET_FETCHING_HEADER', payload: false })
  })
}
export const getRelatedCollectionPhotos = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_PHOTOS', payload: true })
  return getRelatedCollectionPictures().then(res => {
    dispatch({ type: 'SET_COLLECTION_PHOTOS', payload: res })
    dispatch({ type: 'SET_FETCHING_PHOTOS', payload: false })
  })
}

export const getPhotos = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_PHOTOS', payload: true })
  return getPictures().then(res => {
    dispatch({ type: 'SET_PHOTOS', payload: res })
    dispatch({ type: 'SET_FETCHING_PHOTOS', payload: false })
  })
}

export const getImageById = (id) => dispatch => {
  return getPhotoById(id).then(res => {
    console.log("res", res)
    dispatch({ type: 'SET_PHOTO_BY_ID', payload: res })
  })
}