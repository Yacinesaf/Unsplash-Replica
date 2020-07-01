const initialState = {
  img: null,
  fetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_HEADERIMG':
      return { ...state, img: action.payload }
    case 'SET_FETCHING_HEADER':
      return { ...state, fetching: action.payload }
  }
}