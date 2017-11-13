import { sortBaseState } from './actionCreators';

describe('sortBaseState type', () => {

  it('Should Create an Action to sortBaseState', () => {
    expect(sortBaseState).toEqual({
      type: "SORT_BASE_STATE"
    });
  });
  
});
