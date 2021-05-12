import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router basename="/digital-school1" className="App">
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/external">External</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                <Route exact path="/about">
                    <h1>About</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
