import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactCardFlip from 'react-card-flip';

import HomeCardFront from './HomeCardFront';
import HomeCardBack from './HomeCardBack';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';

const appLogo = require('../assets/Portfolio_Icon.png');

export default function Home(props) { 
    const [ isCardFlipped, setIsCardFlipped ] = useState(false);

    const handleHover = (bool) => {
        setIsCardFlipped(bool);
    }

    const style = {
        background: `url(${require('../assets/problem-solving.jpg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }

    const h = props.sectionInnerDivH - (1 * props.navIconH)

    return(
        <section className='container-fluid p-3' id='home' style={style}>
            <div style={{height: props.navBarH}}></div>
            <div className='container-md appSectionDark mx-3-auto' style={{minHeight: `${h}px`}}>
                <div className='row' style={{minHeight: `${h}px`}}>
                    <div className='col-sm-5 my-auto text-center'>
                        <img className='d-block mx-auto w-75' src={appLogo} alt='App logo'/>
                    </div>

                    <div className='col-sm-7 my-auto text-center h-100'>
                        <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">
                            <HomeCardFront handleHover={handleHover} />
                            <HomeCardBack handleHover={handleHover} />
                        </ReactCardFlip>
                    </div>
                </div>
            </div>

            <AnchorLink className='d-block text-right' href='#skills'>
                <DownArrow className='navIcon'/>
            </AnchorLink>
        </section>
    )
}