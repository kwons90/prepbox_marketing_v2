import classes from './tutor-card.module.css';

const TutorCard = ({ name, career, experience, university, image }) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.content}>
                <h5>{name}</h5>
                <p>{career}</p>
                <p>
                    Tutor Experience: <span>{experience}</span>
                </p>
                <p>
                    Alma mater: <span>{university}</span>
                </p>
            </div>
        </div>
    );
};

export default TutorCard;
