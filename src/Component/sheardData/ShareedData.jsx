import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
// import defImg from '../../assets/dan-gold-E6HjQaB7UEA-unsplash\ \(4\)\ \(1\).jpg'
import $ from 'jquery'
// import React from 'react'
export const MenuContext = createContext(null) ;

export default function ShareedData(props) {
    let [menuSetting , setMenuSetting] = useState(null)
    let [logo , setlogo] = useState(null)
    let [menuSliders , setmenuSliders] = useState(null)
 
    useEffect(() => {
        const headerBg = document.querySelector('.headerBg');
        const headerh2 = document.querySelector('.headerBg h2');
        const buttonsBg = document.querySelector('.MuiBottomNavigation-root');
        const bodybg = document.querySelector('body');
        const titelparent = document.querySelector('#titel');
        const sliderBg = document.querySelector(".slider-bg");
        const all = document.querySelector('html');
        const slider = document.querySelector(".slider")
       function getMenu() {
          axios.get('https://tijarymagazineapis.azurewebsites.net/GetMenu/03E8').then((response) => {
          const data = response.data;
          setmenuSliders(data.menuSliders)
          console.log(data , "dataMenu")
          setMenuSetting(data);
          // setsubtitle(data.subtitle)
          if (headerBg) {
            headerBg.style.backgroundImage = `url(${data.logo})`;
          }

          if (headerh2) {
            headerh2.style.color = data.headerFontColor;
          }

          if (buttonsBg) {
            buttonsBg.style.backgroundColor = data.backGround;
          }

        

          if (bodybg) {
            bodybg.style.backgroundColor = data.backGround;
            bodybg.style.color = data.fontcolor;
          }

          if (all) {
            all.style.backgroundColor = data.backGround;
          }

          if (titelparent) {
            titelparent.style.color = data.fontcolor;
          }
          if(slider){
            slider.style.backgroundColor = data.backGround;
          }
          if (sliderBg) {
            sliderBg.style.backgroundColor = data.backGround;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
        getMenu();
      }, []);
    // useEffect(()=>{
    //     function getMenu (){
    //         axios.get(`https://tijarymagazineapis.azurewebsites.net/GetMenu/03E8`).then((response)=>{
    //             let {data } = response;
    //             console.log(data);
    //             console.log(data.data);
    //             setMenuSetting(data.data)
    //             console.log(data.data.logo)
    //             setlogo(data.data.logo)
    //             const headerBg = document.querySelector('.headerBg');
    //             const headerh2 = document.querySelector('.headerBg h2');
    //             const windowbg = document.querySelector('html');
    //             const bodybg = document.querySelector('body');
    //             const colorAPI = document.querySelector('.colorAPI');
    //             const textdark = document.querySelector('.text-dark');
    //             const buttonsBg = document.querySelector(".MuiBottomNavigation-root");
    
    //         if (headerBg ) {
    //           headerBg.style.backgroundImage = `linear-gradient(to bottom, rgba(204, 156, 0, 0.582), rgba(78, 0, 114, 0.73)), url(${data.data.logo})`;
    //           console.log(headerBg.style.backgroundImage)
    //         }  
    //         if(headerh2)  {
    //             headerh2.style.color = data.data.headerFontColor+"!important";
    //         }
    //         if(buttonsBg){
    //             buttonsBg.style.backgroundColor = data.data.backGround;
    //         }
    //         if(windowbg){
    //             windowbg.style.backgroundColor = data.data.backGround;
    //         }
    //         if(bodybg){
    //             bodybg.style.backgroundColor = data.data.backGround;
    //             bodybg.style.color = data.data.fontcolor+"!important";
    //             console.log(data.data.fontcolor)
    //         }
    //         if(textdark){
    //             textdark.style.color = data.data.fontcolor+"!important";
    //         }
            
    //         }).catch((error) => {
    //            console.log(error);
    //         });
    //     }
    //     getMenu()
    // },[])
  return (
   <MenuContext.Provider value={{menuSetting , menuSliders }}>
    {props.children}
   </MenuContext.Provider>
  )
}
