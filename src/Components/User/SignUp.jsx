import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from '../Auth/Helper'
import Base from '../Core/Base'

const SignUp = () => {

    const [values, setValues] = useState({name:"", email:"", password:"", error:"", success: false,})

    const {name, email, password, error, success} = values
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
    
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({
            ...values, error:false
        })
        signUp({name, email, password})
        .then((data)=> {
            console.log("DAta", data);
            if (data.email === email) {
                setValues({
                    ...values, name:"", email:"", password:"", error:"", success: true,
                })
            }else {
                setValues({
                    ...values, error: true, success: false
                })
            }
        })
        .catch(e=>console.log(e))
    }

    const signUpForm = () => {
        return (
            <div className="card mb-4" style={{margin: "auto", width: "50%", background:"#32383E"}}>
                <div className="container">
                <div className="form m-4">
                    <form>
                        <div className="form-group">
                          <label htmlFor="name" className="text-light">Name</label>
                          <input value={name} name="name" type="text" onChange={handleChange("name")} className="form-control" placeholder="Please Enter Your Name..."/>
                        </div>
                        <div className="form-group">
                          <label className="text-light">Email</label>
                          <input value={email} type="email" onChange={handleChange("email")} className="form-control" placeholder="Please Enter Your Email..."/>
                        </div>
                        <div className="form-group">
                          <label className="text-light">Password</label>
                          <input value={password} type="password" onChange={handleChange("password")} className="form-control" placeholder="Please Enter Your password..."/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-block btn-danger my-4">SignUp</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }


    return (
        <Base title="Sign Up Here" description="This is Sign up Page">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            {JSON.stringify(values)}
        </Base>
    )
}

export default SignUp
