import React, { useEffect, useState } from 'react'
import axios from "axios"


function User() {
  const [user, setUsers] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3009/api/product/getProduct")
      .then((response) => setUsers(response.data))
      .catch((Error) => console.log(Error))
  }, [])
  return (
      <>
{ user.map((product) => (
       <p  key={product.id}>{product.productname}</p>
))};




      </>
  )

  }

export default User