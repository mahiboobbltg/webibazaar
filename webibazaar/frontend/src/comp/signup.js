import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'


function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:3009/api/user/register',
            {
                email: email,
                password: password
            })

            .then(res => {
                console.log(res.data)
                if (res.data.ok === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (<>

        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "400px" }}>
                        <div className="card-body">
                            <div className="card-title ">
                                <h1 className="text-center"> SIGNUP </h1>
                                <div className="">
                                    {/* firstname
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="mb-3 form-control" type="email" /> 
                                  
                                    lastname
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="mb-3 form-control" type="email" />
                                   */}
                                    Email
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="mb-3 form-control" type="email" /> 
                                  
                                    {/* phone
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="mb-3 form-control" type="email" /> 
                                   */}
                                    Password
                                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} className="mb-3 form-control" type="password" /> 

                                </div>
                                <div className="d-grid mt-5">
                                    <button onClick={handleSubmit} className="btn btn-primary  mb-4"> SUBMIT </button>
                                </div>



                                <div className="text-center mt-4 ">
                                    <span>already have a account?</span>
                                    <Link to={'/signin'}> SIGN IN </Link>
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


export default Signup