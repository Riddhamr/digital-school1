import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
    return (
        <Router basename="/digital-school1" className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signin">
                    <SigninPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
