import axios from "axios";

const url = 'http://localhost:5000';

export const getAllTodos = async () => axios.get(`${url}/todos`);
export const addTodo = async (todo) => axios.post(`${url}/todos`, todo);
export const updateTodo = async (todo) => {
    console.log(todo)
    return axios.put(`${url}/todo/${todo._id}`, todo)
};
export const deleteTodo = async (id) => axios.delete(`${url}/todo/${id}`);
