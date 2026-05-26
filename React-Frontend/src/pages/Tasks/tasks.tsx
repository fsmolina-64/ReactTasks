import { useEffect, useState } from "react";

import axios from "axios";

import type { Task } from "../../types/Task";

import TaskForm from "../../Components/TaskForm/TaskForm";

function Tasks() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    getTasks();

  }, []);

  const getTasks = async () => {

    try {

      const response = await axios.get("http://localhost:3000/task");

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const addTask = async (title: string, priority: string) => {

    try {

      await axios.post("http://localhost:3000/task", {
        title,
        priority,
      });

      getTasks();

    } catch (error) {

      console.log(error);

    }

  };
  const completeTask = async (id: number) => {

  try {

    await axios.patch(`http://localhost:3000/task/${id}`, {
      completed: true,
    });

    getTasks();

  } catch (error) {

    console.log(error);

  }

};
const deleteTask = async (id: number) => {

  try {

    await axios.delete(`http://localhost:3000/task/${id}`);

    getTasks();

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div>

      <h1>Tareas</h1>

      <TaskForm addTask={addTask} />

{
  tasks.map((task) => (

    <div key={task.id}>

      <h3>
        {task.completed ? "✔ " : ""}
        {task.title}
      </h3>

      <p>{task.priority}</p>

      <p>
        {task.completed ? "Completada" : "Pendiente"}
      </p>

      <button onClick={() => completeTask(task.id)}>
        Completar
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>

    </div>

  ))
}

    </div>
  );
}

export default Tasks;