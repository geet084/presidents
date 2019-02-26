import { fetchPresReducer } from '../fetchPresReducer';
import * as actions from '../../actions';

describe('fetchPresReducer', () => {
  it('should return an initial state', () => {
    const expected = [];
    const result = fetchPresReducer(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return with an array of presidents', () => {
    const expected = [{ number: 1 }, { number: 2 }]
    const result = fetchPresReducer([], actions.fetchPresSuccess([{ number: 1 }, { number: 2 }]));
    expect(result).toEqual(expected);
  })
})