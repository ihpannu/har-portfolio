import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to about</Link>
    <Link to="/projects/"> Go to projects </Link>
    <Link to="/contact/"> Go to contact</Link>
  </div>
)

export default IndexPage
