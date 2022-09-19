import React from 'react';
import aboutimage from '../images/about.png';
function About(){
    return(
       <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus sit aut corrupti, magni dignissimos praesentium tempora voluptates nam, possimus veniam numquam, fugiat officiis reiciendis!</p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage}alt=''/>

        </div>
         
       </div>
    )
}
export default About;