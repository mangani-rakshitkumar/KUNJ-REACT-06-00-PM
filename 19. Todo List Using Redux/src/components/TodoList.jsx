import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
            {todos.map((todo, index) => (
                <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{todo}</span>
                    <button onClick={() => dispatch(removeTodo(index))} style={{ padding: '4px 8px' }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;