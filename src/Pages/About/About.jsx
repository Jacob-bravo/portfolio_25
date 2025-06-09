import React from 'react';
import { motion } from 'framer-motion';
import css from './About.module.css';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  },
});

const About = () => {
  return (
    <div className={css.container}>
      <motion.h1
        className={css.heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
      >
        About Me
      </motion.h1>

      <motion.p
        className={css.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.2)}
      >
        Music and swimming are more than hobbies for me  they’re part of how I connect with the world and recharge my mind. Whether I’m diving into a pool or getting lost in a rhythm, both give me peace, discipline, and creative clarity. I appreciate how music speaks when words fail, and how swimming teaches flow, focus, and endurance  values I carry into every area of my life.
      </motion.p>

      <motion.p
        className={css.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.4)}
      >
        I’m deeply drawn to cultures  how people live, speak, connect, and celebrate. I believe thriving in any culture takes open-mindedness, adaptability, and a genuine interest in learning from others. I enjoy immersing myself in diverse communities and drawing inspiration from their values, art, and way of life. Culture, to me, is more than identity  it’s how we build bridges and move forward together.
      </motion.p>

      <motion.p
        className={css.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.6)}
      >
        I love learning new things  from languages to life philosophies. Curiosity keeps me growing and exploring. I also enjoy helping others learn  whether it’s coaching someone in tech or simply sharing what I’ve experienced. My relationship with God keeps me grounded, especially when things get chaotic.
      </motion.p>
    </div>
  );
};

export default About;
