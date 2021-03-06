import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import getTodos from "./api/getTodos"
import AddTodo from "./pages/AddTodo";
import Navbar from "./component/Navbar";
import Main from "./pages/Main";
function App()
{
  const dispatch = useDispatch()
  useEffect(() =>
  {
    getTodos(dispatch);
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main view="board" />}/>
        <Route path="/addTodo" element={<AddTodo />}/>
      </Routes>
    </div>
  );
}

export default App;
