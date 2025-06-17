import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>USERS LIST</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <strong>{user.name}</strong> <br />
              <small>{user.email}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;