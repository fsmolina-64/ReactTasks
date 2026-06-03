"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.completeTask = exports.createTask = exports.getTasks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = "http://localhost:3000/task";
const getTasks = async () => {
    const response = await axios_1.default.get(API_URL);
    return response.data;
};
exports.getTasks = getTasks;
const createTask = async (data) => {
    const response = await axios_1.default.post(API_URL, data);
    return response.data;
};
exports.createTask = createTask;
const completeTask = async (id) => {
    const response = await axios_1.default.patch(`${API_URL}/${id}`, {
        completed: true,
    });
    return response.data;
};
exports.completeTask = completeTask;
const deleteTask = async (id) => {
    const response = await axios_1.default.delete(`${API_URL}/${id}`);
    return response.data;
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=service.js.map