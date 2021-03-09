import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../images/logos/df-botella.png';
import { withTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const{ t, i18n } = useTranslation();
    return (
    <header className="App-header container"> 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <img src={logo} height="100" alt="band logo" loading="lazy"/>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu-language__container" id="navbarSupportedContent">
            <LanguageSelector />
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{t('home')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{t('gallery')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{t('contact')}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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