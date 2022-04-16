import React, { useState } from 'react'
import { INITIAL_LOGIN_STATE, LOGIN_FIELDS } from './constants'

function LoginForm() {
    const [data, setData] = useState(INITIAL_LOGIN_STATE)

    const setLoginData = (key, value) => {
        setData({ ...data, [key]: value })
    }

    return (
        <form>
            <label htmlFor="email" className="form-label">
                Email
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={e => setLoginData(LOGIN_FIELDS.EMAIL, e.target.value)}
                />
            </label>

            <label htmlFor="password" className="form-label">
                Password
                <input type="password" className="form-control" id="password" />
            </label>
        </form>
    )
}

export default LoginForm
