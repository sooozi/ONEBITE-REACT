import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  const onCreate = (content) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos]); // 새 todo를 기존 배열에 추가
    console.log([newTodo, ...todos]); // 콘솔에 todos 출력
  }; 

  return (
    <div className='App'>
      <Header />
      <Main onCreate={onCreate} />
      <Footer />
    </div>
  )
}

export default App
