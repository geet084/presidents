export const fetchPresReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRES_SUCCESS':
      return action.presidents;
    default:
      return state;
  }
}