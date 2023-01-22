import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../image/error-no-bg.png';



const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 text-black mt-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto  mb-56">
                    <div className=" text-center">
                        <div className='flex justify-center gap-x-10 flex-col sm:flex-col md:flex-row'>
                            <img className='' src={errorImage} alt="" />
                            <div className='flex justify-center my-auto'>
                                <p className='mb-8 font-extrabold text-9xl text-red-600'>4</p>
                                <div className="h-20 w-20 border-8 border-dashed rounded-full animate-spin border-red-600 my-auto mx-2"></div>
                                <p className='mb-8 font-extrabold text-9xl text-red-600'>4</p>
                            </div>
                        </div>
                        <p className="text-xl font-semibold md:text-2xl text-red-600 mb-4">This Page is Not Available In This Website.</p>
                        <div>
                            <Link to='/'><button className='btn btn-primary'>Back to Homepage</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;