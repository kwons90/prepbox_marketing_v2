import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from './../assets/images/logo.svg';
import classes from './header.module.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isSmallHeader, setIsSmallHeader] = useState(false);

    const togglerMenuHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setIsSmallHeader(window.pageYOffset > 80));
        }
    }, []);

    return (
        <>
            <header
                className={classes.header}
                style={{ height: `${isSmallHeader ? '60px' : '80px'}` }}
                id='header'
            >
                <nav className={classes.nav}>
                    <Link
                        className={classes['nav-logo']}
                        to='hero'
                        activeClass={classes.active}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <Logo />
                    </Link>

                    <div
                        className={`${classes.menu} ${showMenu ? `${classes['show-menu']}` : ''}`}
                        style={{ top: `${isSmallHeader ? '60px' : '80px'}` }}
                    >
                        <ul className={classes['nav__list']}>
                            <li>
                                <Link
                                    to='hero'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='students-section'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Results
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='product-section'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='team-section'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='pricing'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='faq-section'
                                    activeClass={classes.active}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={hideMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={classes['toggler-wrapper']}>
                        <button
                            className={`${classes.toggler} ${showMenu ? `${classes.open}` : ''}`}
                            onClick={togglerMenuHandler}
                        >
                            <span className={classes['toggler__top']}></span>
                            <span className={classes['toggler__middle']}></span>
                            <span className={classes['toggler__bottom']}></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`${classes.backdrop} ${showMenu ? `${classes['show-backdrop']}` : ''}`}
                onClick={togglerMenuHandler}
            ></div>
        </>
    );
};

export default Header;
