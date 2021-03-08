import React, {Suspense} from 'react';
import logowhite from './images/logos/drunken_solo_letra_light.png';
import Header from './components/header';
import './App.scss';

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
        <section className="hero-image">
            <img src={logowhite} alt="band logo" loading="lazy" className="logo-header"/>
        </section>
        <section className="container us my-4">
          <h2 className="text-center mb-4">Us</h2>
          <p>Somos Drunken Fighters. Nuestra banda nace en 2019 en Barcelona, formada por componentes de bandas como “Drink Hunters”, “Brutus’ Daughters”, “Los Tronchos”, “AID” o “el Pony Pisador”, trabajamos un Celtic punk que anda entre el hardcore melódico y el punk rock clásico, pero con un fortísimo peso en las melodías de sus instrumentos acústicos, consiguiendo un sonido rápido, contundente y agresivo, pero repleto de armonía.
          </p>
          <p>Hace un año, obteníamos el máster de nuestro primer disco, “Someday”, con la mala suerte de coincidir en el tiempo con el principio de la pandemia.</p>
          <p>Hoy por hoy, hemos decidido que ya hemos esperado bastante, y nos hemos puesto a buscar sellos que puedan estar en armonía con lo que hacemos y pensamos, y hemos dado con vosotros (nombre de la persona de contacto o del sello aquí). Y es por eso que os escribimos, pensando en que quizá podríamos colaborar juntxs. (No tenemos urgencia y sabemos que puede llevar tiempo, incluso ser algo que se materialice en físico para el año que viene, pero queremos sacarlo con gente afín). </p>
          <p>Esperando que nos podamos ver pronto de vuelta en los escenarios,</p>
        </section>
      </main>
    </div>
  </Suspense>
  );
}

