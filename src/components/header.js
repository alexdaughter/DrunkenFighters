import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../images/logos/drunken_solo_letra_dark.png';
import { withTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const{ t,  } = useTranslation();
    return (
    <header className="App-header container"> 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
                <HashLink to='/'>
                    <img className="navbar-brand" src={logo} height="100" alt="band logo" loading="lazy"/>
                </HashLink>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu-language__container" id="navbarSupportedContent">
            <LanguageSelector />
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <HashLink className="nav-link" smooth to="/#section-us">{t('home')}</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to="/#section-music">{t('music')}</HashLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#gallery">{t('gallery')}</a>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to="/#section-contact">{t('contact')}</HashLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {t('dossier')}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">{t('download')}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )};

export default withTranslation() (Header);