import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import Navigation from './Components/Navigation/navigatigation';
import About from './Components/About Me/About';
import Projects from './Components/Projects/projects';
import Res from './Components/Resume/resume';
import Landing from './Components/LandingPage/landingpage';

import './App.css';

function App() {
  return (
    <div className='App'>
            <Router>
              <Navigation/>
                  <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='./resume' component={Res}/>
                  </Switch>
            </Router>
    </div>
  );
}

export default App;
