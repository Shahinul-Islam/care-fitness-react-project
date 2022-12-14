import React from 'react';

const ExerciseCard = ({data,activitiesTime}) => {
    const {picture, name, age, time} = data
    // console.log(data,activitiesTime)
    return (
        <div className='bg-slate-200 p-6 rounded'>
            <img src={picture} className="bg-center rounded w-full h-36"></img>
            <h5 className='mt-2 text-left'>{name}</h5>
            <p className='text-left'>Age:{age}</p>
            <p className='text-left'>Time Required: {time}s</p>
            <button onClick={()=>activitiesTime(time)} className='mx-auto bg-blue-500 px-3 py-1 text-white mt-3 rounded-sm'>Add to list</button>
        </div>
    );
};

export default ExerciseCard;