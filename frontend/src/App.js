import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingVsl from "./views/LandingVsl/LandingVsl";
import CalendlyPage from "./views/CalendlyPage/CalendlyPage";
import ThanksPage from "./views/ThanksPage/ThanksPage";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/vsl" component={LandingVsl} />
      <Route exact path="/calendly" component={CalendlyPage} />
      <Route exact path="/thanks" component={ThanksPage} />
    </div>
  );
}

export default App;
