const initialState = {
  photos: [],
  collectionPhotos: [],
  fetching: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_PHOTOS':
      return { ...state, photos: action.payload }
    case 'SET_COLLECTION_PHOTOS':
      return { ...state, collectionPhotos: action.payload }
    case 'SET_FETCHING_PHOTOS':
      return { ...state, fetching: action.payload }
  }
}