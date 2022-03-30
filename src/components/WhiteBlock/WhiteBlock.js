import React from 'react'
import './WhiteBlock.css'
import firstImage from '../Images/cheer-up.png'
import secondImage from '../Images/rank.png'
import thirdImage from '../Images/searching.png'
import { Footer } from '../Footer/Footer'

export const WhiteBlock = () => {
  return (
    <div className='block'>
        <div>
            <img width={150} src={firstImage}/>
            <h1>Team Comps</h1>
        </div>

        <div>
            <img width={150} src={secondImage}/>
            <h1>Ranks</h1>
        </div>

        <div>
            <img width={150} src={thirdImage}/>
            <h1>Agents</h1>
        </div>

        {/* <div className="line1"></div> */}
        {/* <div className="line2"></div> */}

        
        <div className="foot">
          <Footer />
        </div>
    </div>
  )
}
