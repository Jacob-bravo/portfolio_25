import React from 'react'
import css from "./Netflix.module.css"
import { Movies } from '../../data'


const Netflix = () => {
    const handleVisit = () => {
        window.open("https://github.com/Jacob-bravo/flutter_netflix", "_blank");
    };
    return (
        <div className={css.Frame}>
            <div className={css.Columns}>
                <div className={css.ColumnOne}>
                    <i class="uil uil-github" onClick={handleVisit}></i>
                    <div className={css.Description}>
                        <h1>NETFLIX CLONE</h1>
                        <span>A front-end clone of Netflix, built with Flutter/Dart, showcasing a dynamic movie Browse experience. It features fetching movie data from a public API, displaying trending content, and creating a visually appealing UI similar to the original platform. Designed for practice in responsive layouts and API integration.</span>
                        <div className={css.DevChips}>
                            <span>FLUTTER</span>
                            <span>NODE JS</span>
                            <span>EXPRESS JS</span>
                        </div>
                    </div>
                </div>
                {/* Movies Art */}
                <div className={css.ColumnTwo}>
                    {
                        Movies.map((movie, index) => {
                            return (
                                <div className={css.CardMovie} key={index}>
                                    <img src={movie} alt={index} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Netflix