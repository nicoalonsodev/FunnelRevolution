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
import LandingPageCristian from "./views/CristianCastellon/LandingPageCristian";
import LandingVslCristian from "./views/CristianCastellon/LandingVslCristian";
import CalendlyPageCristian from "./views/CristianCastellon/CalendlyPageCristian";
import LandingPageAriel from "./views/RominaLuppi/Afiliados/ArielMinicucci/LandingPageAriel";
import LandingVslAriel from "./views/RominaLuppi/Afiliados/ArielMinicucci/LandingVslAriel";
import CalendlyPageAriel from "./views/RominaLuppi/Afiliados/ArielMinicucci/CalendlyPageAriel";
import LandingPageAyelen from "./views/RominaLuppi/Afiliados/AyelenScinardo/LandingPageAyelen";
import LandingVslAyelen from "./views/RominaLuppi/Afiliados/AyelenScinardo/LandingVslAyelen";
import CalendlyPageAyelen from "./views/RominaLuppi/Afiliados/AyelenScinardo/CalendlyPageAyelen";
import LandingPageBraulio from "./views/RominaLuppi/Afiliados/BraulioRamirez/LandingPageBraulio";
import LandingVslBraulio from "./views/RominaLuppi/Afiliados/BraulioRamirez/LandingVslBraulio";
import CalendlyPageBraulio from "./views/RominaLuppi/Afiliados/BraulioRamirez/CalendlyPageBraulio";
import LandingPageCristianV from "./views/RominaLuppi/Afiliados/CristianVietro/LandingPageCristianV";
import LandingVslCristianV from "./views/RominaLuppi/Afiliados/CristianVietro/LandingVslCristianV";
import CalendlyPageCristianV from "./views/RominaLuppi/Afiliados/CristianVietro/CalendlyPageCristianV";
import LandingPageDebora from "./views/RominaLuppi/Afiliados/DeboraPerez/LandingPageDebora";
import LandingVslDebora from "./views/RominaLuppi/Afiliados/DeboraPerez/LandingVslDebora";
import CalendlyPageDebora from "./views/RominaLuppi/Afiliados/DeboraPerez/CalendlyPageDebora";
import LandingVslJairo from "./views/RominaLuppi/Afiliados/JairoVillegas/LandingVslJairo";
import LandingPageJairo from "./views/RominaLuppi/Afiliados/JairoVillegas/LandingPageJairo";
import CalendlyPageJairo from "./views/RominaLuppi/Afiliados/JairoVillegas/CalendlyPageJairo";
import LandingPageRocioC from "./views/RaulCrisorio/Afiliados/RocioCarla/LandingPageRocioC";
import LandingVslRocioC from "./views/RaulCrisorio/Afiliados/RocioCarla/LandingVslRocioC";
import CalendlyPageRocioC from "./views/RaulCrisorio/Afiliados/RocioCarla/CalendlyPageRocioC";
import LandingPageDiego from "./views/CristianCastellon/Afiliados/DiegoUrquiza/LandingPageDiego";
import CalendlyPageDiego from "./views/CristianCastellon/Afiliados/DiegoUrquiza/CalendlyPageDiego";
import LandingVslDiego from "./views/CristianCastellon/Afiliados/DiegoUrquiza/LandingVsldiego";
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

      {/* Landing Cristian Castellon */}
      <Route exact path="/cristian-castellon/vsl" component={LandingVslCristian} />
      <Route exact path="/cristian-castellon" component={LandingPageCristian} />
      <Route
        exact
        path="/cristian-castellon/calendly"
        component={CalendlyPageCristian}
      />

      {/* Landing Ariel Minicucci */}
      <Route exact path="/ariel-minicucci/vsl" component={LandingVslAriel} />
      <Route exact path="/ariel-minicucci" component={LandingPageAriel} />
      <Route
        exact
        path="/ariel-minicucci/calendly"
        component={CalendlyPageAriel}
      />

      {/* Landing Ayelen Scinardo */}
      <Route exact path="/ayelen-scinardo/vsl" component={LandingVslAyelen} />
      <Route exact path="/ayelen-scinardo" component={LandingPageAyelen} />
      <Route
        exact
        path="/ayelen-scinardo/calendly"
        component={CalendlyPageAyelen}
      />

      {/* Landing braulio-ramirez */}
      <Route exact path="/braulio-ramirez/vsl" component={LandingVslBraulio} />
      <Route exact path="/braulio-ramirez" component={LandingPageBraulio} />
      <Route
        exact
        path="/braulio-ramirez/calendly"
        component={CalendlyPageBraulio}
      />

      {/* Landing cristian-vietro */}
      <Route exact path="/cristian-vietro/vsl" component={LandingVslCristianV} />
      <Route exact path="/cristian-vietro" component={LandingPageCristianV} />
      <Route
        exact
        path="/cristian-vietro/calendly"
        component={CalendlyPageCristianV}
      />

      {/* Landing debora-perez */}
      <Route exact path="/debora-perez/vsl" component={LandingVslDebora} />
      <Route exact path="/debora-perez" component={LandingPageDebora} />
      <Route
        exact
        path="/debora-perez/calendly"
        component={CalendlyPageDebora}
      />

      {/* Landing jairo-villegas */}
      <Route exact path="/jairo-villegas/vsl" component={LandingVslJairo} />
      <Route exact path="/jairo-villegas" component={LandingPageJairo} />
      <Route
        exact
        path="/jairo-villegas/calendly"
        component={CalendlyPageJairo}
      />

      {/* Landing carla-salomon */}
      <Route exact path="/carla-salomon/vsl" component={LandingVslRocioC} />
      <Route exact path="/carla-salomon" component={LandingPageRocioC} />
      <Route
        exact
        path="/carla-salomon/calendly"
        component={CalendlyPageRocioC}
      />

      {/* Landing diego-urquiza */}
      <Route exact path="/diego-urquiza/vsl" component={LandingVslDiego} />
      <Route exact path="/diego-urquiza" component={LandingPageDiego} />
      <Route
        exact
        path="/diego-urquiza/calendly"
        component={CalendlyPageDiego}
      />

    </div>
  );
}

export default App;
