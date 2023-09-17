import {Suspense, useState} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Details from './Component/Details/Details'
import Home from './Component/Home/Home'
import Order from './Component/Order/Order'
import Sliderdata from './Component/sheardData/Sliderdata'
import Slider from './Component/Slider/Slider'
import ShareedData from './Component/sheardData/ShareedData'
// import './i18n'

export default function App() { 
  let [selectedMeal , setSelectedMeal]= useState("");
  let routes = createBrowserRouter([
    {path:"/" , element:<Layout></Layout> , children:[
      {path:"/details/:itemId" , element:<Details selectedMeal={selectedMeal}></Details>},
    
      {path:"/" , element:<Home  setSelectedMeal={setSelectedMeal} ></Home>},
    
    ]}])
  return (
    <>
      {/* <Sliderdata> */}
      <ShareedData>
          <RouterProvider router={routes}/>
      </ShareedData>
      {/* </Sliderdata> */}
  
    </>
  )
}
