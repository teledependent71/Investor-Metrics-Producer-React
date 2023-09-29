import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Metrics Producer</title>
        <meta property="og:title" content="Investor Metrics Producer" />
      </Helmet>
    </div>
  )
}

export default Home
