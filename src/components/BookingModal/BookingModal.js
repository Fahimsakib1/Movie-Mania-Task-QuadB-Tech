import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookingModal = ({ bookShow, setBookShow }) => {

    const { id, language, name, rating, summary, url, image, premiered,
        genres, averageRuntime, status } = bookShow;



    const handleBookingShow = (event) => {
        event.preventDefault();

        let formData;
        const dataFromLS = localStorage.getItem('userDetails');

        const email = event.target.email.value;
        const mobile = event.target.mobile.value;
        const address = event.target.address.value;
        const movie = event.target.movieName.value;

        const userDetails = {
            email: email,
            mobile: mobile,
            address: address,
            movie: movie
        }

        if(dataFromLS === null){
            formData = [];
        }
        else{
            formData = JSON.parse(dataFromLS);
        }

        formData.push(userDetails)
        localStorage.setItem('userDetails', JSON.stringify(formData));

        Swal.fire(
            'Congratulations!',
            `You Have booked Movie ${name}`,
            'success'
        )
        setBookShow(null)
    }






    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold text-center">Booking For Show <span className='font-bold text-2xl text-blue-700'>{name}</span></h3>

                    <form className='mt-2' onSubmit={handleBookingShow}>

                        <label className="label">
                            <span className="label-text font-semibold">Movie Name</span>
                        </label>
                        <input
                            defaultValue={name}
                            readOnly
                            type="email" name='movieName' className="input input-bordered w-full mb-1 font-semibold text-gray-500 text-md"
                        />

                        <div className='flex justify-evenly items-center gap-x-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Language</span>
                                </label>
                                <input type="text" name='language' className="input input-bordered w-full  text-gray-500 font-semibold  text-md" defaultValue={language} readOnly />

                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Genre</span>
                                </label>
                                <input
                                    defaultValue={genres}
                                    readOnly
                                    type="email" name='genre' placeholder="Email Address" className="input input-bordered w-full mb-1 font-semibold text-gray-500  text-md"
                                />
                            </div>
                        </div>


                        <div className='flex justify-around items-center gap-x-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Runtime (Minutes)</span>
                                </label>
                                <input type="text" name='runtime' className="input input-bordered w-full font-semibold text-gray-500  text-md" defaultValue={averageRuntime} readOnly />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Status</span>
                                </label>
                                <input type="text" name='status' className={`input input-bordered w-full font-semibold text-white text-center text-md ${status === 'Running' ? 'bg-green-700' : 'bg-rose-800'}`}
                                    defaultValue={status}

                                />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' className='input input-bordered w-full font-semibold text-md' placeholder='Enter Your Email' required />
                        </div>


                        <div className='flex justify-around items-center gap-x-4'>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Mobile</span>
                                </label>
                                <input type="text" name='mobile' className='input input-bordered w-full font-semibold text-md' placeholder='Mobile Number'/>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Address</span>
                                </label>
                                <input type="text" name='address' className="input input-bordered w-full font-semibold  text-md" placeholder='Your Address' />
                            </div>

                        </div>


                        <input type="submit" value="Confirm Booking" className='w-full bg-gradient-to-r from-violet-900 to-rose-900  text-white text-xl py-2 rounded-md mt-8 mb-2'
                        />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;