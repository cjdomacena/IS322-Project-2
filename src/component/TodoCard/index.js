function TodoCard({todo}) {
	return(
		<div className="w-full bg-slate-800 rounded-sm p-4 text-white">
			<h1 className="text-lg font-semibold">{todo.title}</h1>
			<p className="text-sm">{todo.status}</p>
		</div>
	)
}

export default TodoCard;