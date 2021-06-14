import './App.css';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Blank from './Pages/Blank/Blank';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
         {/* <Landing/> */}
       <Route path="/" exact>
         <Landing/>
       </Route>
       {/* <Login/> */}
       <Route path="/login" exact>
         <Login/>
       </Route>
       {/* Register */}
       <Route path="/register" exact>
       <Register/>
       </Route>
       {/* Blank */}
       <Route path="/register" exact>
       <Blank/>
       </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
