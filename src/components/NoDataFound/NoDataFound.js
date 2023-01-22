import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import noData from '../../image/NoData2a.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const NoDataFound = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])
    
    return (
        <div>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto -mt-8">
                <div className=" text-center">
                    <img className='w-full animation' src={noData} alt="" data-aos='fade-up'/>
                    <p className="text-xl font-semibold md:text-2xl text-gray-600 mb-4 -mt-8 animation" data-aos='fade-down'>Oopps.. No Data Found For This Movie</p>
                    <div>
                        <Link to='/'><button className='btn btn-primary px-8'>Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoDataFound;