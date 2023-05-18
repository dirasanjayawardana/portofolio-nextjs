'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[18px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        My name is<span className='font-extrabold text-white'> Dira Sanjaya Wardana</span>. I am graduated in electrical engineering with a concentration in Electrical Power Engineering.<span className='font-extrabold text-white'> I am proficiant with</span> power electronics, energy conversion, microcontroller programing, and electronic system design.<span className='font-extrabold text-white'> I never limiting</span> my self to learn other things, such as telecomunications, programing, data processing, and controlling.<span className='font-extrabold text-white'> I have good</span> leadership, great time management and excited with challenging job.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.4, 1)}
        src='/arrow-down.svg'
        alt="arrow"
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
