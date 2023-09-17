
import React, { useContext, useEffect , useState } from 'react';

import { useTranslation } from 'react-i18next';

import $ from 'jquery';
import { MenuContext } from '../sheardData/ShareedData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  const { t } = useTranslation();
 let{menuSetting} = useContext(MenuContext);
 let [isShow , setisShow] = useState(false);
 const openClose = () => {
  setisShow(!isShow)
    }
  const openModal = () => {
    $('.modal-yasser').removeClass("d-none");
    $('.modal-yasser').addClass("d-block");
    $('body').addClass("disable-scroll");
  };

  const closeModal = () => {
    $('.modal-yasser').removeClass("d-block");
    $('.modal-yasser').addClass("d-none");
    $('body').removeClass("disable-scroll");
  };
  const url = window.location.href;
  const handleShare = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('table')) {
      urlParams.delete('table');
    }
  
    const updatedUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
  
    if (navigator.share) {
      navigator
        .share({
          // title: document.title,
          url: updatedUrl,
        })
        .then(() => {
          console.log('URL shared successfully.');
        })
        .catch((error) => {
          console.error('Error sharing URL:', error);
        });
    } else {
      console.warn('Web Share API not supported.');
      // Fallback logic for browsers that don't support the Web Share API
      // For example, you can display a custom share dialog or redirect to a share page
    }
    
    console.log("handleShare");
  };

  return (
    <>
      <div className="owner-footer d-flex justify-content-center flex-column align-items-center">
        <div className=" text-center">
           {/* {menuSetting?.menuFooter.title? <h5  style={{ wordWrap: "break-word", overflowWrap: "break-word",  wordBreak: "break-all",}}> 
            {menuSetting.menuFooter.title}
           </h5>
           :
          ""
} */}
        </div>
        <div className="share">
       {/* {menuSetting?.menuFooter.menuFooterItems.map((ele)=>{
        return<>
          <a href={ele.url}  target="_blank" className='mx-2 text-reset'>
        <i className={`fa-brands ${"fa-"+ele.name}`} />
          </a>
        </>
       })} */}
        </div>


        
      </div>
      <div className=" d-flex justify-content-around">
      <a onClick={openClose} className='mx-2 text-reset text-white btn btn-danger  ' style={{color:"#fff"}}>
        <span className='text-white'>{t("Discription")}</span>
      <i className="fa-solid fa-circle-play text-white mx-2"></i>
          </a>
      <a onClick={handleShare} className='mx-2 text-reset btn btn-primary text-white' style={{color:"#fff "}}>
      <span className='text-white'>
         Share </span> 
          <i class="fa-solid fa-share-nodes  text-white mx-2"></i>
          </a>
       
      </div>
      <div className="w-100 mb-5 footer ">
        <div className="footer-- text-center  d-flex justify-content-center align-items-center ">
          <div className='pt-1'>
          <p className='fw-bolder'  onClick={openModal} >
            --Yasser--
          </p>
          </div>
         
        </div>
      </div>
{/* 
      <div className="modal-yasser d-none d-flex justify-content-center  align-items-center" >
        <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content  ">
            <div className="modal-header">
              <div className="d-flex justify-content-center" style={{ width: "95%" }}>
                <h1 className="modal-title fs-2" style={{ marginTop: "10px", fontSize: "18px", color: "rgb(25, 135, 84)", fontWeight: "bold", textShadow: "rgb(191, 191, 191) 2px 4px 4px" }}>
                  {t("about")}
                </h1>
              </div>
              <div className="">
                <button type="button" className="btn-close btn btn-danger" onClick={closeModal}></button>
              </div>
            </div>
            <div className="modal-body">
             <div className="d-flex flex-column justify-contnent-center align-items-center">
             <p className="text-center fontmaaray">{t("paragraph1")}</p>
              <p className="text-center fontmaaray">{t("paragraph2")}</p>
              <p className="text-center fontmaaray">{t("paragraph3")}</p>
             </div>
            </div>
            <div className="modal-footer d-flex justify-content-around border-0">
              <a className="text-decoration-none" href="mailto:Support@tijary.store">
                <button type="button" className="btn p-2 px-3 " style={{ backgroundColor: "#F56902", color: "#fff" }}>
                  <i className="fa-regular fa-envelope me-3"></i>
                  {t("send")}
                </button>
              </a>
              <a className="col-2  p-2 fs-2" href="https://wa.me/201118118343" target="_blank">
                <i className="fa-brands fa-whatsapp" style={{ color: '#27b459' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}




  {isShow ? <>
  
<div className="modal-yasser  d-flex justify-content-center align-items-center">
  <div className="modal-dialog modal-dialog-centered " onClick={openClose}>
    <div className="modal-content">
      <div className="modal-header">
        <div className="d-flex justify-content-center" style={{ width: "95%" }}>
          
         <p className='' style={{fontStyle:"italic"}}>Yasser</p>
          
        </div>
        <div className="">
          <button type="button" className="btn-close btn btn-danger" onClick={openClose}></button>
        </div>
      </div>
      <div className="modal-body disable-scroll" style={{overflow:""}}>
        {/* <iframe
          style={{width:"100%" , height:"100%"}}
          src="https://www.youtube.com/embed/5KtYqJwpgRg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
      <div className="modal-footer">
       <button className='btn btn-primary mb-1' onClick={openClose}>Ok</button>
      </div>
    </div>
  </div>
</div>

  
  </> : ""}













        <div className="modal-yasser d-none d-flex justify-content-center  align-items-center" >
        <div className="modal-dialog modal-dialog-centered " >
          <div className="modal-content  ">
            <div className="modal-header">
              <div className="d-flex justify-content-center" style={{ width: "95%" }}>
                <h1 className="modal-title fs-2" style={{ marginTop: "10px", fontSize: "18px", color: "rgb(25, 135, 84)", fontWeight: "bold", textShadow: "rgb(191, 191, 191) 2px 4px 4px" }}>
                  {/* {t("about")} */}
                  About Me
                </h1>
              </div>
              <div className="">
                <button type="button" className="btn-close btn btn-danger" onClick={closeModal}></button>
              </div>
            </div>
            <div className="modal-body">
              <p className='fontmaaray text-center'>
                I'm Yasser Mohamed, a dedicated Frontend Web Developer with over 2 years of hands-on experience in crafting exceptional user interfaces using React.js. My journey in web development has been driven by a passion for creating seamless and visually appealing web experiences.
              </p>
            </div>
            <div className="modal-footer">
              <div className="w-100">

           <div className="row">
           <div className=" d-flex justify-content-around border-0">

<div className='col-8'>
<a className="text-decoration-none" href="yasserrmohammed44@gmail.com">
   <button type="button" className="btn p-2 px-3 " style={{ backgroundColor: "#F56902", color: "#fff"  ,fontSize:"0.7rem"}}>
     <i className="fa-regular fa-envelope me-3"></i>
     {t("send")}
   </button>
 </a>
</div>
 <div>
 <a className="col-2 fs-1" href="https://wa.me/201094991544" target="_blank">
   <i className="fa-brands fa-whatsapp" style={{ color: '#27b459' }}></i>
 </a>
 </div>
</div>
           </div>
            <div className="row">
            <div className="d-flex justify-content-center">
<div className=" d-flex flex-column align-items-center ">
          <p className="mb-0  mx-2 text-muted " style={{ fontSize: "0.8rem" }}>
            Developed by
          </p>
            <p>

            <a className="text-decoration-none " href="http://www.bedab.com/contact-arabic.html">
                Yasser Mohamed
            </a>
            </p>
          </div>  
              </div>
            </div>
            </div>
          </div>
              </div>
        </div>
      </div>
    </>
  );
}
