import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import './programs.css'
import {programsData} from '../../data/programsData'
import Rightarrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
<div className="programs" id="programs">  

{/* blur patches */}
<div className="blur programs-blur"></div>


    {/* header */}
    <div className='program-header'>
<span className='stroke-text'>Explore our </span><span>Programs </span><span className='stroke-text'>To shape you</span>
    </div>

{/* programs cards */}
<div className="program-categories">
{programsData.map((program)=> (
        <div className="category">
            {program.image}
            <span>{program.heading}</span><span>{program.details}</span>
            <RouterLink to="/register"><div className="join-arrow"><span>Join now</span><img src={Rightarrow} alt="" />
            </div></RouterLink>
        </div>
    ))}

</div>


     </div>
)
}

export default Programs