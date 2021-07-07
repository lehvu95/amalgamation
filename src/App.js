import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

const URL_ARRAY = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Medication List',
    url: '/medication-list',
  },
  {
    label: 'Checkbook Register',
    url: '/checkbook-register',
  },
  {
    label: 'Minesweeper',
    url: '/minesweeper',
  },
]

const App = () => {
  const getNav = () => {
    return (
      <table>
        <tr>
          {URL_ARRAY.map((item) => {
            const {label, url} = item;
            return <td><Link to={url}>{label}</Link></td>;
          })}
        </tr>
      </table>
    );
  }

  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        an Amalgamation of coding challenges
        {getNav()}
      </header>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
