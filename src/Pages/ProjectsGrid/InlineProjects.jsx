import React from 'react'
import css from "./Inline.module.css"

const InlineProjects = ({ projectsData }) => {
    const redirectToTopic = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };
    return (
        <div className={css.container}>
            {/* Column for projects */}
            <div className={css.column}>
                {
                    projectsData.map((item, index) => {
                        return <div className={css.item}>
                            <div className={css.title}>
                                <span>{item.title}</span>
                            </div>
                            <div className={css.justified}>
                                <span className={css.justifiedtext}>{item.description}</span>
                                {
                                    item.id === 1 || item.id === 7 ? <div className={css.technologies}>
                                        <span>React Js</span>
                                        <span>CSS</span>
                                        <span>Javascript</span>
                                        <span>Redux</span>
                                    </div> : <div className={css.technologies}>

                                        <span>Flutter</span>
                                        <span>Riverpod</span>
                                    </div>
                                }

                                <div className={css.buttons}>
                                    <div className={css.buttons}>
                                        {
                                            item.id === 1 || item.id === 7 ? <button className={css.isApp} onClick={() => redirectToTopic(item.topic)}><i class="uil uil-arrow-up-right"></i></button> : <button onClick={() => redirectToTopic(item.topic)}><i class="uil uil-github"></i></button>
                                        }


                                    </div>
                                </div>
                                <div className={css.seperaor}>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default InlineProjects
