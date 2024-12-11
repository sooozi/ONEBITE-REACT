import { useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
  const [count, setCount] = useState(10); 
  
  const onClickButton = (value) => {
    // setCount(prevCount => prevCount + value)
    setCount(count + value)
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
