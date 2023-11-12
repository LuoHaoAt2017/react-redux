import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// thunk 实现的异步action需要action返回一个函数，且函数的入参是(dispatch,getState);
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
}

export const decrementAsync = (amount) => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    setTimeout(() => {
      dispatch(decrementByAmount(amount));
    }, 1000);
  }
}