import React, { useState } from 'react';

export default (props) => {
    const [ display, setDisplay ] = useState('visible');
    
    setInterval(() => {
        const time = new Date().getSeconds();
        if (time % 2) {
            setDisplay('visible');
        } else {
            setDisplay('invisible');
        }
    }, 1000);

    return (
        <div className='h-100'>
            <p className='h3 greeting'>Hello world! <span className={display}>_</span></p>
            <p>I'm Amine Bensalem, <br/>
                a New York City based <br/>
                Software Engineer. <br/>
                <br />
                <span className='textLink' onClick={() => props.handleHover(true)}>
                    Want to know more?
                </span>
            </p>
        </div>
    )
}