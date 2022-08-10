import './App.css';
import React from 'react';
import Form from './components/Form/Form';
import Output from './components/Output/Output';
import Utilities from './components/Utilities/Utilities';

function App() {
  return (
    <div className="App">
        <p className="title"> Config generator </p>
        <Form></Form>
        <Output></Output>
        <Utilities></Utilities>
    </div>
  );
}

export default App;
