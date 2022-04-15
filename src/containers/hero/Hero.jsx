import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='afi__header section__padding' id='Home'>
        <div className='afi__header--content'>
          <h2 className='afi__header--h2'>Welcome to the demo of AFI laboration 2.</h2>
          <br/>
          <p className='afi__header--paragraph'>
            This demo contains a create advertisement page where members from a custom API are allowed
            to create advertisement for free, and other advertiser can create advertisement for a small fee.
            <br/><br/>
            Each advertisers information and created advertisement can then be found in another API.
          </p>
        </div>
    </div>
  )
  
}

export default Hero