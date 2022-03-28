import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../redux/TodoSlice";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddTodo()
{
	const [title, setTitle] = useState("");
	const [todoType, setTodoType] = useState("feature");
	const dispatch = useDispatch();
	const navigate = useNavigate()
	function handleSubmit(e)
	{
		const notify = () => toast.success("Todo successfully added!", {autoClose: 3000, pauseOnHover:false})
		e.preventDefault();
		dispatch(addTodo({ "title": title, "type": todoType }))
		setTitle("")
		notify();
	}

	return (
		<div className="container mx-auto mt-8 p-4 flex justify-center rounded-sm">
			<ToastContainer theme="dark" />
			<form className="w-96 h-auto border border-slate-800 rounded-sm" onSubmit={(e) => handleSubmit(e)}>
				<div className="p-4 bg-slate-700 text-white" >
					<h1>Add Todo</h1>
				</div>
				<div className=" p-4 space-y-2">
					<label htmlFor="todo-title" className="block text-white">Enter Title *</label>
					<input id="todo-title" className="bg-slate-800 p-2 w-full caret-white text-white" placeholder="E.g. Implement feature" value={title} required onChange={(e) => setTitle(e.currentTarget.value)}  />
				</div>
				<div className=" p-4 space-y-2">
					<label htmlFor="todo-title" className="block text-white">Select Type *</label>
					<select id="todo-title" className="bg-slate-800 p-2 w-full caret-white text-white" placeholder="E.g. issue, bug, feature" required value={todoType} onChange={(e) => setTodoType(e.currentTarget.value)} >
						<option disabled>Select Type</option>
						<option value="feature">Feature</option>
						<option value="issue">Issue</option>
						<option value="bug">Bug</option>
					</select>
				</div>
				<div className="p-4 space-x-4 flex">
					<button className="w-full py-2 bg-blue-700 text-white" type="submit">Submit</button>
					<button className="w-full py-2 bg-gray-700 text-white" type="button" onClick={() => navigate("IS322-Project-2/")}>Cancel</button>
				</div>
			</form>
		</div>)
}

export default AddTodo;