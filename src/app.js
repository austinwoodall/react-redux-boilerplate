import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/styles.scss"
import {decrementValue, incrementValue} from "./redux/actions/value_actions";

const App = () => {
    let value = useSelector(state => state.value);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Welcome to React-Redux-Boilerplate</h1>
            <button onClick={() => dispatch(incrementValue())}>+</button>
            <p>{value}</p>
            <button onClick={() => dispatch(decrementValue())}>-</button>
        </div>
    )
}

export default App;
