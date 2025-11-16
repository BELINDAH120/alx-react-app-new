import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 6, maxWidth: 320 }}>
      <p style={{ margin: '0 0 0.5rem 0' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: 8 }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: 8 }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
