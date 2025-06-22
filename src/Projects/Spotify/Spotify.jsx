import React from 'react'
import css from "./Spotify.module.css"
import Lottie from 'lottie-react'
import SportifyAnimation from "../../Animations/spotify.json"
const PLaying = "https://firebasestorage.googleapis.com/v0/b/synchronia-ke.appspot.com/o/spotify%20clone.jpg?alt=media&token=551d3cde-215e-4de7-a27c-78d9ef697f85"
const Spotify = () => {
    const handleVisit = () => {
        window.open("https://github.com/Jacob-bravo/spotify_clone", "_blank");
    };
    return (
        <div className={css.Frame}>
            <div className={css.Columns}>
                <div className={css.ColumnOne}>
                    <div className={css.Header}>
                        <Lottie className={css.animation} animationData={SportifyAnimation} loop={true} />
                        <div className={css.Headers}>
                            <span>PLAYING FROM PLAYLIST</span>
                            <span>Mirriam</span>
                        </div>
                    </div>
                    <div className={css.PlayingArea}>
                        <img src={PLaying} alt="playform" />
                        <div className={css.PlayMusicComponent}>
                            <div className={css.InitalRow}>
                                {/* Rotating Disk */}
                                <div className={css.Disk}>
                                    <img src={PLaying} alt="playingalbum" />
                                    <div></div>
                                </div>
                                {/* Muisc Info */}
                                <div className={css.AlbumDetails}>
                                    <span>FUEL TO THE FIRE</span>
                                    <span>Rationale</span>
                                </div>
                            </div>

                            {/* Play Button */}

                            <button><i class="uil uil-play"></i></button>

                        </div>
                    </div>
                </div>
                <div className={css.ColumnTwo}>
                    <div className={css.Container}>
                        <div className={css.Intro}>
                            <span>Spotify Clone</span>
                            <div className={css.NavigationRow}>
                                <div></div>
                                <div></div>
                                <i class="uil uil-github" onClick={handleVisit}></i>

                            </div>
                        </div>
                        <div className={css.Description}>
                            <span>A simplified Spotify clone developed
                                using <span className={css.TechStack}>Flutter/Dart</span>
                                focusing on
                                UI/UX aspects of a music streaming
                                application. It includes features
                                like song playback (simulated),
                                album/artist display, and responsive
                                design, mimicking the core visual
                                elements and navigation of Spotify</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotify