import { isLoadingReducer } from '../isLoadingReducer';
import * as actions from '../../actions'

describe('isLoadingReducer', () => {
  it('should return an intial state', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return an action', () => {
    const expected = false;
    const result = isLoadingReducer(true, actions.isLoading(false))
    expect(result).toEqual(expected)
  })
})