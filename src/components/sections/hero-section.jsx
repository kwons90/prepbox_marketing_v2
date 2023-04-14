import { ReactComponent as CheckedIcon } from './../../assets/icons/checked-circle.svg';
import { ReactComponent as ArrowRight } from './../../assets/icons/arrow-right.svg';
import Banner from './../../assets/images/banner.png';

import classes from './hero-section.module.css';

const HeroSection = () => {
    return (
        <section className={classes.hero} id='hero'>
            <div className={classes['hero-container']}>
                <div className={classes['hero-content']}>
                    <h1>Learn by doing with the world's #1 online tutor</h1>
                    <ul className={classes['hero__content-list']}>
                        <li>
                            <CheckedIcon />
                            <p>Proven lectures and questions</p>
                        </li>
                        <li>
                            <CheckedIcon />
                            <p>Tutors with 20+ yrs of experience</p>
                        </li>
                        <li>
                            <CheckedIcon />
                            <p>Courses designed just for you</p>
                        </li>
                    </ul>

                    <a
                        href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                        className={classes['hero__content-btn']}
                        target='_blank'
                    >
                        <span>Get started for free</span>
                        <ArrowRight />
                    </a>
                </div>
            </div>
            <div className={classes['hero-image']}>
                <img src={Banner} alt='Image' />
            </div>
        </section>
    );
};

export default HeroSection;
