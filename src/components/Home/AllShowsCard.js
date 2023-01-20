import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllShowsCard = ({ showDetails }) => {

    const { id, image, genres, language, name, rating, externals } = showDetails.show;

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])




    return (
        <div className='mx-auto '>
            <div className="card bg-base-100 shadow-2xl px-1 rounded-xl animation" data-aos="zoom-in">
                <figure><img src={image.original} className='w-96 h-56 rounded-xl transition ease-out hover:ease-in delay-350 hover:scale-110 duration-300 ' alt="Movies" /></figure>
                <div className=" mt-2 px-2">
                    <h2 className="card-title text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-pink-900">{name}</h2>
                    <h2 className="text-black font-semibold">Genre: {genres[0]} {genres[1]}</h2>
                    <h2 className="text-black font-semibold">Language: {language}</h2>
                    <Link to={`/showDetails/${externals.thetvdb}`}>
                        <button className="text-xl text-center bg-gradient-to-r from-violet-900 to-pink-900  text-white py-2  w-full mt-3 rounded-lg  mb-4 transition ease-in-out delay-150 hover:scale-105 duration-300">Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AllShowsCard;