
import { mapStateToProps, mapDispatchToProps } from './App';

describe('mapDispatchToProps', () => {
  it('calls dispatch with a url to fetch presidents', () => {
    const mockUrl = 'http://localhost:9999'
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchPres(mockUrl);

    expect(mockDispatch).toHaveBeenCalled()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with a presidents array, isLoading and hasErrored statuses', () => {
    const mockState = {
      presidents: [{ number: 1 }, { number: 2 }],
      hasErrored: '',
      isLoading: false,
      fakeState: 'other things'
    }
    const expected = {
      presidents: [{ number: 1 }, { number: 2 }],
      hasErrored: '',
      isLoading: false,
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
})