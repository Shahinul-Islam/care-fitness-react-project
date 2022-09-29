import React, { useState } from 'react';
import myImage from '../../my-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import User from '../User/User';

const Person = ({updatedTime}) => {
    
    let [breakTime, setBreakTime] = useState(0)
    const getBreakTime=(brTime)=>{
        setBreakTime(brTime)
    }
    return (
        <div className='w-3/4 mx-auto items-center'>
            <div className='flex ml-8'>
                <img src={myImage} className="h-14 w-14 mr-2 rounded-full"></img>
                <div>
                    <h4>Shahinul Islam</h4>
                    <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Shalgaria, Pabna</p>
                </div>
            </div>
            <User></User>
            <p className='mt-3'>Add a break</p>
            <div className='bg-gray-300  mt-2 p-2 rounded-md flex justify-evenly'>
                <span onClick={()=>getBreakTime(10)} className='rounded-full bg-slate-50 p-1'>10s</span>
                <span onClick={()=>getBreakTime(20)} className='rounded-full bg-slate-50 p-1'>20s</span>
                <span onClick={()=>getBreakTime(30)} className='rounded-full bg-slate-50 p-1'>30s</span>
                <span onClick={()=>getBreakTime(40)} className='rounded-full bg-slate-50 p-1'>40s</span>
                <span onClick={()=>getBreakTime(50)} className='rounded-full bg-slate-50 p-1'>50s</span>
            </div>
            <p className='my-2'>Exercise Details</p>
            
            <div className='bg-gray-300 mt-2 p-2 rounded-md flex justify-evenly'>
                <span>Exercise time</span><span className=''>{updatedTime}s</span>
            </div>
            
            <div className='bg-gray-300  mt-2 p-2 rounded-md flex justify-evenly'>
                <span>Break time</span><span className=''>{breakTime}s</span>
            </div>
            <button className='mt-3 bg-blue-500 px-3 text-white rounded-sm py-1'>Activity Completed</button>
        </div>
    );
};

export default Person;