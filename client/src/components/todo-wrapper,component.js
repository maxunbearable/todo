import { getAllTodos, updateTodo, deleteTodo, addTodo } from "../actions/todos.actions";
import {Typography} from "@mui/material";
import {connect, useDispatch} from 'react-redux';

import TodoForm from "./todo-form.component";
import TodoList from "./todo-list.component";
import {useEffect, useState} from "react";

function TodoWrapper() {
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [currentId, dispatch]);

    return (
        <div>
            <Typography variant="h3" gutterBottom className="d-flex justify-content-center mt-3">
                TODO APP
            </Typography>
            <TodoForm currentId={currentId} setCurrentId={setCurrentId}></TodoForm>
            <TodoList setCurrentId={setCurrentId}></TodoList>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.todos,
});

const mapDispatchToProps = {
    getAllTodos, updateTodo, deleteTodo, addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);

