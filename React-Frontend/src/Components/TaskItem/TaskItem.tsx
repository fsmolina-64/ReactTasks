import type { Task } from "../../types/Task";

import {
  Card,
  Button,
  Tag,
  Space,
  Typography,
} from "antd";

const { Title, Text } = Typography;

interface TaskItemProps {
  task: Task;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskItem({
  task,
  completeTask,
  deleteTask,
}: TaskItemProps) {

  return (

    <Card>

      <Space
        direction="vertical"
        style={{ width: "100%" }}
      >

        <Title level={4}>

          {task.completed ? "✔ " : ""}

          {task.title}

        </Title>

        <Tag
          color={
            task.priority === "Alta"
              ? "red"
              : task.priority === "Media"
              ? "orange"
              : "green"
          }
        >
          {task.priority}
        </Tag>

        <Text>
          {task.completed ? "Completada" : "Pendiente"}
        </Text>

        <Space>

          <Button
            type="primary"
            onClick={() => completeTask(task.id)}
            disabled={task.completed}
          >
            Completar
          </Button>

          <Button
            danger
            onClick={() => deleteTask(task.id)}
          >
            Eliminar
          </Button>

        </Space>

      </Space>

    </Card>

  );
}

export default TaskItem;