import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: [],
		isDone: false,
		isError: false,
		isLoading: false
	},

	reducers: {
		getTodoStart: (state) => {
			state.isLoading = true;
		},
		getTodoSuccess: (state, action) => {
			state.isLoading = false;
			state.isDone = true
			state.todos = action.payload;
		},
		getTodoError: (state) => {
			state.isDone = true;
			state.isLoading = false;
			state.isError = false;
		}
	}
})

export const {getTodoStart, getTodoSuccess, getTodoError} = todoSlice.actions;
export default todoSlice.reducer