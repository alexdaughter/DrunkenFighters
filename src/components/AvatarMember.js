import React from 'react';
import avatarImages from './AvatarImages';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
const imagesBase = '../images/components/';

const AvatarMember = ({ member }) => {
    const {t,} = useTranslation();
    const { name, role, picture, id} = member;
    const getImg = () => {
        let src = '';
        if(!avatarImages[picture]) {
            src = 'https://via.placeholder.com/100x185.png?text=Not+Found';
        } else {
            src = avatarImages[picture];
        }
        return src;
    }

    return(
        <div className="avatar-member">
            <Link to={`/components/${id}`}>
                <img className="avatar-member__img" src={getImg()} alt={name}/>
            </Link>
            <p className="mb-0 m-2 font-weight-bold">{name}</p>
            <p>{t(role)}</p>
        </div>
    )
}

export default AvatarMember;
