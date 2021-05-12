import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages";

function App() {
    return (
        <Router basename="/digital-school1" className="App">
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signin">
                    <h1>Sign In</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
