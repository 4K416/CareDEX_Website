import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Drills from "./pages/Drills";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginForm from "./pages/LoginForm";
import FireDrill from './pages/FireDrill';
import ActiveShooterDrill from './pages/ActiveShooterDrill';
import TornadoDrill from './pages/TornadoDrill';
import EarthquakeDrill from './pages/EarthquakeDrill';
import MyFacility from './pages/MyFacility';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/drills" exact component={Drills} />
          <Route path="/about" exact component={About} />
          <Route path="/loginform" exact component={LoginForm} />
          <Route path="/myfacility" exact component={MyFacility} />
          <Route path="/firedrill" exact component={FireDrill} />
          <Route path="/activeshooterdrill" exact component={ActiveShooterDrill} />
          <Route path="/earthquakedrill" exact component={EarthquakeDrill} />
          <Route path="/tornadodrill" exact component={TornadoDrill} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}



export default App;
