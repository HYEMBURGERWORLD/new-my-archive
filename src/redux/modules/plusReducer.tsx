import data from '../data';

const plusReducer = (state: any = data.hi, action: any) => {
  if (action.type === '+') {
    state++;
    return state;
  }
  return state;
};

export default plusReducer;
