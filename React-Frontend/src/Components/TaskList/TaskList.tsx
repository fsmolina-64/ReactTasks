import type { Task } from "../../types/Task";
import "./TaskList.css";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {

  return (
    <div>

      {tasks.map((task) => (

        <div key={task.id}>

          <h3>{task.title}</h3>

          <p>{task.priority}</p>

        </div>

      ))}

    </div>
  );
}

export default TaskList;