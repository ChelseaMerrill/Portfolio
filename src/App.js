import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import Navigation from './Components/Navigation/navigation.component';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className='backgroundimage' style={{ backgroundImage: "url(/background.jpg)" }}>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/navigation' component={Navigation}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
