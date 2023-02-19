import classes from './App.module.css'
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import { Router } from '@reach/router';
import ClockPage from './pages/ClockPage';
function App() {
  return (
   <Router>
   <Home path='/'></Home>
   <About path='/about'></About>
   <Help path='/help'></Help>
   <ClockPage path='/clock'>Clock</ClockPage>
   </Router>
  );
}

export default App;
