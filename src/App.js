import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './NavBar';
import { URL_ARRAY } from './constants';
import Checkbook from './checkbook-register/Checkbook';
import Home from './Home';

const App = () => {
  // why doesn't this work
  const getSwitcher = () => {
    return (
      <Switch>
        {URL_ARRAY.map((item) => {
          const {url, component} = item;
          return <>
            {component && <Route exact path={url}>{component}</Route>}
          </>;
        })}
      </Switch>
    );
  };

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        an Amalgamation of coding challenges and projects
        <NavBar/>
      </header>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/checkbook-register'><Checkbook /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
