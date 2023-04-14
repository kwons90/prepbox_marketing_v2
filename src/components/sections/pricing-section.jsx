import PricingCard from '../cards/pricing-card';
import classes from './pricing-section.module.css';

const PricingSection = () => {
    return (
        <section className={classes.section} id='pricing'>
            <div className={classes.container}>
                <h2>Our Pricing</h2>
                <p className='text-center'>
                    Beginning at $14 per hour, we offer the highest-quality math tutoring at the
                    most competitive rates
                </p>

                <div className={classes.content}>
                    <PricingCard
                        title='Basic'
                        sessions='One 2-hour sessions per week.'
                        price='$200/mo'
                        limits={2}
                        active={false}
                        linkTo='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                    />
                    <PricingCard
                        title='Accelerated'
                        sessions='Two 2-hour sessions per week.'
                        price='$350/mo'
                        limits={1}
                        active={true}
                        linkTo='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                    />
                    <PricingCard
                        title='Light Speed'
                        sessions='Unlimited sessions per week.'
                        price='$200/mo'
                        active={false}
                        linkTo='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
