import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../Auth/Helper'
import Base from '../Core/Base'



const SignIn = () => {
    const [values, setValues] = useState({name:"", email:"five@gmail.com", password:"1234", error:"", success: false, loading: false, isRedirect: false})

    const {name, email, password, error, success, loading, isRedirect} = values


    const handleChange = (name) => (event) => {
        setValues({...values, error:false, [name]: event.target.value})
    } 


    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success " style={{ display: success ? "": "none" }}>
                        You are signup success plaese <Link to="/signin">login now!</Link>
                    </div>
                </div>
            </div>
        )
    }
    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger " style={{ display: error ? "": "none" }}>
                        check all fields and again submit
                    </div>
                </div>
            </div>
        )
    }

    const performRedirect = () => {
        if (isAuthenticated()) {
            return <Redirect to="/"/>
        }
    }

    const loadingMesasge = () => {
        return loading && (
            <div className="alert alert-info">
                <h2>loading .....</h2>
            </div>
        )
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({
            ...values, error:false, loading:true
        })
        signin({email, password})
        .then((data)=> {
            console.log("DAta", data);
            if (data.token) {
                let sessionToken = data.token;
                authenticate(sessionToken, ()=>{
                    console.log("Token Added");
                    setValues({...values, loading:true})
                })
            }else {
                setValues({...values, loading:false})
            }
        })
        .catch(e=>console.log(e))
    }

    const signInForm = () => {
        return (
            <div className="card mb-4" style={{margin: "auto", width: "50%", background:"#32383E"}}>
                <div className="container">
                <div className="form m-4">
                    <form>
                        <div className="form-group">
                          <label className="text-light">Email</label>
                          <input value={email} type="email" onChange={handleChange("email")} className="form-control" placeholder="Please Enter Your Email..."/>
                        </div>
                        <div className="form-group">
                          <label className="text-light">Password</label>
                          <input value={password} type="password" onChange={handleChange("password")} className="form-control" placeholder="Please Enter Your password..."/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-block btn-danger my-4">Login</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }

    return (
        <Base title="this Sign in Page" description="T shirt Store">
            {loadingMesasge()}
            {signInForm()}
            <h2 className="text-center">If you are not registerd user please <Link className="text-decoration-none" to="signup">SignUp</Link> </h2>
            {performRedirect()}
        </Base>
    )
}

export default SignIn
