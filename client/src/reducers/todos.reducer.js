import { ADD, DELETE, GET_ALL, UPDATE } from "../constants/todo-actions";

export default (todos = [], action) => {
    switch (action.type) {
        case GET_ALL:
            return action.payload;
        case ADD:
            return [...todos, action.payload];
        case DELETE:
            return todos.filter(post => post._id !== action.payload._id);
        case UPDATE:
            return todos.map(post => post._id === action.payload._id ? action.payload : post);
        default:
            return todos;
    }
}