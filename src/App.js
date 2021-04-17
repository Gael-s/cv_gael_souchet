import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Cv from "./Components/CV/Cv";
import Header from "./Components/Header/Header";
import CarrouselCss from "./Components/CarouselCss/CarouselCss";
import ScrollToTopOnMount from "./Components/ScrollToTopOnMount";

function App() {
  return (
    <div className="App">
      <Header />
	  <ScrollToTopOnMount />
      <Switch>
          <Route exact path="/" component={Cv}/>
          {/* <Route path="/modelisation" component={CarrouselCss} /> */}
          <Route path="/architecture" component={CarrouselCss} />
          {/* <Route path="/developpementweb" component={Developpementweb} /> */}
      </Switch>
      <footer className="footer">
        <div className="footer__Copyright">
          copyright &copy; Gaël SOUCHET 2020
        </div>
      </footer>
    </div>
  );
}

export default App;
