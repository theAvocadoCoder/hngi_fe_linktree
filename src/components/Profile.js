import React from 'react';
import profileImage from "../images/profile-image.jpg";

export default function Profile() {
  return (
    <div>
      <img src={profileImage} alt="Kelechi Nwa-uwa's profile" />
      <p>Kelechi Nwa-uwa</p>
    </div>
  )
}
