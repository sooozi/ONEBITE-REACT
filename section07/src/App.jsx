import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Even from './components/Even';
import Viewer from './components/Viewer';

function App() {
  const [count, setCount] = useState(10); 
  const isMount = useRef(false);

  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count])
  // 의존성 배열
  // dependency array
  // deps

  // 1. 마운트: 탄생
  useEffect(()=>{
    console.log("마운트")
  }, [])
  // 2. 업데이트: 변화, 리렌더링
  useEffect(()=> {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("업데이트")
  })
  // 3. 언마운트: 죽음
  
  const onClickButton = (value) => {
    // setCount(prevCount => prevCount + value)
    setCount(count + value)
  };

  return (
    <div className="App">
      <h1>sec07: Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count %  2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
