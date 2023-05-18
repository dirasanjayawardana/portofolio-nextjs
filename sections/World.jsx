'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Testimonials" textStyles="text-center" />
      <TitleText
        title={(
          <>Track record of my work experience
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20">
          <div className="w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
        </div>

        <div className="absolute top-10 left-20 flex items-center gap-5">
          <div className="w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className='text-white bg-slate-800 py-3 px-6 rounded-2xl bg-opacity-70'>
            <h3 className='font-bold text-xl mb-1'>PT PLN (Persero)</h3>
            <hr />
            <hr />
            <p className='mt-2 text-justify'>Internship at PLN Natar Substation <br/> Learn about the distribution of electricity <br/> and maintenance of substation equipment</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-[45%]">
          <div className="w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;