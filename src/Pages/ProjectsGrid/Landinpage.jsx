import React, { useRef, useState, useEffect, useCallback } from 'react';
import css from './LandingPage.module.css';
import InlineProjects from './InlineProjects';
import projectOne from "../../Images/iphone15.jpg"
import projectTwo from "../../Images/eccomerce_app.jpg"
import projectThree from "../../Images/upskill.jpg"
import projectFour from "../../Images/spotify clone.jpg"
import projectFive from "../../Images/movie_app.webp"
import projectSix from "../../Images/flutter_comerce.jpg"
import projectSeven from "../../Images/biiding_app.jpg"
import projectEight from "../../Images/news_app.webp"
import projectNine from "../../Images/medical_app.jpg"
import About from '../About/About';
import { useIndex } from '../../IndexContext';

const itemsData = [
    {
        id: 1,
        image: projectOne,
        title: 'Apple Event',
        topic: 'https://apple-event-4c3ac.firebaseapp.com/',
        description: 'A modern and responsive UI website inspired by Apple\'s event presentation, designed to showcase the launch of the iPhone 15 Pro. This project was built using React.js for the frontend, focusing on clean visuals, smooth transitions, and engaging layouts to mimic Apple\'s signature product announcement style. It highlights features such as titanium build, A17 Pro chip, camera capabilities, and dynamic interactions—delivering a premium feel through React and CSS.',
    },
    {
        id: 2,
        image: projectEight,
        title: 'News App',
        topic: 'https://github.com/Jacob-bravo/flutter_news_app_riverpod',
        description: 'A responsive news application built with Flutter/Dart, fetching real-time news articles from a public API. Features include category filtering, search functionality, and dynamic content loading for a seamless user experience. Designed for mobile and desktop views, ensuring broad accessibility.',
    },
    {
        id: 3,
        image: projectSix,
        title: 'E-commerce App (Flutter)',
        topic: 'https://github.com/Jacob-bravo/eccomerce_app_flutter',
        description: 'A cross-platform e-commerce mobile application developed with Flutter/Dart. This app features product listings, shopping cart functionality, user authentication, and a smooth checkout process. Designed for a seamless and engaging mobile shopping experience on both iOS and Android.',
    },
    {
        id: 4,
        image: projectTwo,
        title: 'Synchronia',
        topic: 'https://synchronia-ke.firebaseapp.com/',
        description: 'Synchronia is a group buying platform that lets users team up to buy products at lower prices. It was built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and features shared carts, flexible delivery options, and mobile payments via the Daraja API—making shopping more social, affordable, and efficient.',
    },
    {
        id: 5,
        image: projectFive,
        title: 'Netflix Clone',
        topic: 'https://github.com/Jacob-bravo/flutter_netflix',
        description: 'A front-end clone of Netflix, built with Flutter/Dart, showcasing a dynamic movie Browse experience. It features fetching movie data from a public API, displaying trending content, and creating a visually appealing UI similar to the original platform. Designed for practice in responsive layouts and API integration.',
    },
    {
        id: 6,
        image: projectFour,
        title: 'Spotify Clone',
        topic: 'https://github.com/Jacob-bravo/spotify_clone',
        description: 'A simplified Spotify clone developed using Flutter/Dart, focusing on UI/UX aspects of a music streaming application. It includes features like song playback (simulated), album/artist display, and responsive design, mimicking the core visual elements and navigation of Spotify.',
    },
    {
        id: 7,
        image: projectSeven,
        title: 'The Starting Point',
        topic: 'https://nilob-5176d.web.app/',
        description: 'My initial foray into web development with React.js was a bidding application called Nolo Bids. This project served as my foundational step, allowing me to explore frontend development concepts by building a dynamic user interface. While simple in its early stages, it demonstrated my dedication and curiosity, ultimately sparking my transition into full-stack development.',
    },
    {
        id: 8,
        image: projectNine,
        title: 'Medical App',
        topic: 'https://github.com/Jacob-bravo/Medical-app',
        description: 'A conceptual medical application for appointment booking and patient management, developed with Flutter/Dart. Designed with a focus on user-friendly interfaces and secure data handling, aiming to streamline healthcare access. This is a design concept for a future project.',
    },
];
const timeRunning = 3000;

const LandingPage = () => {
    const { globalIndex, updateIndex } = useIndex();
    const [items, setItems] = useState(itemsData);
    const [animationClass, setAnimationClass] = useState('');

    const timeoutRef = useRef(null);

    const showSlider = useCallback((type) => {
        let newItems = [...items];

        if (type === 'next') {
            newItems.push(newItems.shift()); // Move first item to end
            setAnimationClass('next');
        } else if (type === 'prev') {
            newItems.unshift(newItems.pop()); // Move last item to beginning
            setAnimationClass('prev');
        }

        setItems(newItems);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setAnimationClass('');
        }, timeRunning);
    }, [items]); // Add items to dependency array

    const goToSlide = useCallback((targetId) => {
        const currentIndex = items.findIndex(item => item.id === targetId);

        if (currentIndex === -1 || currentIndex === 0) {
            // Already the active slide or not found
            return;
        }

        // Calculate how many shifts are needed to bring targetId to the front
        let newItems = [...items];
        let shifts = currentIndex; // Number of times to shift from front

        for (let i = 0; i < shifts; i++) {
            newItems.push(newItems.shift());
        }

        setItems(newItems);
        // You might want a specific animation class for direct jumps, e.g., 'jump'
        // For simplicity, we can use 'next' or 'prev' animation, or none.
        // Let's use 'next' for now, but clear it quicker or create a 'jump' animation in CSS.
        setAnimationClass('jump'); // Or 'next'/'prev' depending on visual preference

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setAnimationClass('');
        }, 500); // Shorter duration for direct jump animation, or `timeRunning`
    }, [items]); // Add items to dependency array

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);
    const redirectToTopic = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (

        globalIndex === 1 ? <div className={css.Inline}>
            <InlineProjects projectsData={itemsData} />
        </div> : globalIndex === 2 ? <About /> : <div className={`${css.frame} ${css.carousel} ${animationClass ? css[animationClass] : ''}`}>
            <div className={css.list}>
                {items.map((item, index) => (
                    <div className={`${css.item} ${index === 0 ? css.active : ''}`} key={item.id}>
                        <img src={item.image} alt="carousel" />
                        <div className={css.content}>
                            <div className={css.title}>{item.title}</div>
                            <div className={css.des}>{item.description}</div>
                            <div className={css.buttons}>
                                {
                                    item.id === 1 || item.id === 7 ? <button className={css.isApp} onClick={() => redirectToTopic(item.topic)}><i class="uil uil-arrow-up-right"></i></button> : <button onClick={() => redirectToTopic(item.topic)}><i class="uil uil-github"></i></button>
                                }


                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={css.thumbnail}>
                {items.map((item, index) => (
                    <div
                        className={`${css.item} ${index === 0 ? css.active : ''}`}
                        key={item.id}
                        onClick={() => goToSlide(item.id)} // Add onClick handler
                    >
                        <img src={item.image} alt="thumb" />
                        <div className={css.content}>
                            <div className={css.title}>{item.title}</div>
                            <div className={css.des}>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={css.arrows}>
                <button onClick={() => showSlider('prev')}><i className="uil uil-arrow-left"></i></button>
                <button onClick={() => showSlider('next')}><i className="uil uil-arrow-right"></i></button>
            </div>
        </div>
    )

};

export default LandingPage;