
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../backendcomponents/navbar"

function Signin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    // eslint-disable-next-line
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:3009/api/user/login',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)

                if (res.data.code === 500) {
                    alert('User Not Found')
                }
                if (res.data.code === 404) {
                    alert('Password is wrong')
                }
                if (res.data.code === 200) {
                    // move to home
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>

<Navbar/>

        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "400px" }}>
                        <div className="card-body">
                        <div className="card-title ">  <h1 className="text-center"> SIGNIN </h1>
                            <div className="">
                                Email
                                <input   onChange={(e) => {    setEmail(e.target.value)  }}  value={email} className="mb-4 form-control"  type="email" /> 
                                Password
                                <input   onChange={(e) => {    setEmail(e.target.value)  }}    value={password} className="mb-4 form-control"  type="password" /> 
                         
                                <div className="mb-4 float-end">
                                <Link className=""  to={'/forgotpassword'}> Forget Password </Link>
                                </div>
                                <div className=" ">
                              
                                <button  onClick={handleSubmit}  className="btn btn-primary mt-3 mb-4"> SUBMIT </button>
                                </div>
                              <div className="text-center">
                                <span>already have a account?</span>
                              <Link className="text-center"  to={'/signup'}> SIGN UP </Link>
                              </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    </>
    )
}


export default Signin