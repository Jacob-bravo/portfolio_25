import React, { useRef } from 'react';
import css from "./Synchronia.module.css";

const Synchronia = () => {
    const videoRef = useRef(null);

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 4;
        }
    };

    return (
        <div className={css.Frame}>
            <div className={css.Github}>
                <i class="uil uil-github"></i>
             <i class="uil uil-link"></i>

            </div>
            <div className={css.VideoContainer}>
                <video
                    ref={videoRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    src="https://firebasestorage.googleapis.com/v0/b/synchronia-ke.appspot.com/o/Main_Render%5B1%5D.mp4?alt=media&token=49960549-0c99-4c6b-a0cf-9b1751d82405"
                    autoPlay
                    loop
                    muted
                    className={css.Video}
                />
            </div>
        </div>
    );
};

export default Synchronia;
