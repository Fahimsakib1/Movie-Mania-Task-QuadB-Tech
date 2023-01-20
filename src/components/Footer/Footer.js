import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter';




const Footer = () => {
    return (
        <div className=' mt-64  bg-gray-900 text-white'>
            <footer className="pb-6 pt-8">
                <h1 className='text-lg text-center'>Copyright © 2023 | All Rights Reserved By <br></br> <span className='text-3xl font-bold'>

                    <Typewriter
                        words={[
                            'Fahim Faysal'
                        ]}
                        loop={500}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                </span>
                </h1>

                <div className="divider w-3/4 mx-auto">Never Underestimate Yourself. You Are The Best</div>

                <div className='flex justify-center items-center gap-x-4 -mt-2'>

                    <div className=''>
                        <a href='https://github.com/Fahimsakib1?tab=repositories' target='blank' className='tooltip' data-tip='GitHub'>
                            <BsGithub className='text-3xl my-2 bg-black hover:text-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' ></BsGithub>
                        </a>
                    </div>

                    <div className=''>
                        <a href='https://www.linkedin.com/in/fahim-faysal/' target='blank' className='tooltip' data-tip='LinkedIn'>
                            <BsLinkedin className='text-3xl my-2 text-blue-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' ></BsLinkedin>
                        </a>
                    </div>

                    <div className=' '>
                        <a href='https://www.instagram.com/i_fahiim/' target='blank' className='tooltip' data-tip='Instagram'>
                            <BsInstagram className='text-3xl my-2 text-rose-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' ></BsInstagram>
                        </a>
                    </div>

                    <div className=''>
                        <a href='https://www.facebook.com/fahim.sakib.5' target='blank' className='tooltip' data-tip='Facebook'>
                            <BsFacebook className='text-3xl my-2 text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' ></BsFacebook>
                        </a>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;