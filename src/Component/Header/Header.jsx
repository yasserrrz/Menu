

import React, { useContext, useEffect, useRef, useState } from 'react';
import { MenuContext } from '../sheardData/ShareedData';
import { useTranslation } from 'react-i18next';


export default function Header({ CallBackCheck }) {
  const  {t} = useTranslation()
  const [paraValue, setParaValue] = useState(null);
  const [tableNum, setTableNum] = useState(null);
  const [userLocationObtained, setUserLocationObtained] = useState(false);
  let {menuSetting ,} =   useContext(MenuContext)
  const userLocationRef = useRef(null);


  function isWithinArea(userLat, userLon, targetLat, targetLon, areaSize) {
    const distance = calculateDistance(userLat, userLon, targetLat, targetLon);
    return distance <= areaSize;
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180; // Convert to radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  function successCallback(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    userLocationRef.current = { latitude: userLatitude, longitude: userLongitude };
    setUserLocationObtained(true);
  }

  function errorCallback(error) {
    console.log('Error retrieving user location:', error);
    // Handle the error condition
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        { enableHighAccuracy: true }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      // Implement alternative functionality or display an error message
    }
  }, []);


  useEffect(() => {
    if (userLocationObtained) {
      const params = new URLSearchParams(window.location.search);
      let parameterValue = params.get('table');

      const userLocation = userLocationRef.current;

      if (userLocation) {
        const targetLatitude = 30.0573904;
        const targetLongitude = 31.3353004;
        const areaSize = 1000;

        const isWithin500mArea = isWithinArea(
          userLocation.latitude,
          userLocation.longitude,
          targetLatitude,
          targetLongitude,
          areaSize
        );

        if (isWithin500mArea) {
          console.log('User is in the area or within 1000 meters');

          if (!parameterValue) {
            if (localStorage.getItem('tableNum')) {
              parameterValue = localStorage.getItem('tableNum');
              setParaValue(parameterValue);
              CallBackCheck(parameterValue);
            }
          } else {
            if (!isNaN(Number(parameterValue)) && Number(parameterValue) > 0) {
              localStorage.setItem('tableNum', parameterValue);
              setParaValue(parameterValue);
              CallBackCheck(parameterValue);
            } else {
              localStorage.clear();
              params.delete('?table');
              const updatedUrl = `${window.location.pathname}?${params.toString()}`;
              window.history.replaceState({}, '', updatedUrl);
              
            }
          }

          if (tableNum == null) {
            if (localStorage.getItem('tableNum')) {
              setTableNum(localStorage.getItem('tableNum'));
            }
          } else {
            params.delete('table');
            const updatedUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.replaceState({}, '', updatedUrl);
          }

          // Rest of your code...
        } else {
          console.log('User is outside the area or more than 1000 meters away');
          // Rest of your code...
        }
      }
    }
  }, [userLocationObtained, paraValue, tableNum]);
  return (
    <div>
      {/* Render the actual UI components */}
      <div className="headerBg d-flex align-items-center justify-content-center flex-column text-center">
        <h1 className="text-capitalize  pt-3">
          {/* Restaurant */}
          {/* {menuSetting?.title} */}
         
        </h1>
        <h3>
          {/* {menuSetting?.subtitle} */}
          {tableNum ? (
            <p className="d-block">#{t("Table")} {tableNum}</p>
          ) : (
            <p className="text-center">{t("Menu")}</p>
          )}
        </h3>
        
      </div>
    </div>
  );
}










    // const params = new URLSearchParams(window.location.search);
    // let parameterValue = params.get('table');

    // if (!parameterValue) {
    //   if (localStorage.getItem('tableNum')) {
    //     parameterValue = localStorage.getItem('tableNum');
    //     setParaValue(parameterValue);
    //     CallBackCheck(parameterValue)
    //   }
    // } else {
    //   if(!isNaN(Number(parameterValue)) && Number(parameterValue) > 0){
    //     localStorage.setItem('tableNum', parameterValue);
    //     setParaValue(parameterValue);
    //     CallBackCheck(parameterValue)
    //   }else{
    //    localStorage.clear()
    //    params.delete('table');
    //    const updatedUrl = `${window.location.pathname}?${params.toString()}`;
    //    window.history.replaceState({}, '', updatedUrl);
    //   }
    
    // }
    // if (tableNum == null) {
    //   if(localStorage.getItem("tableNum")){
    //     setTableNum(localStorage.getItem("tableNum"));
    //   }
    // } else {
    //   params.delete('table');
    //   const updatedUrl = `${window.location.pathname}?${params.toString()}`;
    //   window.history.replaceState({}, '', updatedUrl);
    // }
    // // setisValidTableNumber( !isNaN(Number(tableNum))); // Check if tableNum is a number

    // // if(!isValidTableNumber){
    // //   CallBackCheck(false)
    // // }else{CallBackCheck(true)}