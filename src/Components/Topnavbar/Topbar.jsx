import { React, useRef, useEffect, useState } from 'react'
import css from "./Topbar.module.css";
import Roundedbtn from '../RoundedButton/Roundedbtn';
import NightTime from "../../Svgs/bedtime.svg"
import DayTime from "../../Svgs/day_time.svg"
import Lottie from 'lottie-react';
import audioBeatAnimation from "../../Animations/audio-beat.json"
import muteAnimation from "../../Animations/no_sound.json"
import myMusicTrack from '../../Media/mansworld.mp3';

const Topbar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [isDaytime, setIsDaytime] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const nairobiTimeFormatted = now.toLocaleTimeString('en-US', {
                timeZone: 'Africa/Nairobi',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
            setCurrentTime(nairobiTimeFormatted);
            const nairobiHour24 = parseInt(now.toLocaleTimeString('en-US', {
                timeZone: 'Africa/Nairobi',
                hour: '2-digit',
                hour12: false
            }), 10);

            setIsDaytime(nairobiHour24 >= 6 && nairobiHour24 < 18);
        };


        updateTime();
        const intervalId = setInterval(updateTime, 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    const playingLottieRef = useRef(null);
    const mutedLottieRef = useRef(null);
    const audioRef = useRef(new Audio(myMusicTrack));
    useEffect(() => {
        const audio = audioRef.current;

        const handleAudioEnded = () => {
            if (isSoundOn) {
                audio.currentTime = 11;
                audio.play().catch(e => console.error("Audio loop play failed:", e));
            }
        };
        audio.addEventListener('ended', handleAudioEnded);

        if (isSoundOn) {
            audio.currentTime = 11;
            audio.play().catch(error => {
                // Catch potential errors, e.g., browser preventing autoplay without user interaction
                console.error("Audio play failed:", error);
                // Optionally, revert state if play fails (e.g., if autoplay is blocked)
                setIsSoundOn(false);
            });
            if (playingLottieRef.current) {
                playingLottieRef.current.play();
            }
            if (mutedLottieRef.current) {
                mutedLottieRef.current.stop();
            }
        } else {
            audio.pause();
            if (playingLottieRef.current) {
                playingLottieRef.current.stop();
            }

            if (mutedLottieRef.current) {
                mutedLottieRef.current.play();
            }
        }
        return () => {
            audio.pause();
            audio.currentTime = 0;
            if (playingLottieRef.current) {
                playingLottieRef.current.stop();
            }
            if (mutedLottieRef.current) {
                mutedLottieRef.current.stop();
            }
        };
    }, [isSoundOn]);

    const toggleSound = () => {
        setIsSoundOn(prev => !prev);
    };


    return (
        <div className={css.container}>
            {/* Signature */}
            <span class="material-symbols-outlined">
                signature
            </span>
            {/* Otherinfos */}
            <div className={css.soundtobutton}>
                {/* Play music switch */}
                <div className={css.soundSwitch} onClick={toggleSound}>
                    {/* Animation of playing music */}
                    <div style={{ width: 50, height: 50, position: 'relative', overflow: 'hidden' }}>
                        <Lottie
                            lottieRef={mutedLottieRef}
                            animationData={muteAnimation}
                            loop={true}
                            autoplay={false}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: !isSoundOn ? 1 : 0,
                                pointerEvents: !isSoundOn ? 'auto' : 'none',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        />
                        <Lottie
                            lottieRef={playingLottieRef}
                            animationData={audioBeatAnimation}
                            loop={true}
                            autoplay={false}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: isSoundOn ? 1 : 0,
                                pointerEvents: isSoundOn ? 'auto' : 'none',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        />
                    </div>
                    <span>SOUND[{isSoundOn ? 'ON' : 'OFF'}]</span>
                </div>
                {/* Brief Intro */}
                <div className={css.BriefIntro}>
                    <span>For me, development is about more than function; it's about purposeful experience. Concepts into emotional, visual narratives.</span>
                </div>
                {/* Location and Time */}
                <div className={css.LocationAndTime}>
                    {/* Location */}
                    <div className={css.location}>
                        {
                            isDaytime ? <img src={DayTime} alt="Location" /> : <img src={NightTime} alt="Location" />
                        }
                        <div className={css.locationandAnimation}>
                            <span>Nairobi, KE</span>
                            <div></div>
                        </div>
                    </div>
                    {/* Active Time */}
                    <div className={css.activeTime}>
                        <span>{currentTime} UTC +3</span>
                    </div>

                    <span></span>
                </div>
                {/* Lest talk Button */}
                <Roundedbtn text={'Let\'s talk'} btnType={0} itemIndex={0} />
            </div>
        </div>
    )
}

export default Topbar
