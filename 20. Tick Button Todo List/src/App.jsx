import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [inputs, setInputs] = useState([]);
  const [checkCount, setCheckCount] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...inputs];
      updated[editIndex].text = task;
      setInputs(updated);
      setEditIndex(null);
    } else {
      setInputs([...inputs, { text: task, checked: false }]);
    }

    setTask('');
  };

  const handleCheck = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].checked = !updatedInputs[index].checked;
    setInputs(updatedInputs);
    const count = updatedInputs.filter((item) => item.checked).length;
    setCheckCount(count);
  };

  const handleEdit = (index) => {
    setTask(inputs[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedInputs = inputs.filter((_, i) => i !== index);
    setInputs(updatedInputs);
    const count = updatedInputs.filter((item) => item.checked).length;
    setCheckCount(count);
  };

  const handleAllDone = () => {
    setInputs([]);
    setCheckCount(0);
    setTask('');
    setEditIndex(null);
  };

  const handleClearDone = () => {
    const remaining = inputs.filter((item) => !item.checked);
    setInputs(remaining);
    const count = remaining.filter((item) => item.checked).length;
    setCheckCount(count);
  };

  return (
    <div className="todo-container">
      <div className="todo-input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {inputs.map((item, index) => (
        <div key={index} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(index)}
            />
            <span
              className={`task-text ${item.checked ? 'checked' : ''}`}
            >
              {item.text}
            </span>
          </div>
          <div className="task-actions">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}

      <h2 className="status-count">{checkCount}/{inputs.length}</h2>

      <div className="footer-buttons">
        <button onClick={handleAllDone}>All Done</button>
        <button onClick={handleClearDone}>Tick Done</button>
      </div>
    </div>
  );
};

export default App;