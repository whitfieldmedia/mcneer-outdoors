import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Concrete from './pages/services/Concrete';
import Gutters from './pages/services/Gutters';
import LandscapeLighting from './pages/services/LandscapeLighting';
import MosquitoControl from './pages/services/MosquitoControl';
import OutdoorKitchen from './pages/services/OutdoorKitchen';
import Fireplaces from './pages/services/Fireplaces';
import Pools from './pages/services/Pools';
import SodAndHydroseeding from './pages/services/SodAndHydroseeding';
import Sprinklers from './pages/services/Sprinklers';
import Footer from './components/Footer';
import Pergola from './pages/services/Pergola';
import LawnGardening from './pages/services/LawnGardening';
import Landscaping from './pages/services/Landscaping';
import ProfessionalLawnCare from './pages/services/ProfessionalLawnCare';
import Financing from './pages/Financing';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';

class App extends React.Component {
    render() {
        return (
            <div id="app-container">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about-us" component={About} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/concrete" component={Concrete} />
                    <Route path="/seamless-gutters" component={Gutters} />
                    <Route path="/landscape-lighting" component={LandscapeLighting} />
                    <Route path="/mosquito-control" component={MosquitoControl} />
                    <Route path="/outdoor-kitchens" component={OutdoorKitchen} />
                    <Route path="/pools" component={Pools} />
                    <Route path="/sod-and-hydroseeding" component={SodAndHydroseeding} />
                    <Route path="/sprinklers" component={Sprinklers} />
                    <Route path="/fire-pits"component={Fireplaces} />
                    <Route path="/pergola" component={Pergola} />
                    <Route path="/gardening" component={LawnGardening} />
                    <Route path="/landscaping" component={Landscaping} />
                    <Route path="/professional-lawn-care" component={ProfessionalLawnCare} />
                    <Route path="/financing" component={Financing} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;