import React, { createContext, useContext, useEffect, useState } from "react";
// import Swiper core and required modules
import offersImg from "../../icn/icons8-hot-price-100 (1).png";
import defultImg from "../../assets/beef.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/less/thumbs";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import $ from "jquery";
import i18next, { dir } from "i18next";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { SliderContext } from "../sheardData/Sliderdata";
import { Link } from "react-router-dom";
import defultImage from "../../assets/miscellaneous.png";
// import Slider from "react-slick";
import ReactSlider from "react-slick";
import slidImg1 from "../../assets/slider1.png";
import slidImg2 from "../../assets/slider2.png";
import slidImg3 from "../../assets/slider3.png";
import slidImg4 from "../../assets/slider4.png";
import slidImg5 from "../../assets/slider5.png";
// import slidImg6 from '../../assets/pexels-the-good-burger-12325104.jpg'
import { Autoplay } from "swiper";
import { MenuContext } from "../sheardData/ShareedData";

// export const ItemContext = createContext();

export default function Slider({ setSelectedMeal }) {
  // let {getCategories , myCaegories , getSpecificCat , meals , setselectedName ,selectedName} = useContext(SliderContext)
  let { menuSliders } = useContext(MenuContext);
  const { t } = useTranslation();
  // const[bodyDir , setbodyDir]  = useState("") ;
  const [isFixed, setIsFixed] = useState(false);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [activeIndex, setActiveIndex] = useState(1);
  let [myCaegories, setMyCaegories] = useState([]);
  let [meals, setMeals] = useState([]);
  const [selectedName, setselectedName] = useState(null);
  const [preCategoryTit, setpreCategoryTit] = useState(null);
  const [bodydir, setbodydir] = useState("");

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  const $slider = $(".slider");
  const sectionTop = $slider.offset()?.top || 0;
  console.log(sectionTop);
  const handleScroll = () => {
    if (meals.length > 2) {
      const scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      setIsFixed(scrollTop > sectionTop);
    }
  };
  useEffect(() => {
    const savedSlide = localStorage.getItem("currentSlide");
    if (savedSlide) {
      setCurrentSlide(parseInt(savedSlide, 10));
    }
    setbodydir(localStorage.getItem("i18nextLang"));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentSlide", currentSlide);
    //     window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    const handleScroll = () => {
      if (meals.length > 5) {
        const scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        setIsFixed(scrollTop > sectionTop);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [currentSlide, meals]);

  function getCategories() {
    axios
      .get(`https://tijarymagazineapis.azurewebsites.net/GetMenuSections/03E8`)
      .then((response) => {
        let { data } = response;
        console.log(data);
        console.log(data.data);
        setMyCaegories(data.data);
        if (localStorage.getItem("preCategory")) {
          getSpecificCat(localStorage.getItem("preCategory"));
          setActiveIndex(parseInt(localStorage.getItem("activeIndex")));
          setselectedName(localStorage.getItem("preCategoryTit"));
        } else {
          getSpecificCat(data.data[0].id);
          setselectedName(data.data[0].sectionName);
        }
        console.log(myCaegories);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  function getSpecificCat(category) {
    axios
      .get(
        `https://tijarymagazineapis.azurewebsites.net/GetSectionItems/${category}`
      )
      .then((response) => {
        let { data } = response;
        console.log(data.data, "getSpecificCat");
        setMeals(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //  function getSpecificCat(category) {
  //     axios.get(`https://tijarymagazineapis.azurewebsites.net/GetSectionItems/${category}`)
  //         .then(response => {
  //           setMeals(response.data.data);

  //         })
  // }
  const handleSlideClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
  };

  // Handle click event for items in the list
  const handleClick = (item, item2, index) => {
    if (item !== "slide change") {
      console.log("handleClick");
      setselectedName(item2);
      localStorage.setItem("preCategoryTit", item2);
      getSpecificCat(item);
      localStorage.setItem("preCategory", item);
    }
    handleSlideClick(index);
    console.log(item);
  };
  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
    console.log("handleMealSelect");
    // Additional code for handling the meal selection
  };
  // const slidesToShow = Math.min(myCaegories.length, 3);
  // const slidesToScroll = myCaegories.length < slidesToShow ? myCaegories.length : 1;
  // control the card length
  $(document).ready(function () {
    // Find the tallest height among all h6 tags
    let maxHeight = 0;
    $(".titel").each(function () {
      maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });

    // Set the same height for all h6 tags
    $(".titel").css("height", maxHeight + "px");
  });
  // end control the card length

  // Store the scroll position
  const handleItemClick = () => {
    localStorage.setItem("scrollPosition", window.pageYOffset);
  };

  const hadelAllclicks = (item) => {
    handleItemClick();
    handleMealSelect(item);
  };
  useEffect(() => {
    getCategories();
    console.log(myCaegories, "useEffect");

    // console.log("bodyDir" , bodyDir)
    // setbodyDir( $("html").css("direction"))
    // if(bodyDir === "ltr"){
    //   $(".slide-item").addClass("margin-eng");
    //   $(".slide-item").removeClass("margin-arabic")
    // }else{
    //   $(".slide-item").removeClass("margin-eng");
    //   $(".slide-item").addClass("margin-arabic")
    // }
    // setlang(localStorage.getItem("i18nextLang"));

    // getSpecificCat(myCaegories[1].id);
  }, []);

  return (
    <>
      <Swiper
        className="my-1"
        loop={true}
        navigation
        autoplay={{ delay: 3000 }}
        dir="ltr"
      >
        {menuSliders?.map((ele , i) => {
          return (
            <>
              <SwiperSlide key={i}>
                <div className="slidImgParent">
                  <img src={ele.image} className="w-100" alt="" />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
       <p className=" m-4 not">{t("select_catergories")}</p>
      <div
        className={`slider    container-flued  py-0  px-md-4 pt-md-2 ${
          isFixed ? "fixed-top slider-bg" : ""
        }`}
        style={{ direction: "inherit"  }}
      >
        <Swiper
          className="pt-1"
          navigation
          // loop = {true}
          // dir={bodydir === "en" ? "ltr" : "rtl" }
          dir="ltr"
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            490: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 5,
              // spaceBetween: 0,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 11,
              spaceBetween: 20,
              // dir: "rtl"
            },
            1840: {
              slidesPerView: 10,
              spaceBetween: 20,
              // dir: "rtl"
            },
          }}
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex - 2}
          key={activeIndex - 2}
          
        >
          {myCaegories.map((ele, i) => {
            return (
              <SwiperSlide
                key={i + 1}
                onClick={() => handleClick(ele.id, ele.sectionName, i + 1)}
                className={`slide-item  align-items-center  marginslider  mx-lg-3 text-center p-1   `}
              >
                <div className="d-flex flex-column align-items-center">
                  <div
                    className={` img-contaner p-0 m-0 d-flex justify-content-center aligne-items-center  rounded rounded-circle ${
                      activeIndex === i + 1 ? "active" : ""
                    } `}
                    style={{
                      marginRight: "0px !important",
                      marginLeft: "0px ",
                    }}
                  >
                    <img
                      src={ele.sectionBanner ? ele.sectionBanner : defultImg}
                      className={`w-100  rounded-circle  `}
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                  <p
                    className={`fw-bolder pt-1  mb-0  ${
                      activeIndex === i + 1 ? "active-titel" : ""
                    }  `}
                    style={{ fontSize: "0.88rem" }}
                  >
                    {ele.sectionName.split(" ").splice(0, 2).join("")}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container colorAPI my-5">
        <h2>{selectedName ? selectedName : "Category"}</h2>
        <div className="row">
          {meals.map((ele, i) => {
            return (
              <>
                <div className="col-6 col-md-4 p-1 " id={i} key={i}>
                  <Link
                    onClick={() => {
                      hadelAllclicks(ele);
                    }}
                    to={`/details/${i + 1}`}
                    className="text-decoration-none"
                  >
                    <div className=" d-flex flex-column align-items-center text-center p-md-2 ">
                      <div className=" p-1 meal-parent rounded-circle">
                        <img
                          src={ele.itemImage ? ele.itemImage : defultImage}
                          className="w-100 my-3 rounded-circle "
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="titel-parent pt-3">
                        <h6 className=" titel mb-0" id="titel">
                          {ele.itemName}
                          {/* {.split(" ").splice(0 , 2).join(" ")} */}
                        </h6>
                      </div>
                      <button className="btn btn-color btn-sm  rounded-pill text-center my-0 text-white px-sm-4 px-2 ">
                        Read More
                      </button>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
//img-contaner-show
