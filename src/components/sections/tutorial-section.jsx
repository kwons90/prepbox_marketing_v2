import { useState } from 'react';

import Tutorial from './../../assets/images/tutorial.png';
import { ReactComponent as Arrow } from './../../assets/icons/accordion-arrow.svg';
import classes from './tutorial-section.module.css';

const guidance = [
    {
        id: '01',
        title: 'Book Free Assessment',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
        ],
    },
    {
        id: '02',
        title: 'Login to your account',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
        ],
    },
    {
        id: '03',
        title: 'Watch mini-lectures',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
        ],
    },
    {
        id: '04',
        title: 'Begin solving questionst',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
        ],
    },
    {
        id: '05',
        title: 'Submit and get marked real-time',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
        ],
    },
];

const TutorailSection = () => {
    const [accordion, setAccordion] = useState(0);

    const accordionHandler = (index) => {
        if (index === accordion) {
            return setAccordion(-1);
        }

        setAccordion(index);
    };

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <p>
                        We are strong believers that the application of theory in the form of
                        problem solving is as equally important as theory in learning. Our product
                        reflects these values.
                    </p>
                </div>
                <h2 className={classes.title}>How does it work?</h2>
            </div>

            <div className={classes.content}>
                <div className={classes['content__wrapper-content']}>
                    <ul className={classes.list}>
                        {guidance.map((guide, i) => {
                            return (
                                <li
                                    key={guide.id}
                                    className={`${classes['list__item']} ${
                                        accordion === i ? `${classes.active}` : ''
                                    }`}
                                >
                                    <div
                                        className={classes['list__item-header']}
                                        onClick={accordionHandler.bind(null, i)}
                                    >
                                        <div className={classes['list__item-count']}>
                                            {guide.id}.
                                        </div>
                                        <h4>{guide.title}</h4>
                                        <button
                                            type='button'
                                            className={`${classes['list__item-btn']} ${
                                                accordion === i ? `${classes.show}` : ''
                                            }`}
                                        >
                                            <Arrow />
                                        </button>
                                    </div>

                                    <div
                                        className={`${classes['list__item-content']} ${
                                            accordion === i ? `${classes.active}` : ''
                                        }`}
                                    >
                                        {guide.description.map((desc, i) => (
                                            <p key={i}>{desc}</p>
                                        ))}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={classes['content__wrapper-image']}>
                    <img src={Tutorial} alt='Image' />
                </div>
            </div>
        </section>
    );
};

export default TutorailSection;
