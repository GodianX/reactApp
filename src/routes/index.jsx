import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTES } from './constants'

import Login from '../pages/Login'
import Registration from '../pages/Registration'

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} exact="true" element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes
