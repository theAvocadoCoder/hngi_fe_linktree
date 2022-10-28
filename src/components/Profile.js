import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import profileImage from "../images/profile-img.jpg";
import "../styles/Profile.css";
import MoreDetailsIcon from './icon-svg-components/MoreDetailsIcon';
import ShareIcon from './icon-svg-components/ShareIcon';

export default function Profile() {
  const isNotMobile = useMediaQuery("(min-width: 1024px)");
  return (
    <div id="profile__div">
      <img src={profileImage} alt="Kelechi Nwa-uwa's profile" id="profile__image" />
      <p id="profile__name">Kelechi Nwa-uwa</p>
      <span id="share__btn">
        { isNotMobile ? <ShareIcon /> : <MoreDetailsIcon />}
      </span>
    </div>
  )
}
