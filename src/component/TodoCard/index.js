import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from './../../redux/TodoSlice'
function TodoCard({ todo, view })
{
	const tasks = ["pending", "in progress", "review", "done"]
	const { todos } = useSelector(state => state.todo);
	const dispatch = useDispatch();

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

	function updateTask()
	{
		const index = tasks.indexOf(todo.status);
		const temp = [...todos];
		if (todo.status !== "done")
		{
			temp[todo.id - 1] = { ...temp[todo.id - 1], "status": tasks[index + 1] }
			dispatch(updateStatus(temp))
		}
	}

	function revertTask()
	{
		const index = tasks.indexOf(todo.status);
		const temp = [...todos];
		if (todo.status !== "pending")
		{
			temp[todo.id - 1] = { ...temp[todo.id - 1], "status": tasks[index - 1] }
			dispatch(updateStatus(temp))
		}
	}

	function getText(option)
	{
		if (option === 'next')
		{
			switch (todo.status)
			{
				case "pending":
					return "Begin Task >";
				case "in progress":
					return "Mark for review >";
				case "review":
					return "Mark as done >";
				default:
					return ""
			}
		} else
		{
			switch (todo.status)
			{
				case "in progress":
					return "< Send back";
				case "review":
					return "< More work required";
				case "done":
					return "< Request re-review";
				default:
					return ""
			}
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
			{view === 'board' ? <div className="flex justify-between items-center mt-4">
				<button className="text-xs underline flex items-center" onClick={revertTask}>{getText()}</button>
				<button className="text-xs underline flex items-center" onClick={updateTask}>{getText("next")}</button>
			</div> : ""}

		</div>
	)
}

export default TodoCard;