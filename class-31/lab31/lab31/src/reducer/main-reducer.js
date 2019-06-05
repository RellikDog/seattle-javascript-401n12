const initialState = {
  expenses: [],
};

export const mainReducer = (state = initialState, {type, payload}) => {
  //console.log(type, payload, 'main reducer');
  switch (type) {
    case('CREATE_EXPENSE'):
      return {...state, expenses: [...state.expenses, payload]};

    default:
      return state
  }
};