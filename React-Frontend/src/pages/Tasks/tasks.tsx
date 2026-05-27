import { useEffect, useState } from "react";

import axios from "axios";

import type { Task } from "../../types/Task";

import TaskForm from "../../Components/TaskForm/TaskForm";
import TaskList from "../../Components/TaskList/TaskList";

import {
  Card,
  Typography,
  Row,
  Col,
  Statistic,
} from "antd";

const { Title } = Typography;

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

  const addTask = async (
    title: string,
    priority: string
  ) => {

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

      await axios.patch(
        `http://localhost:3000/task/${id}`,
        {
          completed: true,
        }
      );

      getTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteTask = async (id: number) => {

    try {

      await axios.delete(
        `http://localhost:3000/task/${id}`
      );

      getTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const completedTasks =
    tasks.filter(task => task.completed).length;

  const pendingTasks =
    tasks.filter(task => !task.completed).length;

  return (

    <div style={{ padding: "30px" }}>

      <Title>Tareas</Title>

      <TaskForm addTask={addTask} />

      <Row
        gutter={16}
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >

        <Col span={8}>
          <Card>
            <Statistic
              title="Total"
              value={tasks.length}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Completadas"
              value={completedTasks}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Pendientes"
              value={pendingTasks}
            />
          </Card>
        </Col>

      </Row>

      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />

    </div>

  );

}

export default Tasks;