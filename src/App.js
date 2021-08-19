import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FullPage from './Components/FullPage/fullpage';
import Navigation from './Components/Navigation/navigatigation';
import About from './Components/About Me/About';
import Projects from './Components/Projects/projects';
import Res from './Components/Resume/resume';
import Landing from './Components/LandingPage/landingPage';

import './App.css';

function App() {
  return (
    <div className='App'>
            <Router>
              <Navigation/>
                  <Switch>
                    <Route exact path='/' component={FullPage}/>
                    <Route exact path='/landing' component={Landing}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='./resume' component={Res}/>
                  </Switch>
            </Router>
    </div>
  );
}

export default App;
