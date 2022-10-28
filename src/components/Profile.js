import React from 'react';
import profileImage from "../images/profile-img.jpg";
import "../styles/Profile.css";
import MoreDetailsIcon from './icon-svg-components/MoreDetailsIcon';
import ShareIcon from './icon-svg-components/ShareIcon';

export default function Profile() {
  return (
    <div>
      <img src={profileImage} alt="Kelechi Nwa-uwa's profile" id="profile__image" />
      <p id="profile__name">Kelechi Nwa-uwa</p>
      <span id="share__btn">
        { isNotMobile ? <ShareIcon /> : <MoreDetailsIcon />}
      </span>
    </div>
  )
}
