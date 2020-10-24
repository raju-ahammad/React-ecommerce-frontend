import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Core/Base'

const SignUp = () => {
    return (
        <Base title="Sign Up Here" description="This is Sign up Page">
            <p>Plase sign up here <Link to="/">Home</Link> </p>
        </Base>
    )
}

export default SignUp
