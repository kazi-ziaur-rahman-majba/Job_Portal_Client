import React from 'react';
import { motion } from 'motion/react';
import bannerImageOne from '../../assets/image/teamOne.jpg';
import bannerImageTwo from '../../assets/image/teamTwo.jpg';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[580px]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="flex-1">
                        <motion.img
                            animate={{ y: [100, 150, 100] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            src={bannerImageOne}
                            className='max-w-sm border-[#3C65F5] border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]'
                        />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 12, repeat: Infinity, delay: 5 }}
                            src={bannerImageTwo}
                            className='max-w-sm border-[#3C65F5] border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]'
                        />
                    </div>
                    <div className="flex-1">

                        <motion.h1 className="text-5xl font-bold">Remote Jobs For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;