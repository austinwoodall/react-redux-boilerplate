import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app"
import Redux from "./redux"

ReactDOM.render(
    <Provider store={Redux.store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
