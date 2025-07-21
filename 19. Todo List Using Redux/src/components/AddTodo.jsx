import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ padding: '8px', width: '70%', marginRight: '8px' }}
            />
            <button onClick={handleAdd} style={{ padding: '8px 12px' }}>
                Add
            </button>
        </div>
    );
};

export default AddTodo;