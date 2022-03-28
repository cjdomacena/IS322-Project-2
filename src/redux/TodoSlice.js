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
		},
		addTodo: (state, action) => {
			const temp = {...action.payload, "id": state.todos.length + 1, "status": "pending"}
			state.todos = [...state.todos, temp]
		},
		updateStatus: (state, action) => {
			state.todos = [...action.payload]
		}
	}
})

export const { getTodoStart, getTodoSuccess, getTodoError, addTodo, updateStatus} = todoSlice.actions;
export default todoSlice.reducer