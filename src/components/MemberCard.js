import React, { useEffect, useState } from 'react';
import { getComponent } from '../services/fakeComponentsServices';
import { useTranslation } from 'react-i18next';
import avatarImages from './AvatarImages';
import '../stylesheets/music.scss';

const MemberCard = (props) => {
    const {t,} = useTranslation();
    const [details, setDetails] = useState({});


    const getDetails = async () => {
        const idMember = props.match.params.id;
        try {
          const response = await getComponent(idMember);
          setDetails(response.data);
        } catch (ex) {
          if (ex.response && ex.response.status === 404)
            props.history.replace("/not-found");
        }
    };

    const getImg = () => {
    let src = '';
    if(!avatarImages[picture]) {
        src = 'https://via.placeholder.com/100x185.png?text=Not+Found';
    } else {
        src = avatarImages[picture];
    }
    return src;
}

    const {  name, birthYear, role, backingVocals, otherBands, picture } = details;

    useEffect(() => {
          getDetails();
      }, []);

    return(
    <main className="container">
        <div className="row p-0">
        <img className="card-member__img col-md-6" src={getImg()} alt={name}/>
        <div className="col-md-6">
        <h1>{t('this_is')}{name}</h1>
        <section className="section-member__card">
            <p><span className="font-weight-bold">{t('born')}</span>{birthYear}</p>
            <p><span className="font-weight-bold">{t('rol')}</span> {t(role)}</p>
            <p><span className="font-weight-bold">{t('backing_vocals')}</span> {backingVocals ? t('yes') : t('no') }</p>
            <p><span className="font-weight-bold">{t('other_bands')}</span> {
                <ul>
                    {otherBands && otherBands.map((band) => (
                        <li key={band.index}>{band}</li>
                    ))}
                </ul>
                }</p>
        </section>
        </div>
        </div>
    </main>
    )
}

export default MemberCard;