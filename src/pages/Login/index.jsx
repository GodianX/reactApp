import React from 'react'

import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

function Login() {
    return (
        <>
            <h1>Welcome</h1>
            <NavLink className="nav-link" to={ROUTES.REGISTER} exact="true">
                Join us
            </NavLink>
        </>
    )
}

export default Login
