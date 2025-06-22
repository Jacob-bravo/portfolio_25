import { React, useState } from 'react'
import css from "./BottomBar.module.css"
import Desk from "../../Images/working-desk.png"
import Jake from "../../Images/jakebravo.png"
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
    const [activeView, setActiveView] = useState(0);
    const [activeWorkView, setActiveWorkView] = useState(0);
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };
    const handleGoToAbout = () => {
        navigate("/about");
    };
    return (
        <div className={css.Container}>
            {/* Work and About */}
            <div className={css.About}>
                <div className={activeWorkView === 0 ? css.workActive : css.work} onClick={() => {
                    setActiveWorkView(0);
                    handleGoHome();

                }}>
                    <img src={Desk} alt="desk" />
                </div>
                <div className={activeWorkView === 1 ? css.AboutmeActive : css.Aboutme} onClick={() => {
                    setActiveWorkView(1);
                    handleGoToAbout();
                }}>
                    <img src={Jake} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BottomBar