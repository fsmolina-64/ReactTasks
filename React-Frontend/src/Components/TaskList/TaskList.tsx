import type { Task } from "../../types/Task";

import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskList({
  tasks,
  completeTask,
  deleteTask,
}: TaskListProps) {

  return (

    <div>

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />

      ))}

    </div>

  );
}

export default TaskList;