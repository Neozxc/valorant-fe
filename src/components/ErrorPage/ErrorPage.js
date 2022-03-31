import React from 'react'
import './ErrorPage.css'
import Breach from '../Images/breach.webp'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div>
      <div className='errorpage'>
        <h1>Sorry this page doesn't exist...</h1>
      </div>
      <div className='goback'>
        <Link to="/"><h1>Main Page</h1></Link>
      </div>
        <img className='breach' src={Breach} alt="" />
    </div>
  )
}
