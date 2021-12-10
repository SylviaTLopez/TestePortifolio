import React from 'react'

import w1 from '../assets/img/work1.png'

export default function FWorks() {
  return (
    <div>
      <div className="title">
        <h1>Featured works</h1>
      </div>

      <div className="work1">
        <img src={w1} alt="Work1" />
        <h1>Designing Dashboards</h1>
        <h2>2020</h2>
        <h3>Dashboard</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  )
}
