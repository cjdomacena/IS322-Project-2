function TodoCard({ todo })
{

	function getColor()
	{
		switch (todo.status)
		{
			case "pending":
				return "bg-cyan-600";
			case "in progress":
				return "bg-yellow-600";
			case "done":
				return "bg-emerald-600";
			case "review": 
				return "bg-violet-600";
			default:
				return "bg-white";
		}
	}


	return (
		<div className={`w-full rounded-sm mx-auto p-4 bg-slate-800 text-neutral-100 border border-slate-700`}>
			<div className="flex items-center justify-between space-x-2">
				<h1 className="text-base font-serif capitalize">{todo.title}</h1>
				<div className="flex">
					<p className={`text-xs whitespace-nowrap bg-gray-900 px-2 rounded py-1 w-fit`}>{todo.type}</p>
					<p className={`text-xs whitespace-nowrap ${ getColor() } px-2 rounded py-1`}>{todo.status}</p>
				</div>
			</div>
		</div>
	)
}

export default TodoCard;