import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import $ from 'jquery'
import i18next from 'i18next'
import "../../i18n"
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import BottomNav from '../BottomNav/BottomNav'




export default function Layout () {
  const [isEn, setIsEn] = useState(false);
  let savedOption = localStorage.getItem('i18nextLang');
  let langBoxWidth = $(".sub-hold").outerWidth(true);
  let [isTable , setIsTable] = useState(false)
   const CallBackCheck = (isTable)=>{
      setIsTable(isTable)
   };

  useEffect(()=>{
    let langBoxWidth = $(".sub-hold").outerWidth(true);
    $(".hold-btn").animate({right:`-${langBoxWidth}px`,})
    if(savedOption === "en" ){
      i18next.changeLanguage("en");
      $("#Lang").css("direction" , 'ltr')
      document.getElementById("selectOp").value = "عربي"
      setIsEn(false)
    }else{
      i18next.changeLanguage("ar");
      document.getElementById("selectOp").value = "English"
      $("#Lang").css("direction" , "rtl");
        setIsEn(true)
  }

},[savedOption])

const handleLanguageChange =(e)=>{
  setIsEn(!isEn)
  const value = e.target.value;
  if (value === 'English') {
    i18next.changeLanguage("en");
    $("#Lang").css("direction" , "ltr");
    // $(".swiper-slide").addClass("margin-eng")
    // $(".swiper-slide").removeClass("margin-arabic")
    localStorage.setItem("i18nextLang" , "en")
    window.location.reload(false);
  } else  {
    i18next.changeLanguage("ar");
    $("#Lang").css("direction" , "rtl");
    // $(".swiper-slide").removeClass("margin-eng")
    // $(".swiper-slide").addClass("margin-arabic")
    localStorage.setItem("i18nextLang" , "ar")
    window.location.reload(false);
  }
  $(".hold-btn").animate({right:`-${langBoxWidth}px`,})
}
  function slidBtn (){
    let position =  $(".hold-btn").css("right");
    if(position === "0px"){
      let langBoxWidth = $(".sub-hold").outerWidth(true);
      console.log(langBoxWidth);
      $(".hold-btn").animate({right:`-${langBoxWidth}px`,})
    }else{
      $(".hold-btn").animate({right:`0px`,})
    }

  }

   return<>
      <div className='hold-btn position-fixed  '>
      <div className=" icn-hold rounded-circle p-2  " style={{backgroundColor :"black" }}>
        <TranslateSharpIcon sx={{fontSize:{xs:"1rem" , sm:"1.6rem"} , color:"#fff" , margin:"0px 5px" }} onClick={slidBtn} ></TranslateSharpIcon>
        </div>
      <div className=' sub-hold m-1  '>
         <input type="button" className='selectOp btn btn-dark rounded' id='selectOp' onClick={handleLanguageChange}  value={ isEn ? "English" : "عربي" } />
      </div>
       </div>
      <Header CallBackCheck ={CallBackCheck}></Header>
      <div id='Lang'>
      <Outlet></Outlet>
      </div>
      <div className='position-absolute bottom-0'></div>
      <Footer></Footer>
      {/* ${isTable? `` : `d-none`}  */}
      <div className={`fixed-bottom `}>
      <BottomNav></BottomNav> 
      </div>
  </>
  
}