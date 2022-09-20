import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/increment";
import { decrement } from "./actions/decrement";
import { incrementBy } from "./actions/increment";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(counter);

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(decrement())} className="minus">
          - Minus
        </button>
        <button onClick={() => dispatch(increment())} className="plus">
          Plus +
        </button>
        <button onClick={() => dispatch(incrementBy(5))} className="plus">
          Plus +5
        </button>
      </div>
    </div>
  );
}

export default App;
