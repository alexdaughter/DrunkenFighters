import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import logoInstagram from '../images/logos/instagram.svg';
import logoFacebook from '../images/logos/facebook.svg';
import '../stylesheets/music.scss';

export default function Gallery (){
    const{ t, } = useTranslation();
    
    return(
        <section id="section-contact" className="container d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center title-music">{t('contact')}</h2>
            <div className="d-md-flex justify-content-between music-sites">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>{t('go_to')}Instagram</p>
                    <div><a target="_blank" rel="noreferrer" href="https://www.instagram.com/drunkenfighters/"><img style={{ height: '50px', width: 'auto'}} src={logoInstagram} alt="Instagram logo"/></a></div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>{t('go_to')}Facebook</p>
                    <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/drunkenfighters"><img style={{ height: '50px', width: 'auto'}} src={logoFacebook} alt="Facebook logo"/></a></div>
                </div>            
            </div>
        </section>    
    );
}