import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Drills from "./pages/Drills";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import FireDrill from './pages/FireDrill';
import ActiveShooterDrill from './pages/ActiveShooterDrill';
import TornadoDrill from './pages/TornadoDrill';
import EarthquakeDrill from './pages/EarthquakeDrill';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="CareDEX_Website/" exact component={Home} />
          <Route path="CareDEX_Website/drills" exact component={Drills} />
          <Route path="CareDEX_Website/about" exact component={About} />
          <Route path="CareDEX_Website/login" exact component={Login} />
          <Route path="CareDEX_Website/firedrill" exact component={FireDrill} />
          <Route path="CareDEX_Website/activeshooterdrill" exact component={ActiveShooterDrill} />
          <Route path="CareDEX_Website/earthquakedrill" exact component={EarthquakeDrill} />
          <Route path="CareDEX_Website/tornadodrill" exact component={TornadoDrill} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}



export default App;
