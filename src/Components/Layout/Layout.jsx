import React from 'react'
import css from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import BottomBar from '../BottomNavbar/BottomBar'


const Layout = () => {
    return (
        <div className={css.Frame}>
            {/* Navbar */}
            <div className={css.RowOne}>
                <Navbar />
            </div>
            {/* Outlet */}
            <div className={css.RowTwo}>
                <Outlet />
            </div>
            {/* BottomNav */}
            <div className={css.BottomNav}>
                <BottomBar />
            </div>

        </div>
    )
}

export default Layout
