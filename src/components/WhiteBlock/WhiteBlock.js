import React from 'react'
import { Link } from 'react-router-dom'
import './WhiteBlock.css'
import firstImage from '../Images/standing_jett.webp'
import secondImage from '../Images/standing_phoenix.webp'
import thirdImage from '../Images/standing_sage.png'

export const WhiteBlock = () => {
  return (
    <div className='block'>
        <div>
            <img src={firstImage}/>
            <Link to="/teamcomps"><h1 className='th1'>Team Comps</h1></Link>
        </div>

        <div>
            <img src={secondImage}/>
            <Link to="/ranks"><h1 className='rh1'>Ranks</h1></Link>
        </div>

        <div>
            <img src={thirdImage}/>
            <Link to="/agents"><h1 className='ah1'>Agents</h1></Link>
        </div>

        {/* <div className="line1"></div> */}
        {/* <div className="line2"></div> */}

    </div>
  )
}
