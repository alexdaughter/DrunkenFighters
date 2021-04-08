import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../stylesheets/music.scss';
import '../stylesheets/gallery.scss';
import Feed from "react-instagram-authless-feed";

export default function Gallery (){
    const{ t, } = useTranslation();
    
    return(
        <section className="container container-gallery">
            <h2 className="text-center title-music">{t('gallery')}</h2>
            {/* <div className="powr-instagram-feed" id="0970982d_1616504678"></div><script src="https://www.powr.io/powr.js?platform=react"></script> */}
            <Feed userName="drunkenfighters" className="Feed" classNameLoading="Loading" limit="10"/>,
        </section>    
    );
}
