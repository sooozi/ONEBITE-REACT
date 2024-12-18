import "./Main.css";
import Button from "./Button";

//JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다
const Main = () => {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} color={"green"} />
      <Button text={"쪽지"} />
    </>
  )
}

export default Main;