import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import TodoProvider from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <div className="contenedor">
        <div className="login">
          <Login />
        </div>
        <div className="addTarea">
          <AddTask />
        </div>
        <div className="contenedorLista">
          <TaskList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
