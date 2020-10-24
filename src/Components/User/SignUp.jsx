import React, { useState } from 'react'
import Base from '../Core/Base'

const SignUp = () => {

    const [values, setValues] = useState({name:"", email:"", password:"", error:"", success: false,})

    const {name, email, password, error, success} = values
    const handleChange = (name) => (event) => {
        setValues({...values, error:false, [name]: event.target.value})
    } 

    const signUpForm = () => {
        return (
            <div className="card mb-4" style={{margin: "auto", width: "50%", background:"#32383E"}}>
                <div className="container">
                <div className="form m-4">
                    <form >
                        <div class="form-group">
                          <label htmlFor="name" className="text-light">Name</label>
                          <input value={name} name="name" type="text" onChange={handleChange("name")} class="form-control" placeholder="Please Enter Your Name..."/>
                        </div>
                        <div class="form-group">
                          <label className="text-light">Email</label>
                          <input value={email} type="email" onChange={handleChange("email")} class="form-control" placeholder="Please Enter Your Email..."/>
                        </div>
                        <div class="form-group">
                          <label className="text-light">Password</label>
                          <input value={password} type="password" onChange={handleChange("password")} class="form-control" placeholder="Please Enter Your password..."/>
                        </div>
                        <button className="btn btn-block btn-danger my-4" name="button">SignUp</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
    return (
        <Base title="Sign Up Here" description="This is Sign up Page">
            {signUpForm()}
        </Base>
    )
}

export default SignUp
