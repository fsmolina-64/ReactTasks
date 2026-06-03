import axios from "axios";

const API_URL = "http://localhost:3000/task";

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTask = async (data: {
    title: string;
    priority: string;
}) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const completeTask = async (id: number) => {
    const response = await axios.patch(
        `${API_URL}/${id}`,
        {
            completed: true,
        }
    );

    return response.data;
};

export const deleteTask = async (id: number) => {
    const response = await axios.delete(
        `${API_URL}/${id}`
    );

    return response.data;
};