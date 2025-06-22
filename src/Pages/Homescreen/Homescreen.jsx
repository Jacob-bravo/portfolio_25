import React from 'react'
import css from "./Homescreen.module.css"
import { projects } from "../../data"
import Stream from '../../Projects/Streamify/Stream'

const Homescreen = () => {
    return (
        <div className={css.Frame}>
            {projects.map((Item, index) => {
                return (
                    <div className={css.card} key={index}>
                        {Item}
                    </div>
                )
            })
            }


        </div>
    )
}

export default Homescreen
