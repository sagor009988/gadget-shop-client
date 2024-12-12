import React from 'react'
import { Outlet } from 'react-router-dom'

const Mainlayouts = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <Outlet></Outlet>
            <h2>Footer</h2>


        </div>
    )
}

export default Mainlayouts