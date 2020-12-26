import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TodoProvider from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <div className="contenedor">
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
