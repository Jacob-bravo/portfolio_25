import React from 'react'
import css from "./Bottombar.module.css"
import Roundedbtn from '../RoundedButton/Roundedbtn'


const Bottombar = () => {

    return (
        <div className={css.container}>
            {/* change Projects view */}
            <Roundedbtn btnType={1} itemIndex={0} />
            {/* Floating navigation */}
            <Roundedbtn btnType={1} itemIndex={1} />
            {/* filter button */}
            <Roundedbtn btnType={1} text={'Resume'} itemIndex={2} />
        </div>
    )
}

export default Bottombar
