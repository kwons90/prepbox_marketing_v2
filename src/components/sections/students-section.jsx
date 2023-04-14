import StudentCard from '../cards/student-card';

import Student1 from './../../assets/images/student-1.jpg';
import Hardvard from './../../assets/images/harvard-university.png';
import Student2 from './../../assets/images/student-2.png';
import Toronto from './../../assets/images/toronto-university.png';
import Student3 from './../../assets/images/student-3.png';
import Wilfred from './../../assets/images/wilfred-university.png';

import Student4 from './../../assets/images/student-4.png';
import Student5 from './../../assets/images/student-5.png';
import Western from './../../assets/images/western-university.png';
import Student6 from './../../assets/images/student-6.png';
import Pennsylvania from './../../assets/images/pennsylvania-university.png';
import Student7 from './../../assets/images/student-7.png';
import Mcgill from './../../assets/images/mcgill-university.png';
import Student8 from './../../assets/images/student-8.png';
import Georgetown from './../../assets/images/georgetown-university.png';
import Student9 from './../../assets/images/student-9.png';
import Northwestern from './../../assets/images/northwestern-university.png';

import classes from './students-section.module.css';

const StudentSection = () => {
    return (
        <section className={classes.section} id='students-section'>
            <div className={classes['section-container']}>
                <div className={classes['section__header']}>
                    <h2 className={classes['section__header-title']}>Our Student Outcomes</h2>
                    <p className='text-center'>
                        We have taught over 2,000 students, and over 500 of our students have gone
                        onto graduate from North America's top universities
                    </p>
                </div>

                <div className={classes['section__content']}>
                    <StudentCard
                        name='Olivia Nie'
                        image={Student1}
                        university='Harvard University'
                        score='7/7 in IB Higher Level Math'
                        major='A.B. in Government'
                        logo={Hardvard}
                        backgroundColor='#ffffff'
                    />
                    <StudentCard
                        name='Mike Woo'
                        image={Student2}
                        university='University of Toronto'
                        score='99% in Calculus'
                        major='B.S. Physics and Math'
                        logo={Toronto}
                        backgroundColor='#F7F7F8'
                    />
                    <StudentCard
                        name='Maxim Barron Lee'
                        image={Student3}
                        university='Wilfred Laurier University'
                        score='91% in Calculus'
                        major='B.S. Financial Mathematics'
                        logo={Wilfred}
                        backgroundColor='#ffffff'
                    />
                    <StudentCard
                        name='Kasra Rahmani'
                        image={Student4}
                        university='University of Toronto'
                        score='92% in Calculus'
                        major='B.S. Comp Sci & Statistics'
                        logo={Toronto}
                        backgroundColor='#F7F7F8'
                    />
                    <StudentCard
                        name='Sonia Sharma'
                        image={Student5}
                        university='Western University'
                        score='96% in Calculus'
                        major='Medicine'
                        logo={Western}
                        backgroundColor='#ffffff'
                    />
                    <StudentCard
                        name='Andy Lee'
                        image={Student6}
                        university='University of Pennsylvania'
                        score='100% in Calculus'
                        major='B.S. Systems Engineering'
                        logo={Pennsylvania}
                        backgroundColor='#F7F7F8'
                    />
                    <StudentCard
                        name='Kimberly Seaman'
                        image={Student7}
                        university='McGill University'
                        score='99% in Calculus'
                        major='B.S. Chemical Engineering'
                        logo={Mcgill}
                        backgroundColor='#ffffff'
                    />
                    <StudentCard
                        name='Esther Sohn'
                        image={Student8}
                        university='Georgetown University'
                        score='95% in Calculus'
                        major='B.S. Foreign Services'
                        logo={Georgetown}
                        backgroundColor='#F7F7F8'
                    />
                    <StudentCard
                        name='Raymond Jang'
                        image={Student9}
                        university='Northwestern University'
                        score='5/5 IB Higher Level Math'
                        major='B.S. Physics'
                        logo={Northwestern}
                        backgroundColor='#ffffff'
                    />
                </div>
            </div>
        </section>
    );
};

export default StudentSection;
