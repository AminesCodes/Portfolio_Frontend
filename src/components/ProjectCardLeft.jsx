import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as PlayIcon } from '../assets/nav_icons/play-circle-solid.svg';


export default function ProjectCardLeft(props) {
    const { project } = props;
    return (
        <div className='card mb-3 bg-dark'>
            <div className='row no-gutters'>
                <div className='col-md-7 d-flex flex-column justify-content-between projectTextContainer'>
                    <div className='card-body'>
                        <h5 className='cardTitle text-center'>{project.title}</h5>
                        <p className='card-text text-justify'>{project.description}</p>
                    </div>
                    <div className='text-center mb-2'>
                        <span className='font-weight-bold'>Techs:</span> {project.techs}
                    </div>
                    <div className='d-flex justify-content-between mb-2'>
                        <a href={project.github} target='_blank' rel='noopener noreferrer'>
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-top`}><strong>Github</strong></Tooltip>
                                }
                            >
                                <GithubIcon className='smallIcon'/>
                            </OverlayTrigger>
                        </a>
                        { project.live.length
                            ? <a href={project.live} target='_blank' rel='noopener noreferrer'>
                                {/* <PlayIcon className='smallIcon mb-2'/> */}
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={
                                            <Tooltip id={`tooltip-top`}><strong>Live</strong></Tooltip>
                                        }
                                    >
                                        <PlayIcon className='smallIcon mb-2'/>
                                    </OverlayTrigger>
                                </a>
                            : null
                        }
                    </div>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center p-4'>
                    <img src={project.image} className='card-img projectImage my-auto' alt={project.title} onClick={() => props.selectProject(project)} />
                </div>
            </div>
        </div>
    )
}