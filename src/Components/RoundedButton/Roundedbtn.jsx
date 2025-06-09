import React from 'react'
import css from "./Roundendbtn.module.css"
import { useIndex } from '../../IndexContext'
import Resume  from "../../Media/Resume_Ngunjiri..pdf"

const Roundedbtn = ({ text, btnType, itemIndex }) => {
    const {  updateIndex } = useIndex();
     const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Resume; 
        link.download = 'Resume_Ngunjiri.pdf'; 

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={btnType === 0 ? css.Container : css.HomomophismContainer}>
            {
                btnType === 0 ? <span>{text}</span> :
                    <div className={css.bottomNavs}>
                        {
                            itemIndex === 0 ? <div className={css.Icongrid} >
                                <i class="uil uil-apps" className={css.highlited} onClick={() => {
                                    updateIndex(0);
                                }} ></i>
                                <i class="uil uil-bars" onClick={() => {
                                 updateIndex(1);

                                }}></i>
                            </div>
                                : itemIndex === 1 ?
                                    <div className={css.NavigationCenter}>
                                        <span className={css.selected} onClick={() => {
                                            updateIndex(0);
                                        }}>Work</span>
                                        <span className={css.nonSeleceted} onClick={() => {
                                            updateIndex(2);
                                        }}>About</span>
                                    </div>
                                    :
                                    <div className={css.FilterCenter} onClick={handleDownload}>
                                        <span>{text}</span>
                                    </div>
                        }


                    </div>

            }

        </div>
    )
}

export default Roundedbtn
