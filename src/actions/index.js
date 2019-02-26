export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const fetchPresSuccess = (presidents) => ({
  type: 'FETCH_PRES_SUCCESS',
  presidents
})