import React from 'react';

export default (props) => {
    return (
        <div className='h-100 text-justify p-3' 
            onMouseLeave={() => props.handleHover(false)} 
            onClick={() => props.handleHover(false)}
        >
            <p>For as long as I can remember, I have always been curious about how things work passionate about technology.</p>
            <p>This curiosity and passion led me to a Bachelor of science in automation engineering technology.</p>  
            <p>Seeking new challenges after moving to New York City,
                I enrolled into an intensive and highly selective full-stack web development fellowship program at Pursuit 
                where I gained valuable technical and professional skills, through project based learning and team work.
            </p>
            <p>When I'm not in front of my computer, I'm even spending time with my family and taking care of my son Zakarya
                or fixing things left and right (yes, I'm a handy man).
                <br />
                I also enjoy cycling even if it's only once in a while with all my responsibilities.
            </p>
        </div>
    )
}