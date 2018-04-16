const initialState = {
  status: 'ok'
}

export default function init(state = initialState, action) {
  switch (action.type) {
    case 'STATUS_CHANGE':
      return {...state, status: action.status}
    default:
      return state
  }
}
