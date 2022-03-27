function AddTodo()
{
	return (
		<div className="container mx-auto mt-8 p-4 flex justify-center rounded-sm">
			<form className="w-96 h-auto border border-slate-800 rounded-sm">
				<div className="p-4 bg-slate-700 text-white">
					<h1>Add Todo</h1>
				</div>
				<div className=" p-4 space-y-2">
					<label htmlFor="todo-title" className="block text-white">Enter Title</label>
					<input id="todo-title" className="bg-slate-800 p-2 w-full caret-white text-white" placeholder="E.g. Implement feature" required/>
				</div>
				<div className=" p-4 space-y-2">
					<label htmlFor="todo-title" className="block text-white">Enter Type</label>
					<input id="todo-title" className="bg-slate-800 p-2 w-full caret-white text-white" placeholder="E.g. issue, bug, feature" required />
				</div>
			</form>
		</div>)
}

export default AddTodo;