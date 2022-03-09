import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar'
import Recipes from './components/Recipes';
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <MainContent />
                <Recipes />
              </>
            )
          }}>

          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
