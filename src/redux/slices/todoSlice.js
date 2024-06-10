import { createSlice } from "@reduxjs/toolkit";

// TODO: todoSlice 를 작성하세요.
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    working: [],
    done: [],
    newTodo: {
      title: "",
      content: "",
    },
  },
  reducers: {
    setTitle: (state, action) => {
      state.newTodo.title = action.payload;
    },
    setContent: (state, action) => {
      state.newTodo.content = action.payload;
    },
    addTodo: (state) => {
      const newTodo = {
        ...state.newTodo,
        id: Date.now(),
      };
      state.working.push(newTodo);
      state.newTodo = { title: "", content: "" };
    },
    deleteTodo: (state, action) => {
      state.working = state.working.filter(
        (todo) => todo.id !== action.payload
      );
      state.done = state.done.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const todo = state.working.find((todo) => todo.id === action.payload);
      if (todo) {
        state.working = state.working.filter(
          (todo) => todo.id !== action.payload
        );
        state.done.push(todo);
      }
    },
    doneTodo: (state, action) => {
      const todo = state.done.find((todo) => todo.id === action.payload);
      if (todo) {
        state.done = state.done.filter((todo) => todo.id !== action.payload);
        state.working.push(todo);
      }
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, setTitle, setContent } =
  todoSlice.actions;
export default todoSlice.reducer;
