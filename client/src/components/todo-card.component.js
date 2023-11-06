import {Button, Card, CardActions, CardContent, CardHeader, Container, TextField, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {deleteTodo, updateTodo} from "../actions/todos.actions";
import {useDispatch} from "react-redux";

function TodoCard({ todo, setCurrentId }) {
    const dispatch = useDispatch();

    return (
        <Card className="m-2 " sx={{ width: 266 }}>
            <CardHeader
                avatar={(todo.completed ? (
                    <CheckIcon color="success"></CheckIcon>
                ) : null)}
                title={todo.title}
                titleTypographyProps={{ fontSize: '24px' }}
                subheader={new Date(todo.createdAt).toLocaleString()}
            />
            <CardContent>
                <Typography variant="body2">
                    {todo.description}
                </Typography>
            </CardContent>
            <CardActions  className="my-4">
                {
                    todo.completed
                        ? (<Button variant="contained" color="success" disabled>Completed</Button>)
                        : (<Button variant="contained" color="success" onClick={() => dispatch(updateTodo({ ...todo, completed: true }))}>Done</Button>)
                }
                <Button variant="contained" onClick={() => setCurrentId(todo._id)}>Edit</Button>
                <Button onClick={() => dispatch(deleteTodo(todo._id))} variant="contained" color="error">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default TodoCard;
