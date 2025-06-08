import React, { useRef, useState } from 'react';
import css from './LandingPage.module.css';

const itemsData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1749117631945-cbb1ff99c03d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        title: 'Design Slider',
        topic: 'AeroPhone',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, in.',
        usedTime: '6 Hours',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1749254080180-f9da0512b5c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
        title: 'Design Slider',
        topic: 'AeroPhone',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, in.',
        usedTime: '6 Hours',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1749221836725-494abefcd2a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Design Slider',
        topic: 'AeroPhone',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, in.',
        usedTime: '6 Hours',
    }
];

const LandingPage = () => {
    const [items, setItems] = useState(itemsData);
    const [showDetail, setShowDetail] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setItems(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setItems(prev => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, prev.length - 1);
            return [last, ...rest];
        });
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const handleSeeMore = () => setShowDetail(true);
    const handleBack = () => setShowDetail(false);

    return (
        <div className={`${css.carousel} ${showDetail ? css.showDetail : ''}`} onClick={handlePrev}>
            <div className={css.list}>
                {items.map((item, index) => (
                    <div className={css.item} key={item.id}>
                        <img src={item.image} alt="project" />
                        <div className={css.introduce}>
                            <div className={css.title}>{item.title}</div>
                            <div className={css.topic}>{item.topic}</div>
                            <div className={css.des}>{item.des}</div>
                            <button className={css.seeMore} onClick={handleSeeMore}>SEE MORE</button>
                        </div>
                        <div className={css.detail}>
                            <div className={css.title}>{item.title}</div>
                            <div className={css.des}>{item.des}</div>
                            <div className={css.specifications}>
                                <div>
                                    <p>Used Time</p>
                                    <p>{item.usedTime}</p>
                                </div>
                                <div>
                                    <p>Used Time</p>
                                    <p>{item.usedTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <div className={css.arrows}>
                    <button onClick={handlePrev}><i className="uil uil-arrow-left"></i></button>
                    <button onClick={handleNext}><i className="uil uil-arrow-right"></i></button>
                    <button onClick={handleBack}>See All</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
