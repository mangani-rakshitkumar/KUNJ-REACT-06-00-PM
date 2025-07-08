import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('todoTasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const saveEdit = (index) => {
    const updated = [...tasks];
    updated[index] = editText.trim();
    setTasks(updated);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="app">
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="todo-card">
        <h1>MY TODO LIST</h1>
        <div className="input-row">
          <input
            type="text"
            value={input}
            placeholder="Add a new task..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task">
              {editIndex === index ? (
                <>
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(index)}
                    autoFocus
                  />
                  <button className="save-btn" onClick={() => saveEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <div className="actions">
                    <button onClick={() => startEdit(index)}>✏️</button>
                    <button onClick={() => deleteTask(index)}>🚫</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;