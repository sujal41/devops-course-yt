import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}
export default App;
