const initialState = {
  photoes: [],
  fetching: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_PHOTOES':
      return { ...state, photoes: action.payload }
    case 'SET_FETCHING_PHOTOES':
      return { ...state, fetching: action.payload }
  }
}