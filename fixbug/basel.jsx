// read
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return () => {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        );  
    }
}
// write

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
