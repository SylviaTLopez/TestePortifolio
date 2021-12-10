import React from 'react'

import perfil from '../assets/img/perfil.jpg'

export default function Resume() {
  return (
    <div>
      <h1>Hi, I am Sylvia, Creative Technologist</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button type="button">Download Resume</button>
      <img src={perfil} alt="Avatar" />
    </div>
  )
}
