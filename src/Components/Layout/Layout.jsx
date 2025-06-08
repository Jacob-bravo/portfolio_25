import React from 'react'
import css from "./Layout.module.css"
import Topbar from '../Topnavbar/Topbar'
import Bottombar from '../Bottomnavbar/Bottombar'
import Landinpage from '../../Pages/ProjectsGrid/Landinpage'

const Layout = () => {
    return (
        <div className={css.frame}>
            {/* Topnavbar */}
            <Topbar />
            {/* Content Area/ Outlet */}
            <div className={css.Outlet}>
                <Landinpage />
            </div>
            {/* BottomNavbar */}
            <Bottombar />
        </div>
    )
}

export default Layout
