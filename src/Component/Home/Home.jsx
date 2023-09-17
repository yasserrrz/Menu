import React from 'react'
// import Slider from '../Slider/Slider'
import Slider from '../Slider/Slider'
// import { TabView } from 'primereact/tabview'


export default function Home({setSelectedMeal}){
  return <>
  
    <div>
        <div className=' px-lg-2'>
          <Slider setSelectedMeal ={setSelectedMeal}></Slider>
          </div>
    </div>
  
  
  </>

}
