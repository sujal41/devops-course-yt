import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <p>Backend says: {message}</p>
      <small>Update: CD implemented</small>
    </div>
  );
}
export default App;
