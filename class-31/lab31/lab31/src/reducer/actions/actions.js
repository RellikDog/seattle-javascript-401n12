export const createExpense = (data) => {
  return {
    type: 'CREATE_EXPENSE',
    payload: data,
  }
};