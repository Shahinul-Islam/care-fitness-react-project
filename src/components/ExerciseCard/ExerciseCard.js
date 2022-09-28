import React from 'react';

const ExerciseCard = ({data}) => {
    const {picture, name} = data
    console.log(data)
    return (
        <div className='bg-slate-400 p-6 rounded'>
            <img src={picture} className="bg-center rounded w-full h-36"></img>
            <h5>{name}</h5>
        </div>
    );
};

export default ExerciseCard;