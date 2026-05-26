import { useEffect, useState } from "react";

import axios from "axios";

import type { Task } from "../../types/Task";

import TaskForm from "../../Components/TaskForm/TaskForm";

import {
  Card,
  Button,
  Tag,
  Space,
  Typography,
  Row,
  Col,
  Statistic,
} from "antd";

const { Title, Text } = Typography;

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

  const completedTasks = tasks.filter(task => task.completed).length;

  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (

    <div style={{ padding: "30px" }}>

      <Title>Tareas</Title>

      <TaskForm addTask={addTask} />

      <Row gutter={16} style={{ marginTop: 20, marginBottom: 30 }}>

        <Col span={8}>
          <Card>
            <Statistic title="Total" value={tasks.length} />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic title="Completadas" value={completedTasks} />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic title="Pendientes" value={pendingTasks} />
          </Card>
        </Col>

      </Row>

      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%" }}
      >

        {
          tasks.map((task) => (

            <Card key={task.id}>

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

          ))
        }

      </Space>

    </div>

  );

}

export default Tasks;