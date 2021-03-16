import React, {Suspense} from 'react';
import Header from './components/Header';
import logowhite from './images/logos/drunken_solo_letra_light.png';
import General from './components/General';
import MemberCard from './components/MemberCard';
import NotFound from './components/NotFound';
import './stylesheets/App.scss';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

const Loader = () => (
  <div className="App">
    <img src={logowhite} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  return(
    <Suspense fallback={<Loader />}>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/components/:id" component={MemberCard} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path='/' component={General}/>
        <Redirect to="/not-found" />
    </Switch>
    </div>
  </Suspense>
  );
}

export default withRouter(App);

