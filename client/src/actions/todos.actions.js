import * as api from '../api';
import { ADD, DELETE, GET_ALL, UPDATE } from "../constants/todo-actions";

// Action Creators

export function getAllTodos() {
    return function(dispatch) {
        return api.getAllTodos().then(({ data }) => {
            dispatch({ type: GET_ALL, payload: data });
        });
    };
}

export function addTodo(todo) {
    return function(dispatch) {
        return api.addTodo(todo).then(({ data }) => {
            dispatch({ type: ADD, payload: data });
        });
    };
}

export function updateTodo(todo) {
    return function(dispatch) {
        return api.updateTodo(todo).then(({ data }) => {
            dispatch({ type: UPDATE, payload: data });
        });
    };
}

export function deleteTodo(id) {
    return function(dispatch) {
        return api.deleteTodo(id).then((id) => {
            dispatch({ type: DELETE, payload: id });
        });
    };
}