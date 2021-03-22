import React from 'react';
import '../stylesheets/music.scss';
import { useTranslation } from 'react-i18next';
import logoBandcamp from "../images/logos/BC-bandcamplogo.gif";
import logoSoundcloud from "../images/logos/soundcloud.png";
import logoSpotify from "../images/logos/listen-on-spotify-1.png";
import portada from "../images/logos/Portada_Someday.png"
// import someday from '../utils/Someday.zip';
// import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

export default function MusicSection (){
    const{ t, } = useTranslation();
    return(
        <section id="section-music" className="music-container d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center title-music">{t('music')}</h2>
            <div className="d-md-flex justify-content-between music-sites">
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <p style={{ color: 'white'}}>{t('go_to')} Bandcamp</p>
                    <div><a target="_blank" rel="noreferrer" href="https://drunkenfightersbcn.bandcamp.com/"><img style={{ height: '50px', width: 'auto'}} src={logoBandcamp} alt="bandcamp logo"/></a></div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <p style={{ color: 'white'}}>{t('go_to')} Soundcloud</p>
                    <div><a target="_blank" rel="noreferrer" href="https://soundcloud.com/user-978478775"><img style={{ height: '50px', width: 'auto'}} src={logoSoundcloud} alt="bandcamp logo"/></a></div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <p style={{ color: 'white'}}>{t('go_to')} Spotify</p>
                    <div><a target="_blank" rel="noreferrer" href="https://soundcloud.com/user-978478775"><img style={{ height: '50px', width: 'auto'}} src={logoSpotify} alt="bandcamp logo"/></a></div>
                </div>
                {/* <div><iframe title="spotify album list" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></div> */}
            </div>
            <div style={{margin: '50px 0'}}>
            <img src={portada} alt="portada someday" style={{ height: '150px', with: 'auto'}}/>
            {/* <Link to={someday} download="Someday - Drunken Fighters(2021)" target="_blank"> */}
                <button className="btn btn-success ml-4" style={{ fontSize: '20px'}} ><FontAwesomeIcon icon={faDownload} style={{color: 'white', fontSize: '20px', marginRight: '10px'}} aria-hidden="true"/>{t('download')} <br/> "Someday"</button>
            {/* </Link> */}
            </div>
        </section>
    );
}