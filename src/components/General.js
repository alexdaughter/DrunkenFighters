import React from 'react';
import '../stylesheets/music.scss';
import UsSection from './UsSection';
import ComponentsSection from './ComponentsSection';
import MusicSection from './MusicSection';
import Gallery from './Gallery';
import Contact from './Contact';

export default function General (){
    return(
        <main>
            <UsSection />
            <ComponentsSection />
            <MusicSection />
            {/* <Gallery /> */}
            <Contact/>
        </main>
    );
}

