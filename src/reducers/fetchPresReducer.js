export const fetchPresReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRES_SUCCESS':
      console.log(action)
      return action.presidents;
    default:
      return state;
  }
}