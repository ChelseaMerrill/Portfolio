import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className='backgroundimage' style={{ backgroundImage: "url(/background.jpg)" }}>
          <Switch>
            <Route exact path='/' component={Homepage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
