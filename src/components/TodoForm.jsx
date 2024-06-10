import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTitle, setContent } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { title, content } = useSelector((state) => state.todos.newTodo);

  const addTodos = () => {
    dispatch(addTodo());
  };

  return (
    <form>
      <label>제목: </label>
      <input type="text" value={title} onChange={(e) => dispatch(setTitle(e.target.value))} /> <label>내용: </label>
      <input type="text" value={content} onChange={(e) => dispatch(setContent(e.target.value))} />
      <button onClick={addTodos}>추가</button>
    </form>
  );
};

export default TodoForm;
