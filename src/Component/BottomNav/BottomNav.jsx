import { Button, BottomNavigation, useMediaQuery, } from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import LocalParkingSharpIcon from '@mui/icons-material/LocalParkingSharp';
import LocalAtmSharpIcon from '@mui/icons-material/LocalAtmSharp';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';


export default function BottomNav() {

  
  const [value, setValue] = useState(0);
  let [message , setmeassage] = useState(null);
  let [tableNum , settableNum] = useState();
  const handleButtonClick = (newValue ,tableNum) => {
    setValue(newValue );
    callservice(newValue , tableNum);
   
  };
  const {t} = useTranslation();
  // async function callservice(service){
  //   let {data} = await axios.get(`https://tijarymagazineapis.azurewebsites.net/CallService/03E8/5/${service}`).catch((err)=>{window.alert(err)});
  //   console.log(data)
  //   setmeassage(data.msg)
  // }
  function callservice(service , tableNum) {
    axios.get(`https://tijarymagazineapis.azurewebsites.net/CallService/03E8/${tableNum}/${service}`)
        .then((response) => {
            let {data} = response;
            console.log(data);
            setmeassage(service.toString());
        })
        .catch((error) => {
          console.log(error)
        });
}

  
  useEffect(()=>{
    settableNum(localStorage.getItem("tableNum"))
    setTimeout(()=>{
      if(message){
        setmeassage(null)
      }
    } , 5000)

  },[message])
  

  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );
  
  
  return (<>

   {
    message ?
    <div className="row px-4 message   " style={{marginBottom:"13rem"}}>
    <div className="col-12">
      <div className="alert   text-center mb-5" style={{backgroundColor :"#ede1eb"}}> 
        
      <p className='pb-0 mb-0 text-muted'> {t("your_order")} </p>
       <div className="">
        {message === "0" ?
        <>
        <NotificationsIcon style={{color:"#12A397"}}></NotificationsIcon>
        <h3 style={{color:"#12A397"}}> {t("Services")}</h3>
        </>
        :
        message ==="1"?
        <>
        <DirectionsCarIcon className='icnm' style={{color:"#F26430"}} />
        <h3 style={{color:"#F26430"}}>
        {t("Valet")}
        </h3>
        </>
        :
        message ==="2" ? 
        <>
        <LocalAtmSharpIcon className='icnm' style={{color:"#ddb365"}} /> 
        <h3 style={{color:"#ddb365"}}>
        {t("Cheque")}
        </h3>
        </>
        :
        message ==="3"?
        <>
        <FontAwesomeIcon icon={faUserTie} style={{color:"#b389e2 "}} />
        <h3 style={{color:"#b389e2 "}}>{t("Waiter")}</h3>
        </>
        :
        ""
        }
       </div>
      
      </div>
    </div>
  </div>
  :
  ""
   }
    <BottomNavigation
      sx={{
        // fontSize:{xs:"0.5rem " , sm:"1.2rem" , md:"1.4rem"},
        width: "100%",
        position: "absolute",
        justifyContent:"space-around",
        bottom: 0,
        backgroundColor: "#F9F6EE",
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button
        onClick={() => handleButtonClick(0, tableNum)}
        sx={{ 
          fontSize:{xs:"0.75rem" ,  sm:"0.75rem" , md:"1.3rem"},
          color: value === 0 ? "#12A397" : "#12A397",
          minWidth: "auto",
          padding: "6px 12px",
          flexDirection :{xs : "column" , md: "row" } ,
          "&.MuiButton-root": {
            justifyContent: "flex-start",
            "& .MuiButton-startIcon": {
              marginRight: "0px"
            }
          }
        }}
        startIcon={<NotificationsIcon className='icnm'/>}

      >
        {t("Services")}
      </Button>
      <Button
        onClick={() => handleButtonClick(1 , tableNum)}
        sx={{
          fontSize:{xs:"0.75rem" ,  sm:"0.75rem" , md:"1.3rem"},
          color: value === 1 ? "#F26430" : "#F26430",
          minWidth: "auto",
          padding: "6px 12px",
          flexDirection:{xs : "column" , md: "row" } ,
          "&.MuiButton-root": {
            justifyContent: "flex-start",
            "& .MuiButton-startIcon": {
              marginRight: "0px"
            }
          }
        }}
        startIcon={<DirectionsCarIcon className='icnm' />}
      >
        {t("Valet")}
      </Button>
      <Button
        onClick={() => handleButtonClick(2 ,tableNum)}
        sx={{
          fontSize:{xs:"0.75rem" ,  sm:"0.75rem" , md:"1.3rem"},
          color: value === 2 ? "#ddb365" : "#ddb365",
          minWidth: "auto",

          flexDirection :{xs : "column" , md: "row" } ,
          padding: "6px 12px",
          "&.MuiButton-root": {
            justifyContent: "flex-start",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem", lg: "2.2rem" }
                        }
          }
        }}
        startIcon={<LocalAtmSharpIcon className='icnm'/>}
      >
        {t("Cheque")}
      </Button>
      <Button
        onClick={() => handleButtonClick(3 ,tableNum)}
        sx={{
          fontSize:{xs:"0.75rem" ,  sm:"0.75rem" , md:"1.3rem"},
          color: value === 3 ? "#b389e2" : "#b389e2",
          minWidth: "auto",
          flexDirection :{xs : "column" , md: "row" } ,
          padding: "6px 12px",
          "&.MuiButton-root": {
            justifyContent: "flex-start",
            // alignItems: "center",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem", lg: "2.2rem" }
            }
          }
        }}
        startIcon={<FontAwesomeIcon icon={faUserTie} />}
      >
        {t("Waiter")}
      </Button>
    </BottomNavigation>
  </>
  );
}
