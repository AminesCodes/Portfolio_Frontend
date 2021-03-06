import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ProjectCardRight from './ProjectCardRight';
import ProjectCardLeft from './ProjectCardLeft';
import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';
import { ReactComponent as CloseIcon } from '../assets/nav_icons/times-circle-solid.svg';
import { projects } from '../assets/projects/projects';


export default function Projects(props) {
    const [ targetProject, setTargetProject ] = useState(null);

    useEffect(() => {
        const handleEscapeBtn = (e) => {
            if (e.key === 'Escape') {
                setTargetProject(null);
            }
        }

        const handleClick = (e) => {
            if (e.target.className !== 'projectImageGif' && e.target.className !== 'card-img projectImage my-auto') {
                setTargetProject(null);
            }
        }

        window.addEventListener('keydown', handleEscapeBtn);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleEscapeBtn);
            window.removeEventListener('click', handleClick);
        }
    });


    const style = {
        background: `url(${require('../assets/coding-screen.png')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    const h = props.sectionInnerDivH - (2 * props.navIconH);
    
    return(
        <section className='container-fluid pb-3' id='projects' style={style}>
            <div style={{height: props.navBarH}}></div>
            <div className='text-right' >
                <AnchorLink href='#skills'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            
            <div className='container-lg appSectionDark' style={{minHeight: `${h}px`}}>
                <div className='text-center h2 cardTitle'>Some of my projects</div>
                { props.screenWidth < 768
                    ? projects.map((project) => <ProjectCardRight key={project.title} project={project} selectProject={setTargetProject} />)
                    : projects.map((project, i) => {
                        if (i % 2) {
                            return <ProjectCardRight key={project.title} project={project} selectProject={setTargetProject} />
                        }
                        return <ProjectCardLeft key={project.title} project={project} selectProject={setTargetProject} />
                        })
                }
            </div>

            {
                targetProject
                ?   <div className='projectImageGifContainer' style={{height: `${props.sectionInnerDivH}px`, top: `${props.navBarH}px`}}>
                        {/* <div style={{height: props.navBarH}}></div> */}
                        <div className='text-right closeBtnContainer'>
                            <CloseIcon className='closeNavIcon' onClick={() => setTargetProject(null)}/>
                        </div>
                        <img className='projectImageGif' src={targetProject.gifImage || targetProject.image} alt={targetProject.title} style={{maxHeight: `${props.sectionInnerDivH}px`}}/>
                    </div>
                :   null
            }

            <div className='text-right'>
                <AnchorLink href='#contact'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}