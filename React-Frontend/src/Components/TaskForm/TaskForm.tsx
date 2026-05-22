import { useState } from "react";
import "./TaskForm.css";

interface TaskFormProps {
  addTask: (title: string, priority: string) => void;
}

function TaskForm({ addTask }: TaskFormProps) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Alta");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTask(title, priority);

    setTitle("");
    setPriority("Alta");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>

      <button type="submit">
        Agregar tarea
      </button>

    </form>
  );
}

export default TaskForm;