import { useState } from 'react';

import { ReactComponent as ChevronDown } from './../../assets/icons/chevron-down.svg';
import SessionCard from '../cards/session-card';
import classes from './faq-section.module.css';

const faqs = [
    {
        id: 'q1',
        question: 'What is PrepBox?',
        answers: [
            'PrepBox is an iPad application that delivers world-class math tutoring experience through an interactive platform that iterates between lectures and problems under the guidance of an experienced tutor to facilitate rapid grasp of fundamental concepts and help the students become better problem-solvers. After completing our 1-hour assessment, students embark on a journey of their own pace, where they watch our lectures, apply the concepts to solve challenging problems supported by our hints and solution reviews, and get their answers reviewed by our A.I. and expert tutors on the platform.',
        ],
    },
    {
        id: 'q2',
        question: 'Who should use PrepBox?',
        answers: [
            'Any student above 6th grade that wants to improve on his or her mathematical foundations and become better problem-solvers. Our programs cover all subjects from 6th grade to AP Calculus BC or IB Higher Level, ranging from algebra and factoring to advanced calculus.',
        ],
    },
    {
        id: 'q3',
        question: 'How is PrepBox different from other online tutoring services?',
        answers: [
            'Unlike other online tutoring services, PrepBox contains (i) tried-and-tested lectures, (ii) problems with hints and solutions, (iii) whiteboard for problems-solving and showing proof of work, and (iv) guidance from an experienced tutor that enable us to deliver our “learn by doing” methodology for the best-in-class educational outcomes.',
        ],
    },
    {
        id: 'q4',
        question: 'Is PrepBox better than in-person tutoring?',
        answers: [
            'We made PrepBox to be able to deliver the same quality of math tutoring that amazing tutors whose ability, care, and attention can lift students to greater heights in 1-on-1 settings. Our founder, Min Lee, was one of these tutors, and we designed PrepBox to deliver even better results than Min’s track record. We have trained 2,000 students on older versions of PrepBox and have sent 500+ students to top universities such as Harvard, UPenn, McGill, and University of Toronto, and we can confidently assure you that we are committed to only improving on this track record.',
        ],
    },
    {
        id: 'q5',
        question: 'What is learning by doing and how does it work?',
        answers: [
            'Taking after MIT’s educational motto, mens et manus (mind and hand), we believe that the application of theory is equally as important as the theory itself in education. This philosophy is core in our product design, as PrepBox iterates between lectures and problems in 10-15 minute intervals, facilitating quicker understanding of the concepts by the students as they immediately apply the lessons learned onto problem sets, embodying our slogan “learn by doing”.',
        ],
    },
    {
        id: 'q6',
        question: 'Does PrepBox assign homework?',
        answers: [
            'We do not assign homework. We are here to facilitate learning and understanding, not add to the students’ schoolwork.',
        ],
    },
];

const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState(-1);

    const activateFaqHandler = (index) => {
        if (activeFaq === index) {
            return setActiveFaq(-1);
        }
        setActiveFaq(index);
    };

    return (
        <section className={classes.section} id='faq-section'>
            <div className={classes.container}>
                <div className={classes.session}>
                    <SessionCard />
                </div>
                <h2>FAQ'S</h2>

                <div className={classes.faq}>
                    <ul className={classes.list}>
                        {faqs.map((faq, i) => {
                            return (
                                <li key={faq.id} className={`${classes['list__item']}`}>
                                    <div
                                        className={classes['list__item-header']}
                                        onClick={activateFaqHandler.bind(null, i)}
                                    >
                                        <p>{faq.question}</p>
                                        <span
                                            className={`${classes.icon} ${
                                                activeFaq === i ? `${classes.rotate}` : ''
                                            }`}
                                        >
                                            <ChevronDown />
                                        </span>
                                    </div>
                                    <div
                                        className={`${classes['list__answers']} ${
                                            activeFaq === i ? `${classes.show}` : ''
                                        }`}
                                    >
                                        <div className={classes['list__answers-content']}>
                                            {faq.answers.map((answer, index) => {
                                                return <p key={index}>{answer}</p>;
                                            })}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={classes.questions}>
                    <h5>Still have questions?</h5>
                    <p>Get in touch with our team.</p>
                    <a
                        href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                        target='_blank'
                    >
                        Contact
                    </a>
                </div>
            </div>
            <div className={classes['section-background']}></div>
        </section>
    );
};

export default FaqSection;
