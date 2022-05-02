import React from 'react';

import './App.css';
import { NewNote } from './NewNote';

function App() {
  return (
    <>
     <NewNote addNote={alert}/>
    <hr/>
    <ul>
      <li>note one</li>
    </ul>
    </>
  
  );
}

export default App;
