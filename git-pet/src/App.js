import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLogin from "./Component/Login"
import Signup from "./Component/Signup"
import Home from "./Component/Home"
import UserLogin from "./Component/UserLogin";
import BreederLogin from "./Component/BreederLogin";



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/" component={(props) => (
            <MainLogin {...props} />
          )} />

          <Route exact path="/userlogin" component={(props) => (
            <UserLogin {...props} />
          )} />

          <Route exact path="/breederlogin" component={(props) => (
            <BreederLogin {...props} />
          )} />   

            <Route exact path="/signup" component={(props) => (
            <Signup {...props} />
          )} /> 

            <Route exact path="/home" component={(props) => (
            <Home {...props} />
          )} /> 
          

      </Switch>
    </div>
  </Router>
  );
}

export default App;
