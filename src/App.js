import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import Navigation from './Components/Navigation/navigation.component';
import About from './Components/About Me/About';
import './App.css';

function App() {
  return (
    <div className='App'>
            <Router>
              <Navigation/>
                  <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/about' component={About}/>
                  </Switch>
            </Router>
    </div>
  );
}

export default App;
