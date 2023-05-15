import {  Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={SingIn} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
