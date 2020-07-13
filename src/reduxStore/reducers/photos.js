const initialState = {
  photos: [],
  collectionPhotos: [],
  photoById: null,
  fetchingPhotos: true,
  fetchingCollectionPhotos: true,
  fetchingPhoto: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_PHOTOS':
      return { ...state, photos: action.payload }
    case 'SET_PHOTO_BY_ID':
      return { ...state, photoById: action.payload }
    case 'SET_COLLECTION_PHOTOS':
      return { ...state, collectionPhotos: action.payload }
    case 'SET_FETCHING_PHOTOS':
      return { ...state, fetchingPhotos: action.payload }
    case 'SET_FETCHING_PHOTO':
      return { ...state, fetchingPhoto: action.payload }
    case 'SET_FETCHING_COLLECTION_PHOTOS':
      return { ...state, fetchingCollectionPhotos: action.payload }
  }
}