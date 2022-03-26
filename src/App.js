import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTodos from "./api/getTodos"
import Navbar from "./component/Navbar";
import Main from "./layout/Main";
function App()
{
  const { todos, isError, isLoading } = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  useEffect(() =>
  {
    getTodos(dispatch);
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Main view="board" />
    </div>
  );
}

export default App;
