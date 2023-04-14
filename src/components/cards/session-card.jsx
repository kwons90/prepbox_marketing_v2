import classes from './session-card.module.css';

const SessionCard = () => {
    return (
        <div className={classes.card}>
            <div className={classes['card__description']}>
                <div className={classes['card__description-content']}>
                    <h3>Our Session Times</h3>
                    <p>You can sign up to attend any of our sessions to study with our tutors.</p>
                    <p>All times are U.S. Eastern Standard Time</p>
                </div>
            </div>
            <div className={classes['card__week']}>
                <ul className={classes['card__week-list']}>
                    <li>
                        Mon <span> - 2:00pm</span>
                    </li>
                    <li>
                        Tue <span> - 6:30am | 4:30pm | 5:00pm</span>
                    </li>
                    <li>
                        Wed <span> - 6:30am | 4:30pm | 5:00pm</span>
                    </li>
                    <li>
                        Thu <span> - 6:30am | 8:00pm | 9:00pm</span>
                    </li>
                    <li>
                        Sat <span> - 6:30am | 10:00am | 10:30am</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SessionCard;
