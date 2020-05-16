import React, { useState, useLayoutEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as LinkedInIcon } from '../assets/nav_icons/linkedin-brands.svg';
import { ReactComponent as ContactIcon } from '../assets/nav_icons/envelope-open-text-solid.svg';
import { ReactComponent as DownloadIcon } from '../assets/nav_icons/file-download-solid.svg';


export default function Footer(props) {
    const [ dimension, setDimension ] = useState({});
    const targetRef = useRef();

    useLayoutEffect(() => {
        const dim = targetRef.current.getBoundingClientRect()
        setDimension(dim);
        props.getFooterHeight(dim.height);
    }, targetRef.current)
    
    // converting a google doc link to display s PDF: replace “edit?usp=sharing” with “export?format=pdf” instead for downloads.
    const resumeLink = 'https://docs.google.com/document/d/1A75G5Urpa5YaF1UQyGV8d40DbU5yuJeeOCxUZKT-SGM/export?format=pdf';

    return (
        <div ref={targetRef} className='fixed-bottom bg-dark d-flex justify-content-center' style={{height: '5vh'}}>
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>Github</strong></Tooltip>
                }
            >
                <a href='https://github.com/AminesCodes' target='_blank' rel='noopener noreferrer'>
                    <GithubIcon className='smallIcon'/>
                </a>
            </OverlayTrigger>
            
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>LinkedIn</strong></Tooltip>
                }
            >
                <a href='https://www.linkedin.com/in/amine-bensalem' target='_blank' rel='noopener noreferrer'>
                    <LinkedInIcon className='smallIcon'/>
                </a>
            </OverlayTrigger>

            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>Contact me</strong></Tooltip>
                }
            >
                <AnchorLink href='#contact'>
                    <ContactIcon className='smallIcon'/>
                </AnchorLink>
            </OverlayTrigger>

            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>Download Resume</strong></Tooltip>
                }
            >
                <a href={resumeLink}>
                    <DownloadIcon className='smallIcon'/>
                </a>
            </OverlayTrigger>
        </div>
    )
}