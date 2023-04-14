import TutorCard from '../cards/tuttor-card';

import Tutor1 from './../../assets/images/tutor-1.png';
import Tutor2 from './../../assets/images/tutor-2.png';
import Tutor3 from './../../assets/images/tutor-3.png';

import classes from './tutors-section.module.css';

const TutorsSection = () => {
    return (
        <div className={classes.section} id='team-section'>
            <div className={classes.container}>
                <h2>Tutors</h2>
                <p className='text-center'>
                    The PrepBox team is composed of graduates from top schools and are tutors on the
                    platform
                </p>

                <div className={classes.content}>
                    <TutorCard
                        name='Min Lee'
                        career='Founder/CEO'
                        experience='20 years'
                        university='University of Toronto'
                        image={Tutor1}
                    />
                    <TutorCard
                        name='Sam Kwon'
                        career='Chief Growth Officer'
                        experience='2 years'
                        university='MIT'
                        image={Tutor2}
                    />
                    <TutorCard
                        name='Jina Seok'
                        career='Head Tutor - Canada '
                        experience='4 years'
                        university='University of Toronto'
                        image={Tutor3}
                    />
                </div>
            </div>
        </div>
    );
};

export default TutorsSection;
