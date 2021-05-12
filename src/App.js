import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router className="App">
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route exact path="/about">
                <h1>About</h1>
            </Route>
        </Router>
    );
}

export default App;
