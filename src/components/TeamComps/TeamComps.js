import React from 'react'
import './TeamComps.css'
import Astra from '../Images/1.webp'
import Breach from '../Images/2.png'
import Brimstone from '../Images/3.png'
import Chamber from '../Images/4.png'
import Cypher from '../Images/5.webp'
import Jett from '../Images/6.png'
import Kayo from '../Images/7.webp'
import Killjoy from '../Images/8.webp'
import Neon from '../Images/9.png'
import Omen from '../Images/10.webp'
import Phoenix from '../Images/11.webp'
import Raze from '../Images/12.webp'
import Reyna from '../Images/13.webp'
import Sage from '../Images/14.webp'
import Skye from '../Images/15.png'
import Sova from '../Images/16.png'
import Viper from '../Images/17.webp'
import Yoru from '../Images/18.webp'

export const TeamComps = () => {
  return (
    <div>
      <div className='theader'>
          <h1>Agent Tier</h1>
      </div>

      <div className="therushers">
        <div className="a">
          <h2>S</h2>
          <img src={Astra} alt="" />
          <img src={Chamber} alt="" />
          <img src={Jett} alt="" />
          <img src={Skye} alt="" />
          <img src={Sova} alt="" />
          <img src={Viper} alt="" />
        </div>

        <h1></h1>
        <div className="a">
          <h2 className='atier'>A</h2>
          <img src={Breach} alt="" />
          <img src={Cypher} alt="" />
          <img src={Killjoy} alt="" />
          <img src={Neon} alt="" />
          <img src={Raze} alt="" />
          <img src={Reyna} alt="" />
          <img src={Sage} alt="" />
        </div>

        <h1></h1>
        <div className="a">
          <h2 className='btier'>B</h2>
          <img src={Brimstone} alt="" />
          <img src={Kayo} alt="" />
          <img src={Omen} alt="" />
          <img src={Phoenix} alt="" />
          <img src={Yoru} alt="" />
        </div>





      </div>
    </div>
  )
}
