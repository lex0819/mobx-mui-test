import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        Small test mobx react lite
      </Typography>
      <Divider>
        <Chip label="First" />
      </Divider>
      <Counter />
      <Divider>
        <Chip label="Second" />
      </Divider>
      <Todo />
    </div>
  );
}

export default App;
