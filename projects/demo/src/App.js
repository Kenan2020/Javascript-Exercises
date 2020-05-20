import React from 'react';
import Application from './Application';
import './App.css';

function App() {
  let name = 'kenan';
  return (
    <div className='App'>
      hello {name} <Application />{' '}
    </div>
  );
}

export default App;
