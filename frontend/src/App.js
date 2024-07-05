import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
