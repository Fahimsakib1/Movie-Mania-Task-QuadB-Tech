import React, { useEffect } from 'react';
import logo from '../../image/logo-no-bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



const Header = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])

    return (
        <Link to='/' title='Home Page'>
            <h1 className='text-center text-4xl bg-gradient-to-r from-gray-800 to-gray-900 py-2 text-white animation flex justify-center items-center gap-x-2' data-aos='flip-left'>
                <div className="avatar">
                    <div className=" w-20 rounded-xl">
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <span>Movie Mania</span>
            </h1>
        </Link>
    );
};

export default Header;