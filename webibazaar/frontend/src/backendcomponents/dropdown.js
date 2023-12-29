// import React, { useState, useEffect } from 'react';
// import axios from 'axios'

// const MyComponent = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [options, setOptions] = useState();
//   useEffect(() => {
//     const getproducts = async () => {
//         try {
//             const response = await axios.get(
//                 'http://localhost:3009/api/product/getProduct'
//             );
//             const data = await response.data;
//             setOptions(data);

//         } catch (error) {
//             console.log(error)
//         }
//     }
//     getproducts();
// }, []);
// console.log(options)
//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleSelectChange}>
//         {options.map((option,index) => (
//           <option key={index} value={option.value}>{option.productname}</option>
//         ))}
//       </select>
//       <p>Selected value: {selectedValue}</p>
//     </div>
//   );
// };

// export default MyComponent;





import React, { useState } from "react";

const MyComponent = () => {
  const [ setSelectCity] = useState("");
  const cities = [
    { id: "1", value: "Delhi" },
    { id: "2", value: "Mumbai" },
    { id: "3", value: "Mumbai" },
    { id: "4", value: "Delhi" },
    { id: "5", value: "Pune" },
  ];
  const onChange=(el)=>{
    setSelectCity(el.target.value)
  }

  return (
    <>
      <select className="form-control" onChange={onChange}>
     
        <option>All Categories  <i className="fa fa-angle-down"></i> </option>
        {cities.map((cities) => (
          <option key={cities.id} value={cities.value} >
            {cities.value}
          </option>
        ))}

      </select>
   

    </>
  );
};

export default MyComponent;





