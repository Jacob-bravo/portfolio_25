import React, { useEffect, useState } from "react";
import css from "./Stream.module.css"
import Lottie from 'lottie-react';
import AnimationOne from "../../Animations/hand-love.json"
import AnimationTwo from "../../Animations/love-baloon.json"
import AnimationThree from "../../Animations/pixelated-heart.json"
import AnimationFour from "../../Animations/hearts.json"
const Profile = "https://firebasestorage.googleapis.com/v0/b/synchronia-ke.appspot.com/o/weatherapp.jpg?alt=media&token=8c1354eb-f31c-4520-8867-e243da547292"

const TextToDisplay = ["I genuinely believe the most exciting projects are born from curiosity and collaboration.", "But how deeply we understand the path ahead", "Every quiet moment is an invitation to listen to the whispers of purpose within"];
const AnimationToDisplay = [AnimationOne, AnimationTwo, AnimationThree, AnimationFour];

const Stream = () => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [animationIndex, setAnimationIndex] = useState(3);
    const handleVisit = () => {
        window.open("https://virtualr-2e4c3.web.app", "_blank");
    };

    useEffect(() => {
        const currentText = TextToDisplay[index];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 2000); // wait before deleting
                }
            } else {
                setDisplayedText(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % TextToDisplay.length);
                }
            }
        }, isDeleting ? 50 : 100); // typing and deleting speeds

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    const handleAnimationChange = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * AnimationToDisplay.length);
        } while (newIndex === animationIndex); // Ensure it's different

        setAnimationIndex(newIndex);
    };


    return (
        <div className={css.Frame}>
            <div className={css.Columns}>
                {/* Streamify Intro Box */}
                <div className={css.ColumnOne}>
                    <i class="uil uil-github-alt" onClick={handleVisit}></i>
                    <div className={css.Header}>
                        Streamify

                    </div>
                    <div className={css.Container}>
                        <div className={css.navRow}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={css.Animation}>
                            <Lottie animationData={AnimationToDisplay[animationIndex]} loop={true} />
                        </div>
                        <div className={css.ChatArea}>
                            <div className={css.ProfileArea}>
                                <img src={Profile} alt="" />
                                <span>Jake Bravo</span>
                            </div>
                            <div className={css.ChatAnimation}>
                                <div className={css.ChatText}>
                                    <span>{displayedText}<span className={css.Cursor}>|</span></span>

                                </div>
                                <button onClick={handleAnimationChange}>
                                    <i className="uil uil-message"></i>
                                </button>
                            </div>

                        </div>
                        <div className={css.StreamButtons}>
                            <i class="uil uil-video"></i>
                            <i class="uil uil-microphone"></i>
                            <i class="uil uil-voicemail"></i>
                            <i class="uil uil-user-plus"></i>
                            <i class="uil uil-ellipsis-h"></i>
                        </div>
                        <div className={css.Secure}>
                            <i class="uil uil-shield-check"></i>
                        </div>
                    </div>
                </div>
                {/* Streamify Details */}
                <div className={css.ColumnTwo}>
                    <div className={css.Liveweb}>
                        <h1>Streamify</h1>
                        <i class="uil uil-link" onClick={handleVisit}></i>
                    </div>
                    <div className={css.Features}>
                        <div className={css.Into}>
                            <span>Key Features and Capabilities</span>
                        </div>
                        <div className={css.Featur}>
                            <span>Integrated Real-Time Chat.</span>
                            <span>High-Quality Video Conferencing.</span>
                            <span>Scalable & Reliable Architecture.</span>
                        </div>
                    </div>
                    <div className={css.DevChips}>
                        <span>REACT JS</span>
                        <span>NODE JS</span>
                        <span>MONGO DB</span>
                        <span>EXPRESS JS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stream