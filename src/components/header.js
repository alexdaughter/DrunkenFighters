import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../images/logos/df-botella.png';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const{t, i18n} = useTranslation();
    return (
    <header className="App-header container"> 
        <nav class="navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
                <a class="navbar-brand" href="#">
                    <img src={logo} height="100" alt="band logo" loading="lazy"/>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse menu-language__container" id="navbarSupportedContent">
            <LanguageSelector />
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">{t('home')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{t('gallery')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dossier
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Download</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )};

export default Header;