import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center mt-2 gap-x-1 mt-72'>
            <h1 className='text-6xl font-bold'>L</h1>
            <span className='h-16 w-16 border-8 border-dashed rounded-full animate-spin border-blue-600 mt-1'></span>
            <h1 className='text-6xl font-bold'>ading</h1>
        </div>
    );
};

export default Spinner;