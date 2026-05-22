import { useState } from "react";
import type { Task } from "../../types/Task";
import "./Tasks.css";
import TaskList from "../../Components/TaskList/TaskList"
import TaskForm from "../../Components/TaskForm/TaskForm";

function Tasks() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: string) => {

    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>

      <h1>Tareas</h1>

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />

    </div>
  );
}

export default Tasks;