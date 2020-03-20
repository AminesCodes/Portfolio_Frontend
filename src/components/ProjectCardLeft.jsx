import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as PlayIcon } from '../assets/nav_icons/play-circle-solid.svg';

export default function ProjectCardLeft(props) {
    return (
        <div className='card mb-3 bg-dark'>
            <div className='row no-gutters'>
                <div className='col-md-7 d-flex flex-column justify-content-between py-3 px-4'>
                    <div className='card-body'>
                        <h5 className='cardTitle text-center'>{props.project.title}</h5>
                        <p className='card-text textJustify'>{props.project.description}</p>
                    </div>
                    <div className='text-center mb-2'>
                        <span className='font-weight-bold'>Techs:</span> {props.project.techs}
                    </div>
                    <div className='d-flex justify-content-between mb-2'>
                        <a href={props.project.github} target='_blank' rel='noopener noreferrer'>
                            <GithubIcon className='smallIcon'/>
                        </a>
                        { props.project.live.length
                            ? <a href={props.project.live} target='_blank' rel='noopener noreferrer'>
                                <PlayIcon className='smallIcon mb-2'/>
                                </a>
                            : null
                        }
                    </div>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center p-4'>
                    <img src={props.project.image} className='card-img projectImage my-auto projectImage' alt={props.project.title} />
                </div>
            </div>
        </div>
    )
}