import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  setInputValue,
  addNum,
  minusNum,
} from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const { currentValue, inputValue } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={inputChange} /> 만큼을{" "}
        <button onClick={() => dispatch(addNum())}>더할게요</button>{" "}
        <button onClick={() => dispatch(minusNum())}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
