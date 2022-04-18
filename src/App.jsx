import React from 'react'
import PageRoutes from './routes'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <div className="app-container">
                <PageRoutes />
            </div>
            <Footer />
        </>
    )
}

export default App
