import React from 'react'
import css from "./ApplePark.module.css"
import Phone from "../../Svgs/phone 1.svg"
import Music from "../../Svgs/music 1.svg"
import Camera from "../../Svgs/camera 1.svg"
import Explore from "../../Svgs/explore.svg"
const AppleParkImage = "https://firebasestorage.googleapis.com/v0/b/synchronia-ke.appspot.com/o/applepark.jpg?alt=media&token=d6f3d5c4-dea3-40f8-b828-6b1adac10f3c"

const ApplePark = () => {
    const handleVisit = () => {
        window.open("https://apple-event-4c3ac.web.app/", "_blank");
    };
    return (
        <div className={css.Frame}>
            <div className={css.Column}>

                <div className={css.Description}>
                    <i class="uil uil-link" onClick={handleVisit}></i>
                    <h1>APPLE EVENT</h1>
                    <span>A modern and responsive UI website inspired by Apple's event presentation,
                        designed to showcase the launch of the iPhone 15 Pro.
                        This project was built using <span className={css.TechStack}>React.js</span> for the frontend, focusing on clean visuals,
                        smooth transitions, and engaging layouts to mimic Apple's signature product announcement
                        style. It highlights features such as titanium build, A17 Pro chip,
                        camera capabilities, and dynamic interactions—delivering a premium feel through React and CSS.</span>
                </div>
                <div className={css.IphoneBottom}>
                    <div className={css.Phone}>
                        <img src={Phone} alt="phonesvg" />
                    </div>
                    <div className={css.Compass}>
                        <img src={Explore} alt="phonesvg" />
                    </div>
                    <div className={css.Music}>
                        <img src={Music} alt="phonesvg" />
                    </div>
                    <div className={css.Camera}>
                        <img src={Camera} alt="phonesvg" />
                    </div>
                </div>
            </div>

            <div className={css.CameraColumn}>
                <div className={css.cameraframe}>
                    <div className={css.HiddenDescription}>
                        <i class="uil uil-link" onClick={handleVisit}></i>
                        <h1>APPLE EVENT</h1>
                        <span>A modern and responsive UI website inspired by Apple's event presentation,
                            designed to showcase the launch of the iPhone 15 Pro.
                            This project was built using <span className={css.TechStack}>React.js</span> for the frontend, focusing on clean visuals,
                            smooth transitions, and engaging layouts to mimic Apple's signature product announcement
                            style. It highlights features such as titanium build, A17 Pro chip,
                            camera capabilities, and dynamic interactions—delivering a premium feel through React and CSS.</span>
                    </div>
                </div>
                <div className={css.Cameratext}>
                    <span>Video</span>
                    <span>Photo</span>
                    <span>Potrait</span>
                    <span>HDR</span>
                    <span>1:1</span>
                </div>
                <div className={css.CameraControl}>
                    <div className={css.Photos}>
                        <img src={AppleParkImage} alt="recent" />
                    </div>
                    <div className={css.CameraAction}>
                        <div></div>
                    </div>
                    <div className={css.Sync}>
                        <i class="uil uil-sync"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplePark