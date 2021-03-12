import React from 'react';
import avatarImages from './AvatarImages';
const imagesBase = '../images/components/';

const AvatarMember = ({ member }) => {
    const getImg = () => {
        let src = '';
        if(!avatarImages[member.picture]) {
            src = 'https://via.placeholder.com/100x185.png?text=Not+Found';
        } else {
            src = avatarImages[member.picture];
        }
        return src;
    }

    console.log(imagesBase+member.picture+'.PNG')

    return(
        <div className="avatar-member">
            <img className="avatar-member__img" src={getImg()} alt={member.name}/>
            <p>{member.name}</p>
        </div>
    )
}

export default AvatarMember;
