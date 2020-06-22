import React, { useState, useLayoutEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import {resumeLink} from '../assets/projects/projects';

export default function NavBar(props) {  
    // eslint-disable-next-line  
    const [ dimension, setDimension ] = useState({});
    const targetRef = useRef();

    useLayoutEffect(() => {
        const dim = targetRef.current.getBoundingClientRect()
        setDimension(dim);
        props.getNavBarHeight(dim.height);
        // eslint-disable-next-line
    }, targetRef.current)

    return (
        <nav ref={targetRef} className='navbar navbar-expand-md navbar-dark bg-dark position-fixed w-100' id='navbar' style={{zIndex: '5'}}>
            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>Home</strong></Tooltip>
                }
            >
                <AnchorLink className='navbar-brand' href='#home'>
                    <img className='img-fluid logo' src={require('../assets/Portfolio_Icon.png')} alt='app logo'/>
                </AnchorLink>
            </OverlayTrigger>
            
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#home'>Home</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#skills'>Skills</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#projects'>Projects</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link mb-0 h6' href={resumeLink} target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}