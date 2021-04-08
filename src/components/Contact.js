import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import logoInstagram from '../images/logos/instagram.svg';
import logoFacebook from '../images/logos/fb-transparente.png';
import '../stylesheets/music.scss';
import '../stylesheets/contact.scss';


export default function Gallery (){
    const [emailInfo, setEmailInfo ] = useState({});

    const handleChange = e => {
        // console.log(emailInfo)
        const {name, value} = e.target;
        console.log(name, value);
        const newState = {
            ...emailInfo,
            [name]: value,
        };
        setEmailInfo(newState);
    }
    

    const{ t, } = useTranslation();
    
    return(
        <section id="section-contact" 
        className="contact-container music-container d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center title-music pb-4">{t('contact')}</h2>
            <form className="form-contact">
                <div className="form-group">
                    <label htmlFor="yourEmail">Your email address</label>
                    <input type="email" className="form-control" id="yourEmail" aria-describedby="emailHelp" onChange={handleChange} name="email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="emailSubject">Subject</label>
                    <input type="email" className="form-control" id="emailSubject" aria-describedby="emailSubject" name="subject" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="yourMessage">Your message</label>
                    <textarea className="form-control" id="yourMessage" rows="3" name="message" onChange={handleChange}></textarea>
                </div>
                <div className="d-flex"><button type="submit" className="btn btn-success ml-auto">Submit</button></div>
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                <p className="contact-directly">También puedes contactarnos directamente en <a href="mailto:drunkenfightersofficial@gmail.com?Subject=Mensaje%20desde%20la%20web%20Drunken%20Fighters">drunkenfightersofficial@gmail.com</a></p>
            </div>
            </form>
            {/* <div className="d-md-flex justify-content-between music-sites">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>{t('go_to')}Instagram</p>
                    <div className="mt-3"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/drunkenfighters/"><img style={{ height: '50px', width: 'auto'}} src={logoInstagram} alt="Instagram logo"/></a></div>
                    <p className="green py-2">@drunkenfighters</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>{t('go_to')}Facebook</p>
                    <div className="mt-3"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/drunkenfighters"><img style={{ height: '50px', width: 'auto'}} src={logoFacebook} alt="Facebook logo"/></a></div>
                    <p className="green py-2">Drunken Fighters</p>
                </div>            
            </div> */}
        </section>    
    );
}