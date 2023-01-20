import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingModal from '../BookingModal/BookingModal';
import { BsStarFill } from 'react-icons/bs';


const ShowDetails = () => {

    const showDetails = useLoaderData();
    const { id, language, name, rating, summary, image, averageRuntime, status, genres
    } = showDetails

    const [bookShow, setBookShow] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])



    return (
        <div>
            <div className='flex justify-center items-center gap-x-8 mt-8 mb-12 lg:flex-row md:flex-col sm:flex-col flex-col lg:mt-28 md:mt-20'>
                <figure><img src={image.original} className=' w-[350px] sm:w-[350px] md:w-[700px] lg:w-[700px] h-[470px]  rounded-xl mb-6 animation' data-aos="zoom-in" alt="Show" /></figure>

                <div className=' md:w-[590px] sm:w-[330px] w-[330px]'>
                    <h2 className="text-center text-3xl mb-2  py-1 font-semibold rounded-lg font-serif  uppercase tracking-wide">{name}</h2>

                    <div className='flex justify-evenly items-center my-4 gap-x-3 md:flex-row sm:flex-col flex-col'>

                        <div className={`${status === 'Running' ? 'bg-green-700' : 'bg-red-700'} px-10 py-2 text-white rounded-lg text-lg font-bold tracking-wide animation lg:mb-0 mb-2`} data-aos="fade-left">
                            {status}
                        </div>

                        <div className='px-10 py-2 bg-gradient-to-r from-violet-900 to-pink-900 text-white rounded-lg text-lg font-bold tracking-wide animation lg:mb-0 mb-2' data-aos="fade-left">
                            {genres}
                        </div>

                        <div>
                            {
                                rating.average &&
                                <div className='flex justify-center items-center text-xl bg-blue-900 px-10 py-2  rounded-lg text-white animation lg:mb-0 mb-2' data-aos="fade-right">
                                    <BsStarFill className=' text-3xl mr-2 text-amber-500'>
                                    </BsStarFill>
                                    <span className=' font-bold'>{rating.average}</span>
                                </div>
                            }
                        </div>

                    </div>

                    <h2 className="text-justify text-lg animation font-semibold" data-aos="fade-down">{summary}</h2>

                    <label onClick={() => setBookShow(showDetails)} htmlFor="booking-modal" className="btn btn-primary  text-white mt-4 w-full py-2 text-xl rounded-lg normal-case">Book Show</label>
                </div>
            </div>
            {
                bookShow &&
                <BookingModal bookShow={bookShow} setBookShow={setBookShow}></BookingModal>
            }
        </div>
    );
};

export default ShowDetails;