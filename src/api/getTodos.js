import
{
	getTodoError,
	getTodoStart,
	getTodoSuccess
} from "./../redux/TodoSlice"


async function getTodos(dispatch)
{
	const url = "https://my-json-server.typicode.com/cjdomacena/IS322-Project-2/todos"
	dispatch(getTodoStart());
	try
	{
		const req = await fetch(url);
		const res = await req.json();
		dispatch(getTodoSuccess(res));
	} catch (error)
	{
		dispatch(getTodoError())
	}
}

export default getTodos;