import { Link } from "react-router-dom";

function Navbar()
{
	return (<header className="h-auto w-full bg-slate-800">
		<nav className=" h-16 container mx-auto flex items-center justify-between">
			<Link to="/" className="text-white font-semibold">TrackTodos</Link>
			<div className="space-x-4">
				<Link to="/" className="text-white font-semibold">My Todos</Link>
				<Link to="/addTodo" className="text-white font-semibold">Add Todo</Link>
			</div>
		</nav>
	</header>)
}

export default Navbar;