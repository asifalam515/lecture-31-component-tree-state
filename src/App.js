import classes from './App.module.css'
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import { Router } from '@reach/router';
function App() {
  return (
   <Router>
   <Home path='/'></Home>
   <About path='/about'></About>
   <Help path='/help'></Help>
   </Router>
  );
}

export default App;
