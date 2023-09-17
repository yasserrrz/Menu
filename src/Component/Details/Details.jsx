import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, json, useParams } from 'react-router-dom'
import $ from 'jquery'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'

export default function Details({selectedMeal}) {


   let{t} = useTranslation()

  let [myMeal, setmyMeal] = useState({})
  useEffect(()=>{
    if(selectedMeal){
      
      setmyMeal(selectedMeal)
      let myJsonObj = JSON.stringify(selectedMeal) ; 
      localStorage.setItem("meal", myJsonObj)
      console.log(myMeal)

    }else{
      let myobj =localStorage.getItem("meal")
      setmyMeal(JSON.parse(myobj))
    }
  })
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    // Scroll to the top of the item page when it is rendered
    window.scrollTo(0, 0);
  }, []);

  // Retrieve the stored scroll position
  const handleGoBackClick = () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    window.scrollTo(0, parseInt(scrollPosition));
  };
  return (<>
  
    <div className='container'>
      <div className='row text-center'>
          <div className="col-md-5 p-1 text-center">
              <img src={myMeal.itemImage} className='w-100  my-4 rounded-1' alt="" />
              <h2 className='d-none d-lg-block ' >{myMeal.itemName}</h2>
          </div>
          <div className="col-md-7 py-0 py-md-5 mt-4 d-flex flex-column justify-content-center align-items-center">
              <h2 >
              {myMeal.itemDisplayName}
              </h2>
              <p className=''>
                {myMeal.itemDisplayName}
              </p>
              {
                myMeal.itemDescription?
                <p>
                {myMeal.itemDescription}
              </p>
                :
                ""
              }
               
              {
  myMeal.itemDiscountAmount == 0 ? (
    ""
  ) : (
    
      <h2 className='price'>
        <del>{myMeal.itemDiscountedPrice + myMeal.itemDiscountAmount}LE</del>
      </h2> 
    
  )
}

              
                {myMeal.itemDiscountedPrice} {t("LE")}
                <br />
                {myMeal.itemDiscountAmount === 0 ? 
                 ""
                 :
                 <p> save {myMeal.itemDiscountAmount}LE</p>

                }
               
            {
              myMeal.itemWeight?
              <p>{t("weight")} :<strong> {myMeal.itemWeight} {t("gm")}</strong></p>
            :
            ""
            }
              <div className='mb-5 '>
                  <Link className="btn mx-2  px-3 py-1 btn-warning "  to={"/"} onClick={handleGoBackClick}>  {t("go_back")}</Link>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
