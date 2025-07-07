import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

function Exam() {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
      </div>
    </div>
  );
}

export default Exam;
