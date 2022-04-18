import React, { useEffect, useState } from 'react'
import { INITIAL_LOGIN_STATE, LOGIN_FIELDS } from './constants'

const LoginForm = () => {
    const [data, setData] = useState(INITIAL_LOGIN_STATE)
    const [isBtnDisabled, setBtnDisabled] = useState(true)

    useEffect(() => {
        if (data[LOGIN_FIELDS.EMAIL] && data[LOGIN_FIELDS.PASSWORD]) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [data])

    const setLoginData = (key, value) => {
        setData({ ...data, [key]: value })
    }

    return (
        <form>
            <div className="app-container">
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
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={e => setLoginData(LOGIN_FIELDS.PASSWORD, e.target.value)}
                    />
                </label>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => console.log('data', data)}
                    disabled={isBtnDisabled}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default LoginForm
