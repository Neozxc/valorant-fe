import React from 'react'
import { Link } from 'react-router-dom'
import './WhiteBlock.css'
import firstImage from '../Images/cheer-up.png'
import secondImage from '../Images/rank.png'
import thirdImage from '../Images/searching.png'

export const WhiteBlock = () => {
  return (
    <div className='block'>
        <div>
            <img width={150} src={firstImage}/>
            <Link to="/teamcomps"><h1 className='th1'>Team Comps</h1></Link>
        </div>

        <div>
            <img width={150} src={secondImage}/>
            <Link to="/ranks"><h1 className='rh1'>Ranks</h1></Link>
        </div>

        <div>
            <img width={150} src={thirdImage}/>
            <Link to="/agents"><h1 className='ah1'>Agents</h1></Link>
        </div>

        {/* <div className="line1"></div> */}
        {/* <div className="line2"></div> */}

    </div>
  )
}
