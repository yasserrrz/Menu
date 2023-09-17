import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import $ from "jquery";
import StopWatch from "../StopWatch/StopWatch";
export default function Order() {
let [ watchState , setwatchState] = useState(true)
let {id} = useParams();
   return (
    <>
      <Link
        className="btn m-1 px-3 py-1 btn-warning position-fixed end-0 bottom-0"
        to={`/details/${id}`}
      >
        <i class="fa-solid fa-left-long"></i>
      </Link>

      <nav className="my-5 justify-content-center border-0 ">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active "
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Your Talble
          </button>
          <button
            class="nav-link mx-3"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            All Tables
          </button>
        </div>
      </nav>
      <div class="tab-content " id="nav-tabContent">
        <div
          class="tab-pane fade show active "
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div className="alert alert-warning text-center" style={{color:" #553e00",}}>The Waiter On His Way To You </div>
          <div className="container">
            <div className="row   align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-5 m-5 ">
                  <h2>#Taple 2</h2>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column  justify-content-center align-items-center">
                <div className="  ">
                  <h2 id="counter"> 
                  <StopWatch active ={watchState}></StopWatch>
    
                   </h2>
                </div>
               
              </div>
              <div className="col-12  d-flex justify-content-center ">
                
              <button className="d-block btn btn-outline-success" onClick={()=>{setwatchState(false)}}>The Waiter Has Arrived</button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div className="container">
            <div className="row p-3 border-bottom align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-5 m-5 ">
                  <h2>#Taple 2</h2>
                </div>
              </div>
              <div className="col-md-6  d-flex justify-content-center align-items-center">
              
                  <h2 id="counter">
                    <StopWatch></StopWatch>
                    </h2>
                
              </div>
            </div>
            <div className="row p-3 border-bottom align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-5 m-5 ">
                  <h2>#Taple 2</h2>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
               
                  <h2 id="counter"> 
                    <StopWatch></StopWatch>
                  </h2>
                
              </div>
            </div>
            <div className="row p-3 border-bottom align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-5 m-5 ">
                  <h2>#Taple 2</h2>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
               
                  <h2 id="counter">
                    <StopWatch></StopWatch>
                   </h2>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
