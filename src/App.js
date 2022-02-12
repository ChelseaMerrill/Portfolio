import FullPage from './Components/FullPage/fullpage';
import Navigation from './Components/Navigation/navigatigation';
// import About from './Components/About Me/About';
// import Projects from './Components/Projects/projects';
// import Res from './Components/Resume/resume';
// import Landing from './Components/LandingPage/landingPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <div className='myPages'>
        <FullPage/>
        {/* <Landing/>
        <About/>
        <Projects/>
        <Res/> */}
      </div>
    </div>
  );
}

export default App;
