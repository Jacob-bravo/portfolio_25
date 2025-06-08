import React from 'react'
import css from "./Roundendbtn.module.css"

const Roundedbtn = ({ text, btnType, itemIndex }) => {
    return (
        <div className={btnType === 0 ? css.Container : css.HomomophismContainer}>
            {
                btnType === 0 ? <span>{text}</span> :
                    <div className={css.bottomNavs}>
                        {
                            itemIndex === 0 ? <div className={css.Icongrid}>
                                <i class="uil uil-apps"></i>
                                <i class="uil uil-bars"></i>
                            </div>
                                : itemIndex === 1 ?
                                    <div className={css.NavigationCenter}>
                                        <span className={css.selected}>Work</span>
                                        <span className={css.nonSeleceted}>About</span>
                                    </div>
                                    :
                                    <div className={css.FilterCenter}>
                                        <span>filter</span>
                                    </div>
                        }


                    </div>

            }

        </div>
    )
}

export default Roundedbtn
