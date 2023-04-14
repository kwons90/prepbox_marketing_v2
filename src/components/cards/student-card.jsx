import classes from './student-card.module.css';

const StudentCard = ({ name, image, score, major, university, logo, backgroundColor }) => {
    return (
        <div
            className={classes.student}
            style={{ backgroundImage: `url(${logo})`, backgroundColor: backgroundColor }}
        >
            <div className={classes['student__content']}>
                <div className={classes['student__content-student']}>
                    <div className={classes['student__avatar']}>
                        <img src={image} alt='Student image' />
                    </div>
                    <p className={classes['student__avatar-name']}>{name}</p>
                </div>

                <h3 className={classes['student__content-university']}>{university}</h3>
                <p className={classes['student__content-text']}>{score}</p>
                <p className={classes['student__content-text']}>{major}</p>
            </div>
        </div>
    );
};

export default StudentCard;
