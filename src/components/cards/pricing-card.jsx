import { ReactComponent as Icon } from './../../assets/icons/pricing-icon.svg';

import classes from './pricing-card.module.css';

const PricingCard = ({ title, sessions, price, limits, active, linkTo }) => {
    return (
        <div className={`${classes.card} ${active ? `${classes.active}` : ''}`}>
            <div className={classes['card__content']}>
                <h4 className={classes['card__content-title']}>{title}</h4>
                <p className={classes['card__content-session']}>{sessions}</p>
                <h4 className={classes['card__content-price']}>{price}</h4>

                <ul className={classes['card__list']}>
                    <li className={classes['card__list-item']}>
                        <Icon />
                        <span>Weekly sessions</span>
                    </li>
                    <li>
                        <Icon />
                        <span>Schoolwork help</span>
                    </li>
                    <li className={`${limits === 2 ? `${classes.blur}` : ''}`}>
                        <Icon />
                        <span>Rescheduling</span>
                    </li>
                    <li
                        className={`${limits === 2 ? `${classes.blur}` : ''} ${
                            limits === 1 ? `${classes.blur}` : ''
                        }`}
                    >
                        <Icon />
                        <span>Homework assignment</span>
                    </li>
                </ul>
            </div>

            <a
                href={linkTo}
                target='_blank'
                className={`${classes['card-btn']} ${
                    active ? `${classes['card-btn-active']}` : ''
                }`}
            >
                Book Assessment
            </a>
        </div>
    );
};

export default PricingCard;
