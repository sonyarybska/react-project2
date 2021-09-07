import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {useSelector} from "react-redux";
import {Logination} from "./components/logination/Logination";
import {MainComponent} from "./components/main-component/MainComponent";

function App() {
    let {theme} = useSelector(state => state.themeReducer);
    return (
        <div className={`App ${theme}-app`}>
            <Router>
                <Switch>
                    <Route exact path={`/`} component={Logination}/>
                    <Route path={`/main-page`} component={MainComponent}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
