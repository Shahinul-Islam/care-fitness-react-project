import React from 'react';
import myImage from '../../my-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import User from '../User/User';

const Person = () => {
    return (
        <div >
            <div className='flex'>
                <img src={myImage} className="h-14 w-14 mr-2 rounded-full"></img>
                <div>
                    <h4>Shahinul Islam</h4>
                    <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Shalgaria, Pabna</p>
                </div>
            </div>
            <User></User>
        </div>
    );
};

export default Person;