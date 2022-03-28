import { useRef, useState } from "react";
import TodoCard from "../TodoCard";
function ListView({ todos })
{
	const [filteredTodos, setFilteredTodos] = useState( [...todos ])
	const nameRef = useRef(null);
	const statusRef = useRef(null);
	const typeRef = useRef(null)

	function filterByName(e)
	{
		const dir = e.currentTarget.value;
		const temp = [...filteredTodos];
		if (dir !== "default")
		{
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

	function filterByType(e) {
		const type = e.currentTarget.value;
		const temp = [...todos];
		if(type !== "default") {
			setFilteredTodos(temp.filter(todo => todo.type === type))
		} else
		{
			setFilteredTodos([...todos])
		}
	}

	function resetFilter () {
		setFilteredTodos([...todos]);
		nameRef.current.value = "default"
		statusRef.current.value = "default"
		typeRef.current.value = "default"
	}


	return (
		<main className="grid grid-cols-1 mx-auto h-full text-white gap-4 p-4">
			<div className="gap-4 ml-auto flex items-center flex-wrap justify-center">
				<div className="space-x-2">
					<select className="bg-slate-800 p-2" id="filterByName" onChange={(e) => filterByName(e)} ref={nameRef}>
						<option value="default">Filter by Name</option>
						<option value="asc">Name: A - Z</option>
						<option value="desc">Name: Z - A</option>
					</select>
				</div>
				<div className="space-x-2">
					<select className="bg-slate-800 p-2" id="filterByStatus" onChange={(e) => filteredByStatus(e)} ref={statusRef}>
						<option value="default">Filter by Status</option>
						<option value="pending">Pending</option>
						<option value="in progress">In Progress</option>
						<option value="review">Review</option>
						<option value="done">Done</option>
					</select>
				</div>
				<div className="space-x-2">
					<select className="bg-slate-800 p-2" id="filterByStatus" onChange={(e) => filterByType(e)} ref={typeRef}>
						<option value="default">Filter by Type</option>
						<option value="feature">Feature</option>
						<option value="bug">Bug</option>
						<option value="issue">Issue</option>
					</select>
				</div>
				<button className="px-6 py-2 bg-slate-600 rounded-sm hover:bg-slate-700 transition-colors" onClick={() => resetFilter()}>Reset</button>
			</div>
			<section className="w-full mx-auto">
				{filteredTodos && filteredTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				{filteredTodos.length < 1 && <div className="p-4 bg-slate-800 text-center"><h4 className="text-slate-400">No Todos found w/ Filter</h4></div>}
			</section>
		</main>
	)
}

export default ListView;