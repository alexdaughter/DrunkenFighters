import React, {Suspense, useState, useEffect } from 'react';
import Header from './components/header';
import './App.scss';
import logowhite from './images/logos/drunken_solo_letra_light.png';
import UsSection from './components/UsSection';
import ComponentsSection from './components/ComponentsSection';

const Loader = () => (
  <div className="App">
    <img src={logowhite} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);


export default function App() {



  return (
    <Suspense fallback={<Loader />}>
    <div className="App">
      <Header/>
      <main>
        <UsSection />
        <ComponentsSection />
      </main>
    </div>
  </Suspense>
  );
}

