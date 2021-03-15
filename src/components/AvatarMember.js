import React from 'react';
import avatarImages from './AvatarImages';
import { useTranslation } from 'react-i18next';
const imagesBase = '../images/components/';

const AvatarMember = ({ member }) => {
    const {t,} = useTranslation();
    const { name, role, picture} = member;
    const getImg = () => {
        let src = '';
        if(!avatarImages[picture]) {
            src = 'https://via.placeholder.com/100x185.png?text=Not+Found';
        } else {
            src = avatarImages[picture];
        }
        return src;
    }

    console.log(imagesBase+member.picture+'.PNG')

    return(
        <div className="avatar-member">
            <img className="avatar-member__img" src={getImg()} alt={name}/>
            <p class="mb-0 mt-2 font-weight-bold">{name}</p>
            <p>{t(role)}</p>
        </div>
    )
}

export default AvatarMember;
