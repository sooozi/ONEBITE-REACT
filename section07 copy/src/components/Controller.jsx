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

// const Controller = ({onClickButton}) => {
//   return (
//     <div>
//       <button onClick={()=>{
//         onClickButton(-1)
//       }}>-1</button>
//       <button onClick={()=>{
//         onClickButton(-10)
//       }}>-10</button>
//       <button onClick={()=>{
//         onClickButton(-100)
//       }}>-100</button>
//       <button onClick={()=>{
//         onClickButton(+100)
//       }}>+100</button>
//       <button onClick={()=>{
//         onClickButton(+10)
//       }}>+10</button>
//       <button onClick={()=>{
//         onClickButton(+1)
//       }}>+1</button>
//     </div>
//   )
// }

export default Controller
