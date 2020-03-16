import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/nav.scss';

const initialState = { 
    isToggled: false,
    show: false
}

function reducer(state, action) {
    switch(action.type) {
        case 'toggle':
            return { isToggled: !state.isToggled };
        case 'open': 
            return { show: true };
        case 'close': 
            return { show: false, isToggled: false };
        case 'mouseLeave': 
            return { show: false };
        case 'mouseEnter': 
            return { show: true, isToggled: true };
        default: 
            throw new Error();
    }
}

function Nav() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    function handleMouseLeave() {
        if(window.innerWidth <= 1000) {
            return;
        } else {
            return () => dispatch({ type: 'mouseLeave' })
        }
    }
    function handleClick() {
        return () => dispatch({ type: 'close' })
    }
    function handleMouseEnter() {
        if(window.innerWidth >= 1000) {
            return () => dispatch({ type: 'open' })
        } else {
            return () => dispatch({ type: 'mouseEnter' })
        }
    }
    return ( 
        <nav className="navbar"> 
            <Link to="/" className="nav-header"> 
                McNeer Outdoors 
                <span>
                    Professional Lawn Care
                </span>
                <span>
                    Professional Lawn Sprinklers
                </span>
                <span>
                    Mosquito Mist Control
                </span>
            </Link> 
            <div className="toggle-menu">
                <div onClick={() => dispatch({ type: 'toggle' })} 
                    className={state.isToggled ? "toggle-button checked" : "toggle-button"}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <div className={state.isToggled ? "nav-link-container" : "nav-link-container-hidden"}>
                <div className="nav-link-holder border-top">
                    <Link onClick={handleClick()} to="/" className="nav-link"> 
                        Home 
                    </Link>
                </div>
                <div className="nav-link-holder">
                    <Link onClick={handleClick()} to="/about-us" className="nav-link">
                        About
                    </Link>
                </div>
                <div className="nav-link-holder">
                    <Link onClick={handleClick()} to="/financing" className="nav-link">
                        Financing
                    </Link>
                </div>
                <div onMouseLeave={handleMouseLeave()} onMouseEnter={handleMouseEnter()} className="dropdown">
                    <div className="dropbtn nav-link"> Services </div>
                    <div className={state.show ? "dropdown-content dropdown-content-show" : "dropdown-content dropdown-content-hide"}>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/concrete" className="dropdown-link"> 
                                Concrete 
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/fire-pits" className="dropdown-link">
                                Fire Pits
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/gardening" className="dropdown-link">
                                Gardening
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/landscape-lighting" className="dropdown-link">
                                Landscape Lighting
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/landscaping" className="dropdown-link">
                                Landscaping
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/mosquito-control" className="dropdown-link">
                                Mosquito Control
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/outdoor-kitchens" className="dropdown-link">
                                Outdoor Kitchens
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/pergola" className="dropdown-link">
                                Pergola's
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/pools" className="dropdown-link">
                                Pools
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/professional-lawn-care" className="dropdown-link">
                                Professional Lawn Care
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/seamless-gutters" className="dropdown-link">
                                Seamless Gutters
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/sod-and-hydroseeding" className="dropdown-link">
                                Sod & Hydroseeding
                            </Link>
                        </div>
                        <div className="dropdown-link-holder">
                            <Link onClick={handleClick()} to="/sprinklers" className="dropdown-link">
                                Sprinklers
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-link-holder">
                    <Link onClick={handleClick()} to="/contact-us" className="nav-link"> 
                        Contact Us 
                    </Link>
                </div>
                <div className="nav-icon-holder">
                    <a href="https://www.facebook.com/professionallawncarems/" target="_blank" rel="noopener noreferrer" className="nav-icon">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
                <div className="spacer"></div>
            </div>

        </nav>
    )
}

export default Nav;