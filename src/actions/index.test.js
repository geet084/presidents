import * as actions from './index'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: false
    }
    const result = actions.isLoading(false);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'error'
    }
    const result = actions.hasErrored('error')
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of FETCH_PRES_SUCCESS', () => {
    const expectedAction = {
      type: 'FETCH_PRES_SUCCESS',
      presidents: [{number: 1}, {number: 2}]
    }
    const result = actions.fetchPresSuccess([{ number: 1 }, { number: 2 }])
    expect(result).toEqual(expectedAction);
  })
})