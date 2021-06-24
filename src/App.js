import React from 'react';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Incrementer from './components/Incrementer';
import ManualIncrementer from './components/ManualIncrementer';
import Form from './components/Form';

function App() {
  
  return (
    <div className="App container mx-auto px-4">
      
      <Welcome name="Elisa" />
      <Clock />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">        
        <Incrementer start={0} />
        <Incrementer start={0} step={10} />
        <ManualIncrementer start={0} />
      </div>
      <Form/>
      
    </div>
  );
}

export default App;
