import '../Components/Hero.css'
import React, { useState, useEffect} from 'react';
import { motion } from "motion/react"

const Hero = () => {
    const [animate,setAnimate] = useState(false);
    
    useEffect(() => {
        // Start the animation by setting 'animate' to run true when the component mounts.
        setAnimate(true);
    }, []);// empty dependency array to run only once
    return( 
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
        <div className="flex items-center justify-center min-w-screen">
            <div className=" w-full lg:w-1/2">
              <div className=" flex flex-col items-center ">
                <h1
                 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Benjamin
                    </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-35  pl-8 text-center typing w-screen">Full Stack Developer.</span>
                <p className="my-2 max-2-xl py-6 font-light tracking-tighter text-center ">I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
                
              </div>
            </div>
        </div>
    </div>
    );
};
export default Hero;