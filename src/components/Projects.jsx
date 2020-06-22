import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CSSTransitionGroup } from 'react-transition-group';

import ProjectCardRight from './ProjectCardRight';
import ProjectCardLeft from './ProjectCardLeft';
import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';
import { ReactComponent as CloseIcon } from '../assets/nav_icons/times-circle-solid.svg';
import { projects } from '../assets/projects/projects';


export default function Projects(props) {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    const [ targetProject, setTargetProject ] = useState(null);
    
    const handleResize = () => {
        const width = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;

        const height = window.innerHeight 
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        setScreenWidth(width);
        props.getScreenHeight(height);
        setTimeout(() => {}, 1000);
    }

    useEffect(() => {
        const height = window.innerHeight 
        || document.documentElement.clientHeight
        || document.body.clientHeight;
        
        props.getScreenHeight(height);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.addEventListener('resize', handleResize);
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
                <AnchorLink className='d-block text-right' href='#skills'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            
            <div className='container-lg appSectionDark' style={{minHeight: `${h}px`}}>
                <div className='text-center h2 cardTitle'>Some of my projects</div>
                { screenWidth < 768
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
                ?   <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={5000}
                        transitionLeaveTimeout={3000}
                    >
                        <div className='projectImageGifContainer'>
                            <div className='text-right closeBtnContainer'>
                                <CloseIcon className='closeNavIcon' onClick={() => setTargetProject(null)}/>
                            </div>
                            {/* <img className='projectImageGif' src={targetProject.gifPic} alt={targetProject.title} /> */}
                            <img className='projectImageGif' src={targetProject.image} alt={targetProject.title} 
                            />
                        </div>
                    </CSSTransitionGroup>
                :   null
            }

            <AnchorLink className='d-block text-right' href='#contact'>
                <DownArrow className='navIcon'/>
            </AnchorLink>
        </section>
    )
}