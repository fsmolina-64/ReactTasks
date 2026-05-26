import { useState } from "react";
import { Input, Select, Button, Space } from "antd";

interface TaskFormProps {
  addTask: (title: string, priority: string) => void;
}

function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Alta");

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask(title, priority);
    setTitle("");
    setPriority("Alta");
  };

  return (
    <Space style={{ marginBottom: 20 }}>
      <Input
        placeholder="Nombre de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onPressEnter={handleSubmit}
        style={{ width: 300 }}
      />
      <Select
        value={priority}
        onChange={(value) => setPriority(value)}
        style={{ width: 120 }}
        options={[
          { value: "Alta", label: "Alta" },
          { value: "Media", label: "Media" },
          { value: "Baja", label: "Baja" },
        ]}
      />
      <Button type="primary" onClick={handleSubmit}>
        Agregar tarea
      </Button>
    </Space>
  );
}

export default TaskForm;