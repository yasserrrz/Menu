// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import React from 'react'




// export let SliderContext = createContext(null);


// export default function Sliderdata(props) {
//     let [myCaegories, setMyCaegories] = useState([]);
//     let [meals , setMeals] = useState([])
//     const [selectedName, setselectedName] = useState(null);
//     async function getCategories() {
//         let { data } = await axios.get(`https://tijarymagazineapis.azurewebsites.net/GetMenuSections/03E8`).catch((error) => { window.alert(error) });
//         console.log(data.data);
//         setMyCaegories(data.data)
//         getSpecificCat(data.data[0].id)
//         console.log(myCaegories)
//         setselectedName(data.data[0].sectionName)
//     }
 

//    function getSpecificCat(category) {
//       axios.get(`https://tijarymagazineapis.azurewebsites.net/GetSectionItems/${category}`)
//           .then(response => {
//             setMeals(response.data.data);
            
//           })
//   }
    
//   //   async function getSpecificCat(category) {
//   //     let {data} = await axios.get(`https://tijarymagazineapis.azurewebsites.net/GetSectionItems/${category}`);
//   //     console.log(data.data)
//   //     setMeals(data.data);
//   // }
//     return (
//       <SliderContext.Provider value={ { meals ,selectedName , setselectedName,  getSpecificCat  ,  getCategories , myCaegories}}>
//              {props.children}
//       </SliderContext.Provider>
//     )
// }
