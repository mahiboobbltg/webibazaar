import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get("http://localhost:3009/api/user/register", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);

            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-container ">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="title">Login page</h4>
                                   
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"

                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Your Email "
                                          
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Your Password"
                                          
                                        />
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary">
                                    Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Login;