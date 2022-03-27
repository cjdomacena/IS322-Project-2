function TodoCard({ todo, isBoard })
{

	function getColor()
	{
		switch (todo.status)
		{
			case "pending":
				return "bg-cyan-600";
			case "in progress":
				return "bg-yellow-600"
			case "done":
				return "bg-emerald-600"
			default:
				return "bg-white"
		}
	}

	return (
		<div className={`w-full rounded-sm mx-auto p-2 bg-slate-800 text-neutral-100 border border-slate-700`}>
			<div className="flex items-center justify-between">
				<h1 className="text-lg font-serif capitalize">{todo.title}</h1>
				<p className={`text-xs whitespace-nowrap ${getColor()} px-2 rounded py-1`}>{todo.status}</p>
			</div>
			<p className="text-sm">ID: {todo.id}</p>
		</div>
	)
}

export default TodoCard;