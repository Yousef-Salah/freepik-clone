import React from 'react'
import { Link } from 'react-router-dom'
import './join-section.scss'

const Join = () => (
  <div className="container" id="join-section">
    <div className="content">
      <p className="title">
        Join Freepik&apos;s
        <strong>creator community</strong>
      </p>
      <p className="text">
        Behind every stock image there&apos;s a creative mind.You can also
        create content and sell it on Freepik
      </p>
      <Link
        to="/register"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sell content
      </Link>
    </div>
    <div className="photo">
      <div className="image-wrapper">
        <img
          src="assets/images/home/join_section/community.png"
          alt="Join Freepik"
          loading="lazy"
        />
      </div>
    </div>
  </div>
)

export default Join
