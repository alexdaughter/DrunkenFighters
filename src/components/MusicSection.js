import React from 'react';
import '../stylesheets/music.scss';
import { useTranslation } from 'react-i18next';
import logoBandcamp from "../images/logos/bandcamp-logo.svg";

export default function MusicSection (){
    const{ t, } = useTranslation();
    return(
        <section className="music-container d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center title-music">{t('music')}</h2>
            <div className="d-md-flex justify-content-between music-sites">
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <p style={{ color: 'white'}}>Go to Bandcamp</p>
                    <div><a target="_blank" rel="noreferrer" href="https://drunkenfightersbcn.bandcamp.com/"><img className="icon-bandcamp" src={logoBandcamp} alt="bandcamp logo"/></a></div>
                </div>
                <div><iframe title="spotify album list" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>
            </div>
        </section>
    );
}