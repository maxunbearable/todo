import { Button, Container, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TodoCard from "./todo-card.component";

function TodoList({ setCurrentId }) {
    const todos = useSelector((state) => state.todos)

    return (
        <Container maxWidth="md" className="border d-flex flex-wrap">
            { todos.map((todo) =>
                (<TodoCard key={todo._id || 'temp'} todo={todo} setCurrentId={setCurrentId}></TodoCard>)
            )}
        </Container>
    );
}

export default TodoList;
