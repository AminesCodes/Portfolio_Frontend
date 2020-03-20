import React from 'react';

export default (props) => {
    return (
        <div className='h-100 textJustify p-3' 
            onMouseLeave={() => props.handleHover(false)} 
            onClick={() => props.handleHover(false)}
        >
            <p>For as long as I can remember, I have been always curious about how things work and having a passion for Tech.</p>
            <p>This curiosity and passion led me to a Bachelor of science in automation engineering technology.</p>  
            <p>Seeking new challenges and a career shift after moving to New York City, 
                while keeping the problem solving aspect that I enjoy, 
                I enrolled into an intensive and highly selective full-stack web development fellowship program at Pursuit 
                where I gained the necessary technical and professional skills through project based learning and team work
                to be a successful software engineer.
            </p>
        </div>
    )
}