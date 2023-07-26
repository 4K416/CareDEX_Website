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
          <Route path="/" exact component={Home} />
          <Route path="/drills" exact component={Drills} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/firedrill" exact component={FireDrill} />
          <Route path="/activeshooterdrill" exact component={ActiveShooterDrill} />
          <Route path="/earthquakedrill" exact component={EarthquakeDrill} />
          <Route path="/tornadodrill" exact component={TornadoDrill} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}



export default App;
