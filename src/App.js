// import AddTodo from "./component/Home";
import { Route, Routes } from "react-router-dom";
import CreateTodo from "./component/CreateTodo";
import EditTodo from "./component/EditTodo";
import ShowModalAllTodos from "./component/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowModalAllTodos />}>
        <Route path="create" element={<CreateTodo />}></Route>;
        <Route path="edit" element={<EditTodo />}></Route>;
      </Route>
      ;
    </Routes>
  );
}

export default App;
