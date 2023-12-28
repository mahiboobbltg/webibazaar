import React, { useState, useEffect } from 'react';
import axios from 'axios'

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [options, setOptions] = useState();
  useEffect(() => {
    const getproducts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3009/api/product/getProduct'
            );
            const data = await response.data;
            setOptions(data);

        } catch (error) {
            console.log(error)
        }
    }
    getproducts();
}, []);
console.log(options)
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        {options.map((option,index) => (
          <option key={index} value={option.value}>{option.productname}</option>
        ))}
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};

export default MyComponent;