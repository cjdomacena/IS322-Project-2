import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "../component/TodoCard";

function Main(props)
{
	const { todos } = useSelector(state => state.todo);

	const [todosPending, setTodosPending] = useState(null)

	const [todosInProgress, setTodosInProgress] = useState(null)

	const [todosDone, setTodosDone] = useState(null)

	useEffect(() =>
	{
		setTodosPending(todos.filter(todo => todo.status === "pending"));
		setTodosInProgress(todos.filter(todo => todo.status === "in progress"));
		setTodosDone(todos.filter(todo => todo.status === "done"))
	}, [todos])


	if (props.view === "board")
	{
		return (
			<main className="grid grid-cols-3 container mx-auto h-full space-x-12 text-white mt-12 ">
				<section>
					<h2>Pending</h2>
					<div className="overflow-y-scroll h-[calc(100vh-180px)] space-y-4 mt-4 pr-4">
						{todosPending && todosPending.map(todo => <TodoCard key={todo.id} todo={todo} />)}
					</div>
				</section>
				<section>
					<h2>In Progress</h2>
					<div className="overflow-y-scroll h-[calc(100vh-180px)] space-y-4 mt-4 pr-4">
						{todosInProgress && todosInProgress.map(todo => <TodoCard key={todo.id} todo={todo} />)}
					</div>
				</section>
				<section>
					<h2>Done</h2>
					<div className="overflow-y-scroll h-[calc(100vh-180px)] space-y-4 mt-4 pr-4">
						{todosDone && todosDone.map(todo => <TodoCard key={todo.id} todo={todo} />)}
					</div>
				</section>
			</main>)
	}
	return (
		<main>
			<section>
				<h2>Pending</h2>
			</section>
			<section>
				<h2>In Progress</h2>
			</section>
			<section>
				<h2>Done</h2>
			</section>
		</main>)

}

export default Main;