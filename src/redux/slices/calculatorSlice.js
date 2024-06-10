import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    currentValue: 0,
    inputValue: "",
  },
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    addNum: (state) => {
      state.currentValue += parseFloat(state.inputValue);
      state.inputValue = "";
    },
    minusNum: (state) => {
      state.currentValue -= parseFloat(state.inputValue);
      state.inputValue = "";
    },
  },
});

export const { setInputValue, addNum, minusNum } = calculatorSlice.actions;

export default calculatorSlice.reducer;
