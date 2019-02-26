import { hasErroredReducer } from '../hasErroredReducer';
import * as actions from '../../actions';

describe('hasErrored', () => {
  it('should return an initial state', () => {
    const expected = '';
    const result = hasErroredReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return an error message', () => {
    const expected = 'something is wrong';
    const result = hasErroredReducer('', actions.hasErrored('something is wrong'));
    expect(result).toEqual(expected)
  })
})