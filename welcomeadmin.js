import React from 'react'
import NavigationBar2 from './layout/NavigationBar2';
import  Img1  from './layout/assests/adminwelcome.jpg';

export default function About(){
  return(
    <div>
    <NavigationBar2></NavigationBar2>
    <img src={Img1} alt="" width="600" height="520"/>

    </div>
  )
}

