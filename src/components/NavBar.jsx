import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { useHistory, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useCostumeDivHight } from '../getDimensionHook';

export default function NavBar(props) {
    const history = useHistory();

    const [ divHight, targetRef ] = useCostumeDivHight();

    useEffect(() => {
        props.setNavBarHeight(divHight);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [divHight, props.heightUpdate]);


    return (
        <nav ref={targetRef} className='navbar navbar-expand-md navbar-dark bg-dark position-fixed w-100' id='navbar' style={{zIndex: '5'}}>
            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip id={`tooltip-top`}><strong>Home</strong></Tooltip>
                }
            >
                <AnchorLink onClick={() => history.push('/')} className='navbar-brand' href='/home'>
                    <img className='img-fluid logo' src={require('../assets/Portfolio_Icon.png')} alt='app logo'/>
                </AnchorLink>
            </OverlayTrigger>
            
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <AnchorLink onClick={() => history.push('/')} className='nav-link mb-0 h6' href='/home'>Home</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink onClick={() => history.push('/skills')} className='nav-link mb-0 h6' href='/skills'>Skills</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink onClick={() => history.push('/projects')} className='nav-link mb-0 h6' href='/projects'>Projects</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <a href='/docs/Resume.pdf' className='nav-link mb-0 h6' target='_blank' rel='noopener noreferrer'>Resume</a>
                        {/* <NavLink to='/resume' className='nav-link mb-0 h6' target='_blank' rel='noopener noreferrer'>Resume</NavLink> */}
                    </li>
                    <li className='nav-item'>
                        <AnchorLink onClick={() => history.push('/contact')} className='nav-link mb-0 h6' href='/contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}