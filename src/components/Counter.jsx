import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import "../App.css";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1 className="counter__title">Redux Counter </h1>

            <div className="counter__value">{count}</div>

            <div className="counter__buttons">
                <button
                    className="btn btn--decrement"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>

                <button
                    className="btn btn--increment"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;