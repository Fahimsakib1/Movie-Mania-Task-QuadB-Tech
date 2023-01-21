import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Spinner from '../Spinner/Spinner';
import AllShowsCard from './AllShowsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../Hooks/useTitle';



const Home = () => {

    useTitle('All Movies');

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])


    const { data: shows = [], isLoading } = useQuery({
        queryKey: ['shows'],
        queryFn: async () => {
            const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await res.json();
            console.log(data)
            return data;
        }

    })


    if (isLoading) {
        return <div>
            {/* <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div> */}
            <Spinner></Spinner>
        </div>
    }


    return (
        <div className=''>

            <div className='lg:px-0  mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-x-6 md:gap-x-10 sm:gap-x-8 gap-y-10 mt-12 mb-24'>
                    {
                        shows.map((showDetails, index) => <AllShowsCard showDetails={showDetails} key={index}></AllShowsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;