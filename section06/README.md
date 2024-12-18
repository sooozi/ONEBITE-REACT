# React + Vite

https://www.notion.so/iammori/7-1-15987d32b758805ca994e9ea00e7ff9d

## 🧙‍♀️ 강의록

### State Lifting (State 끌어 올리기)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/681aabec-185e-44d0-b64b-3d352bfbfae8/fa9b1071-83cd-4060-9d63-57f07c839678/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/681aabec-185e-44d0-b64b-3d352bfbfae8/7b253def-69d0-492a-abd7-97dc9cc23517/image.png)

컴포넌트끼리 데이터를 전달하기 위해서는 반드시 부모자식 관계여야 한다.

데이터를 위로 끌어 올려서 아래 컴포넌트들 모두가 공유할 수 있도록 하는 방법 “State Lifting (State 끌어 올리기)”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/681aabec-185e-44d0-b64b-3d352bfbfae8/83479c71-7ad5-4eb3-8ded-464661f7cd58/image.png)

- **🤖 리팩토링**
    
    ```jsx
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
    ```
    
    ```jsx
    import React from 'react';
    
    const buttonValues = [-1, -10, -100, 100, 10, 1];
    
    const Controller = ({ onClickButton }) => {
      return (
        <div>
          {buttonValues.map((value) => (
            <button key={value} onClick={() => onClickButton(value)}>
              {value > 0 ? `+${value}` : value}
            </button>
          ))}
        </div>
      );
    };
    
    export default Controller
    ```
    
    ⇒ 버튼 재사용이 필요한 경우 버튼 컴포넌트를 생성하여 분리 가능!
    
    - 왜 onClick안에 화살표 함수를 넣는걸까?
        - 함수에 `()`가 있으면 함수를 즉시 실행!
        - `onClick` 속성에 직접 함수를 넣을 때, 자바스크립트 함수가 **즉시 실행**되지 않게 하려면 **화살표 함수**나 **익명 함수**를 사용해야 한다.
    - 매개변수, 인수
        
        ```jsx
        function add(a, b) { //a와 b는 매개변수 (parameter)
          return a + b;
        }
        add(3, 5); //3과 5는 인수 (argument)
        ```
        
        - 함수에 `()`가 있으면 함수를 즉시 실행!
        - `onClick` 속성에 직접 함수를 넣을 때, 자바스크립트 함수가 **즉시 실행**되지 않게 하려면 **화살표 함수**나 **익명 함수**를 사용해야 한다.
        - **매개변수**: 함수 정의에서 "기다리는 자리" (자리를 만들 때 사용) “함수의 초대장”
        - **인수**: 함수 호출에서 "전달하는 값" (실제로 값을 넣을 때 사용) “초대받은 사람”