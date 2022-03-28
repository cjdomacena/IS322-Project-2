import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../component/Tabs";
import Board from "../component/BoardView";
import ListView from "../component/ListView";
function Main(props)
{
	const { todos } = useSelector(state => state.todo);

	const [todosPending, setTodosPending] = useState(null)

	const [todosInProgress, setTodosInProgress] = useState(null)

	const [todosReview, setTodosReview] = useState(null)

	const [todosDone, setTodosDone] = useState(null)
	const [view, setView] = useState("board");

	useEffect(() =>
	{
		setTodosPending(todos.filter(todo => todo.status === "pending"));
		setTodosInProgress(todos.filter(todo => todo.status === "in progress"));
		setTodosDone(todos.filter(todo => todo.status === "done"));
		setTodosReview(todos.filter(todo => todo.status === "review"))
	}, [todos])


	if (props.view === "board")
	{
		return (
			<div className="container mx-auto mt-8">
				<div className="flex items-center justify-between rounded bg-slate-800">
					<div className="p-4">
						<h1 className="text-white text-xl font-bold">My Todos</h1>
					</div>
					<Tabs view={view} setView={setView} />
				</div>
				<div className="transition-all">
					{view === "board" ? <Board pending={todosPending} inProgress={todosInProgress} review={todosReview} done={todosDone} /> : <ListView todos={todos} />}
				</div>
			</div>)
	}
}

export default Main;