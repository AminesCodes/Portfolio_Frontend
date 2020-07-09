import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';

import { ReactComponent as CssIcon } from '../assets/skills/css.svg';
import { ReactComponent as ExpressIcon } from '../assets/skills/express.svg';
import { ReactComponent as GitIcon } from '../assets/skills/git.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/html.svg';
import { ReactComponent as JsIcon } from '../assets/skills/js.svg';
import { ReactComponent as NodeIcon } from '../assets/skills/node.svg';
import { ReactComponent as PostgresIcon } from '../assets/skills/postgres.svg';
import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';
import { ReactComponent as BootstrapIcon } from '../assets/skills/bootstrap.svg';
import { ReactComponent as HerokuIcon } from '../assets/skills/heroku.svg';


export default function Skills(props) {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setTimeout(() => {
                setScreenWidth(window.innerWidth)   
            }, 1500);
        })
        return () => window.removeEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    })

    const style = {
        background: `url(${require('../assets/coding-laptop.jpeg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }

    const h = props.sectionInnerDivH - (2 * props.navIconH);

    const iconClassName = 
        screenWidth > 700
        ? 'col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'
        : 'col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'

    return(
        <section className='container-fluid px-3 pb-3' id='skills' style={style}>
            <div style={{height: props.navBarH}}></div>
            <div className='text-right'>
                <AnchorLink href='#home'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>

            <div className='container-lg appSectionLight mx-3-auto' style={{minHeight: `${h}px`}}>
                <div className='text-center h2 pt-3'>My Stack:</div>
                <div className='row justify-content-center mx-auto text-center'>
                    <div className={iconClassName}><ReactIcon /><span className='skillIconText'>React</span></div>
                    <div className={iconClassName}><JsIcon /><span className='skillIconText'>Javascript</span></div>
                    <div className={iconClassName}><NodeIcon /><span className='skillIconText'>Node</span></div>
                    <div className={iconClassName}><HtmlIcon /><span className='skillIconText'>HTML</span></div>
                    <div className={iconClassName}><CssIcon /><span className='skillIconText'>CSS</span></div>
                    <div className={iconClassName}><PostgresIcon /><span className='skillIconText'>PostgreSQL</span></div>
                    <div className={iconClassName}><ExpressIcon /><span className='skillIconText'>Express</span></div>
                    <div className={iconClassName}><BootstrapIcon /><span className='skillIconText'>Bootstrap</span></div>
                    <div className={iconClassName}><GitIcon /><span className='skillIconText'>Git</span></div>
                    <div className={iconClassName}><HerokuIcon /><span className='skillIconText'>Heroku</span></div>
                </div>
            </div>

            <div className='text-right'>
                <AnchorLink href='#projects'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}
