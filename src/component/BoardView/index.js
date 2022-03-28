import TodoCard from "../TodoCard";
function Board ({pending, inProgress, done,review}) {
	return (
		<main className="grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] mx-auto h-full text-white gap-4 p-4">
			<section className="w-full mx-auto">
				<h2 className="text-lg font-bold">Pending</h2>
				<div className="overflow-y-auto space-y-4 mt-4 pr-4 rounded-sm">
					{pending && pending.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				</div>
			</section>
			<section className="w-full mx-auto">
				<h2 className="text-lg font-bold">In Progress</h2>
				<div className="overflow-y-auto space-y-4 mt-4 pr-4 rounded-sm">
					{inProgress && inProgress.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				</div>
			</section>
			<section className="w-full mx-auto">
				<h2 className="text-lg font-bold">Review</h2>
				<div className="overflow-y-auto space-y-4 mt-4 pr-4 rounded-sm">
					{review && review.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				</div>
			</section>
			<section className="w-full mx-auto">
				<h2 className="text-lg font-bold">Done</h2>
				<div className="overflow-y-auto space-y-4 mt-4 pr-4 rounded-sm">
					{done && done.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				</div>
			</section>
		</main>
	)
}

export default Board;