import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions.jsx';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter (Without Toolkit)</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: '10px' }}
      >
        ➖ Decrement
      </button>
    </div>
  );
}

export default App;