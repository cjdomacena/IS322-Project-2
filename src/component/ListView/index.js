import { useState } from "react";
import TodoCard from "../TodoCard";
function ListView({ todos })
{
	const [filteredTodos, setFilteredTodos] = useState( [...todos ])

	function filterByName(e)
	{
		const dir = e.currentTarget.value
		if (dir !== "default")
		{
			const temp = [...filteredTodos];
			if(dir === "asc") {
				setFilteredTodos(temp.sort((a,b) => (a.title < b.title ? -1 : 1)))
			} else {
				setFilteredTodos(temp.sort((a, b) => (a.title > b.title ? -1 : 1)))
			}
		}
		else {
			setFilteredTodos([...todos])
		}
	}

	function filteredByStatus(e) {
		const status = e.currentTarget.value;
		const temp = [...todos]
		if(status !== "default") {
			setFilteredTodos(temp.filter(todo => todo.status === status))
		} else {
			setFilteredTodos([...todos])
		}
	}



	return (
		<main className="grid grid-cols-1 mx-auto h-full text-white gap-4 p-4">
			<div className="space-x-4 ml-auto flex items-center">
				<div className="space-x-2">
					<select className="bg-slate-800 p-2" id="filterByName" onChange={(e) => filterByName(e)}>
						<option value="default">Filter by Name</option>
						<option value="asc">Name: A - Z</option>
						<option value="desc">Name: Z - A</option>
					</select>
				</div>
				<div className="space-x-2">
					<select className="bg-slate-800 p-2" id="filterByStatus" onChange={(e) => filteredByStatus(e)}>
						<option value="default">Filter by Status</option>
						<option value="pending">Pending</option>
						<option value="in progress">In Progress</option>
						<option value="done">Done</option>
					</select>
				</div>
				<button className="px-6 py-2 bg-slate-600 rounded-sm hover:bg-slate-700 transition-colors" onClick={() => setFilteredTodos([...todos])}>Reset</button>
			</div>
			<section className="w-full mx-auto">
				{filteredTodos && filteredTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
			</section>
		</main>
	)
}

export default ListView;