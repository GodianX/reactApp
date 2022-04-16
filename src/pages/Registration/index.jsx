import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

function Registration() {
    return (
        <>
            <h1>Registration</h1>
            <NavLink className="nav-link" to={ROUTES.LOGIN} exact="true">
                Login page
            </NavLink>
        </>
    )
}

export default Registration
