import React from 'react'
import  Img1  from './layout/assests/welcomecustomer.jpg';
import NavigationBar4 from './layout/NavigationBar4';

export default function About(){
  return(
    <div>
   <NavigationBar4></NavigationBar4>
   <img src={Img1} alt="" width="1080" height="520" />

    </div>
  )
}

