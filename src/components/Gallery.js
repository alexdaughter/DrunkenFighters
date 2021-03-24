import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../stylesheets/music.scss';

export default function Gallery (){
    const{ t, } = useTranslation();
    
    return(
        <section className="container">
            <h2 className="text-center title-music">{t('gallery')}</h2>
            <div class="powr-instagram-feed" id="0970982d_1616504678"></div><script src="https://www.powr.io/powr.js?platform=react"></script>
        </section>    
    );
}