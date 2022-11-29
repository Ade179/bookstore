const CHECK_STATUS = 'BOOKSTORE/categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'UNDER_CONSTRUCTION',
});

const initialState = [];

// reducer
const checkStatusReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_STATUS:
      return payload;
    default:
      return state;
  }
};

export default checkStatusReducer;
