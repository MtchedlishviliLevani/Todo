import PhotowithTime from "./PhotowithTime";
import CardCSS from "../styles/Card.module.css";
import TodoContainer from "./TodoContainer";

export default function Card() {
  return (
    <div className={CardCSS.card}>
      <PhotowithTime />
      <TodoContainer />
    </div>
  );
}
