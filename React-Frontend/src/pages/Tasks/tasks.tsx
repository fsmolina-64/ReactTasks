import { useEffect, useState } from "react";

import {
  getTasks as fetchTasks,
  createTask,
  completeTask as completeTaskService,
  deleteTask as deleteTaskService,
} from "../../services/Service";

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

      const response = await fetchTasks();

      setTasks(response);

    } catch (error) {

      console.log(error);

    }

  };

  const addTask = async (
    title: string,
    priority: string
  ) => {

    try {

      await createTask({
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

      await completeTaskService(id);

      getTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteTask = async (id: number) => {

    try {

      await deleteTaskService(id);

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