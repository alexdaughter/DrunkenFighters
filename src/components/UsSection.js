import React from 'react';
import { useTranslation } from 'react-i18next';
import logowhite from '../images/logos/drunken_solo_letra_light.png';


const UsSection = () => {
    const{ t, } = useTranslation();
    return(
        <>
        <section className="hero-image" id="section-us">
            <img src={logowhite} alt="band logo" loading="lazy" className="logo-header"/>
        </section>
        <section className="container us my-4">
          <h2 className="text-center mb-4">Us</h2>
          <p>{t('us-parrafo-1')}
          </p>
          <p>{t('us-parrafo-2')}</p>
    </section>
    </>
    );
}

export default UsSection;