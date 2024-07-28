import {Toaster} from "react-hot-toast";
import React, {useState} from "react";
import axios from "axios";
import {API} from "./components/API";

const Login = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    function submitLogin() {
        axios.post(API+"/auth/login",{
            email,
            password
        }).then((res) => {
            localStorage.setItem("token",res.data.token);
            window.location.reload();
        }).catch((error) => setError(true))
    }

    return <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                            <h6 style={{color:"red"}}>{error ? "Invalid login or password" : ""}</h6>
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                                </div>
                                {
                                    loading ? <div className={"loader"}></div> :
                                    <button type="submit" className="btn btn-primary w-100"
                                            onClick={submitLogin}>Login</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;