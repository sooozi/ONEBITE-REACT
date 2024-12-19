import "./Main.css";
import Editor from "./Editor/Editor";
import List from "./List/List";

const Main = ({ onCreate }) => { // onCreate를 props로 받음
  return (
    <>
      <Editor onCreate={onCreate} />
      <List />
    </>
  )
}

export default Main;