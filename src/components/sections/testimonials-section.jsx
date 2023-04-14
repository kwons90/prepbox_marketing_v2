import { ReactComponent as Learn } from './../../assets/images/learn-text.svg';

import TestimonailCard from '../cards/testimonial-card';
import classes from './testimonials-section.module.css';

const TestimonialsSection = () => {
    return (
        <article className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Testimonials</h2>
                    <p>
                        We are loved by the students and the parents, who learn through PrepBox, and
                        we intend to keep it this way
                    </p>
                </div>

                <div className={classes.content}>
                    <TestimonailCard
                        name='Trinity Hsu'
                        text='I wanted to update you on my university admissions. I got into McMaster engineering, University of Toronto mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!'
                    />
                    <TestimonailCard
                        name='Celine Chung'
                        text='I got into all my Waterloo choices today! Computer Science, Computer Science & BBA double degree, Math & Business double degree. Thank you so much for helping me during my math journey.'
                    />
                    <TestimonailCard
                        name='George Mavroudis, Parent of Gregory'
                        text='Gregory wrote his final test today in Math and said he felt pretty comfortable in most of it. I want to thank you...as you made a significant amount of progress in building his confidence and enjoyment of the subject.'
                    />
                    <TestimonailCard
                        name='Trinity Hsu'
                        text='Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.'
                    />
                    <TestimonailCard
                        name='Trinity Hsu'
                        text='I hope you had a good weekend. I wanted to update you on my university admissions. I got into Mcmaster engineering, U of T mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!'
                    />
                    <TestimonailCard
                        name='Parent of Robyn'
                        text='Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.'
                    />
                </div>
            </div>
            <div className={classes.learn}>
                <Learn />
            </div>
        </article>
    );
};

export default TestimonialsSection;
