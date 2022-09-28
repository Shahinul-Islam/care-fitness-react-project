import React from 'react';

const User = () => {
    return (
        <div className='bg-gray-300  mt-8 p-2 rounded-md'>
            <div className='flex justify-evenly'>
                <span>60kg</span>
                <span>5.6</span>
                <span>30yrs</span>
            </div>
            <div  className='flex justify-evenly'> 
                
                <span>Weight</span>
                <span>Height</span>
                <span>age</span>
            </div>
            
        </div>
    );
};

export default User;