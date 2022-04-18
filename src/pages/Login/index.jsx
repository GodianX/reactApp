import React from 'react'

import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'
import LoginForm from '../../components/LoginForm'

import './styles.scss'

const Login = () => {
    return (
        <div className="LoginCentered">
            <h1>Welcome</h1>
            <LoginForm />
            <NavLink to={ROUTES.REGISTER} exact="true">
                Join us
            </NavLink>
        </div>
    )
}

export default Login
