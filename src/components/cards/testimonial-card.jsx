import { ReactComponent as QuoteIcon } from './../../assets/icons/quote-icon.svg';
import Testimonial from './../../assets/images/testimonial.png';

import classes from './testimonial-card.module.css';

const TestimonailCard = ({ name, text }) => {
    return (
        <div className={classes.card}>
            <div className={classes.texts}>
                <QuoteIcon />
                <p>{text}</p>
            </div>

            <div className={classes.client}>
                <div className={classes.avatar}>
                    <img src={Testimonial} alt={name} />
                </div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default TestimonailCard;
