import { Link } from 'react-scroll';

import PrepLogo from './../assets/icons/prep-logo.svg';
import FooterLogo from './../assets/images/footer-logo.svg';
import Youtube from './../assets/icons/youtube.png';
import Tiktok from './../assets/icons/tiktok.png';
import Linkedin from './../assets/icons/linkedin.png';
import Twitter from './../assets/icons/twitter.png';
import Slack from './../assets/icons/slack.png';

import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.assessment}>
                    <div className={classes['assessment__content']}>
                        <img src={PrepLogo} alt='icon' />
                        <div className={classes['assessment__text']}>
                            <h5>Let’s get in touch</h5>
                            <p>
                                Schedule a demo or an assessment with us or send us query to
                                <a href='mailto: info@prepanywhere.com'> info@prepanywhere.com</a>
                            </p>
                        </div>
                    </div>
                    <a
                        href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                        target='_blank'
                        className={classes['assessment__btn']}
                    >
                        Schedule assessment
                    </a>
                </div>

                <div className={classes.content}>
                    <div className={classes['content__texts']}>
                        <img src={FooterLogo} alt='Logo' />
                        <h6>Learn by Doing</h6>
                        <p>
                            We have taught over 2,000 students, and over 500 of our students have
                            gone onto graduate from North America's top universities
                        </p>

                        <ul className={classes['content__social']}>
                            <li>
                                <a href='#' target='_blank'>
                                    <img src={Youtube} alt='Youtube icon' />
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    <img src={Tiktok} alt='Tiktok icon' />
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    <img src={Linkedin} alt='Linkedin icon' />
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    <img src={Twitter} alt='Twitter icon' />
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    <img src={Slack} alt='Slack icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes['content__links']}>
                        <ul className={classes['content__links-list']}>
                            <li>
                                <Link
                                    to='hero'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='students-section'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    Results
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='students-section'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='team-section'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='pricing'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                        <ul className={classes['content__links-list']}>
                            <li>
                                <a href='#' target='_blank'>
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    Slack
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                                    target='_blank'
                                >
                                    Become an Affiliate
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <p>&copy; {new Date().getFullYear()} - PrepAnywhere Inc. All Right Reserved</p>

                    <div className={classes['copyright-links']}>
                        <a
                            href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                            target='_blank'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                            target='_blank'
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
