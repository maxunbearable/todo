// customMiddleware.js
import {GET_ALL} from "../constants/todo-actions";

const initialState = [];

const todoMiddleware = store => next => action => {
    // Dispatch the 'GET_ALL' action if any action other than 'GET_ALL' is dispatched
    if (action.type !== GET_ALL) {
        store.dispatch({ type: GET_ALL });
    }

    // Call the next middleware or the reducer
    return next(action);
};

export default todoMiddleware;