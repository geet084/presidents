import { isLoading, hasErrored, fetchPresSuccess } from '../actions';

export const fetchPres = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchPresSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}