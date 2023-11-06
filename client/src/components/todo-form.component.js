import {Button, Container, TextField, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import {addTodo, updateTodo} from "../actions/todos.actions";


function TodoForm({ currentId, setCurrentId }) {
    const dispatch = useDispatch();
    const todo = useSelector(state => currentId ? state.todos.find(todo => todo._id === currentId) : null);
    const [todoData, setTodoData] = useState({
        description: '', title: '',
    });

    const handleAdd = (e) => {
        e?.preventDefault();

        if (currentId) {
            dispatch(updateTodo({ _id: currentId, description: todoData.description, title: todoData.title, completed: false }))
        } else {
            dispatch(addTodo(todoData))
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setTodoData({
            description: '', title: '',
        });
    }

    useEffect(() => {
        if (todo) {
            setTodoData(todo);
        }
    }, [todo]);
    return (
        <Container maxWidth="md" className="border">
            <form autoComplete="off" noValidate className="d-flex flex-column" onSubmit={handleAdd}>
                <TextField
                    id="outlined-basic"
                    label="Add here todo title"
                    variant="outlined"
                    className="my-4"
                    value={todoData.title}
                    onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
                />
                <TextField
                    id="outlined-basic"
                    label="Add here todo description"
                    variant="outlined"
                    rows={3} multiline
                    value={todoData.description}
                    onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
                />
                <div className="d-flex">
                    {
                        currentId
                            ? (<Button variant="contained" className="w-100 m-3" type="submit">Update Todo</Button>)
                            : (<Button variant="contained" className="w-100 m-3" color="success" type="submit">Add Todo</Button>)
                    }
                    <Button variant="contained" className="w-50 m-3" color="error" onClick={clear}>Clear</Button>
                </div>
            </form>
        </Container>
    );
}

export default TodoForm;
