
import React from 'react';

import EachTask from '../eachTask/EachTask';

import './taskcontainer.scss';

const message = 'Hello, I Am Sarthak Gupta, I am a college going student, currently studying BCA from Jagan Institute of Management Studies, Rohini. Here I am praticing as well as showing my Web Development skills.';
  

export default function TaskContainer() {

    return (
        <div className='tasks__container'>
            {[1,2,3].map(e => (
                <EachTask message={message}/>
            ))}
        </div>
    );
}
