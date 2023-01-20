import React from 'react';
import Swal from 'sweetalert2';

const BookingModal = ({ bookShow, setBookShow }) => {

    const { id, language, name, rating, summary, url, image, premiered,
        genres, averageRuntime, status } = bookShow;

    const handleBookingShow = (event) => {
        event.preventDefault();

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
                            type="email" name='email' className="input input-bordered w-full mb-1 font-semibold text-gray-500 text-md"
                        />

                        <div className='flex justify-evenly items-center gap-x-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Language</span>
                                </label>
                                <input type="text" name='phone' className="input input-bordered w-full  text-gray-500 font-semibold  text-md" defaultValue={language} readOnly />

                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Genre</span>
                                </label>
                                <input
                                    defaultValue={genres}
                                    readOnly
                                    type="email" name='email' placeholder="Email Address" className="input input-bordered w-full mb-1 font-semibold text-gray-500  text-md"
                                />
                            </div>
                        </div>


                        <div className='flex justify-around items-center gap-x-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Runtime (Minutes)</span>
                                </label>
                                <input type="text" name='location' className="input input-bordered w-full font-semibold text-gray-500  text-md" defaultValue={averageRuntime} readOnly />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Status</span>
                                </label>
                                <input type="text" name='location' className={`input input-bordered w-full font-semibold text-white text-center text-md ${status === 'Running' ? 'bg-green-700' : 'bg-rose-800'}`}
                                    defaultValue={status}

                                />
                            </div>
                        </div>


                        <input type="submit" value="Confirm Booking" className='w-full bg-gradient-to-r from-violet-900 to-rose-900   text-white text-xl py-2 rounded-md mt-8 mb-2'
                        />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;