import React from 'react'

import facebook from '../assets/img/fb.png'
import instagram from '../assets/img/insta.png'
import twitter from '../assets/img/tt.png'
import linkedin from '../assets/img/linkedin.png'

export default function Footer() {
  return (
    <div>
      <div className="social">
        <img src={facebook} alt="FB" />
        <img src={instagram} alt="Insta" />
        <img src={twitter} alt="tt" />
        <img src={linkedin} alt="in" />
      </div>
      <h2>Copyright ©2021 All rights reserved </h2>
    </div>
  )
}
