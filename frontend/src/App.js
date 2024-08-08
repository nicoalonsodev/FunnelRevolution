import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingVsl from "./views/LandingVsl/LandingVsl";
import CalendlyPage from "./views/CalendlyPage/CalendlyPage";
import ThanksPage from "./views/ThanksPage/ThanksPage";
import LandingPageRaul from "./views/RaulCrisorio/LandingPageRaul";
import LandingVslRaul from "./views/RaulCrisorio/LandingVslRaul";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/vsl" component={LandingVsl} />
      <Route exact path="/calendly" component={CalendlyPage} />
      <Route exact path="/gracias" component={ThanksPage} />
      <Route exact path="/raul-crisorio/vsl" component={LandingVslRaul} />
    </div>
  );
}

export default App;
