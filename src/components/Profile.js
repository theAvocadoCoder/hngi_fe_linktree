import React from 'react';
import profileImage from "../images/profile-img.jpg";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div>
      <img src={profileImage} alt="Kelechi Nwa-uwa's profile" id="profile__image" />
      <p>Kelechi Nwa-uwa</p>
    </div>
  )
}
