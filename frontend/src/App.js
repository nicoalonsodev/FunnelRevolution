import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingVsl from "./views/LandingVsl/LandingVsl";
import CalendlyPage from "./views/CalendlyPage/CalendlyPage";
import ThanksPage from "./views/ThanksPage/ThanksPage";
import LandingPageRaul from "./views/RaulCrisorio/LandingPageRaul";
import LandingVslRaul from "./views/RaulCrisorio/LandingVslRaul";
import CalendlyPageRaul from "./views/RaulCrisorio/CalendlyPageRaul";
import LandingPageRodrigo from "./views/RodrigoPerez/LandingPageRodrigo";
import LandingVslRodrigo from "./views/RodrigoPerez/LandingVslRodrigo";
import CalendlyPageRodrigo from "./views/RodrigoPerez/CalendlyPageRodrigo";
import LandingPageRomina from "./views/RominaLuppi/LandingPageRomina";
import LandingVslRomina from "./views/RominaLuppi/LandingVslRomina";
import CalendlyPageRomina from "./views/RominaLuppi/CalendlyPageRomina";
import LandingPageMaria from "./views/RaulCrisorio/Afiliados/MariaJoseMedina/LandingPageMaria";
import LandingVslMaria from "./views/RaulCrisorio/Afiliados/MariaJoseMedina/LandingVslMaria";
import CalendlyPageMaria from "./views/RaulCrisorio/Afiliados/MariaJoseMedina/CalendlyPageMaria";
import LandingPageJoaquin from "./views/RaulCrisorio/Afiliados/JoaquinDominguez/LandingPageJoaquin";
import LandingVslJoaquin from "./views/RaulCrisorio/Afiliados/JoaquinDominguez/LandingVslJoaquin";
import CalendlyPageJoaquin from "./views/RaulCrisorio/Afiliados/JoaquinDominguez/CalendlyPageJoaquin";
import LandingPageDavid from "./views/RaulCrisorio/Afiliados/DavidMonzon/LandingPageDavid";
import LandingVslDavid from "./views/RaulCrisorio/Afiliados/DavidMonzon/LandingVslDavid";
import CalendlyPageDavid from "./views/RaulCrisorio/Afiliados/DavidMonzon/CalendlyPageDavid";
import LandingPageMelany from "./views/RaulCrisorio/Afiliados/MelanyVenditti/LandingPageMelany";
import LandingVslMelany from "./views/RaulCrisorio/Afiliados/MelanyVenditti/LandingVslMelany";
import CalendlyPageMelany from "./views/RaulCrisorio/Afiliados/MelanyVenditti/CalendlyPageMelany";
import CalendlyPageNicolas from "./views/RaulCrisorio/Afiliados/NicolasBalverdi/CalendlyPageNicolas";
import LandingPageNicolas from "./views/RaulCrisorio/Afiliados/NicolasBalverdi/LandingPageNicolas";
import LandingVslNicolas from "./views/RaulCrisorio/Afiliados/NicolasBalverdi/LandingVslNicolas";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/vsl" component={LandingVsl} />
      <Route exact path="/calendly" component={CalendlyPage} />
      <Route exact path="/gracias" component={ThanksPage} />

      {/*Landing Raul Crisorio */}
      <Route exact path="/raul-crisorio/vsl" component={LandingVslRaul} />
      <Route exact path="/raul-crisorio" component={LandingPageRaul} />
      <Route
        exact
        path="/raul-crisorio/calendly"
        component={CalendlyPageRaul}
      />

      {/* Landing Rodrigo Perez */}
      <Route exact path="/rodrigo-perez/vsl" component={LandingVslRodrigo} />
      <Route exact path="/rodrigo-perez" component={LandingPageRodrigo} />
      <Route
        exact
        path="/rodrigo-perez/calendly"
        component={CalendlyPageRodrigo}
      />

      {/* Landing Romina Luppi */}
      <Route exact path="/romina-luppi/vsl" component={LandingVslRomina} />
      <Route exact path="/romina-luppi" component={LandingPageRomina} />
      <Route
        exact
        path="/romina-luppi/calendly"
        component={CalendlyPageRomina}
      />

      {/* Landing Maria Jose Medina */}
      <Route exact path="/maria-medina/vsl" component={LandingVslMaria} />
      <Route exact path="/maria-medina" component={LandingPageMaria} />
      <Route
        exact
        path="/maria-medina/calendly"
        component={CalendlyPageMaria}
      />

      {/* Landing Joaquin Dominguez */}
      <Route exact path="/joaquin-dominguez/vsl" component={LandingVslJoaquin} />
      <Route exact path="/joaquin-dominguez" component={LandingPageJoaquin} />
      <Route
        exact
        path="/joaquin-dominguez/calendly"
        component={CalendlyPageJoaquin}
      />
      
      {/* Landing David Monzon */}
      <Route exact path="/david-monzon/vsl" component={LandingVslDavid} />
      <Route exact path="/david-monzon" component={LandingPageDavid} />
      <Route
        exact
        path="/david-monzon/calendly"
        component={CalendlyPageDavid}
      />

      {/* Landing Melany Venditti */}
      <Route exact path="/melany-venditti/vsl" component={LandingVslMelany} />
      <Route exact path="/melany-venditti" component={LandingPageMelany} />
      <Route
        exact
        path="/melany-venditti/calendly"
        component={CalendlyPageMelany}
      />

      {/* Landing Nicolas Balverdi */}
      <Route exact path="/nicolas-balverdi/vsl" component={LandingVslNicolas} />
      <Route exact path="/nicolas-balverdi" component={LandingPageNicolas} />
      <Route
        exact
        path="/nicolas-balverdi/calendly"
        component={CalendlyPageNicolas}
      />

    </div>
  );
}

export default App;
