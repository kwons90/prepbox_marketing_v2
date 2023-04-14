import ReactPlayer from 'react-player';
import VideoThumbnail from './../../assets/images/video-thumbnail.png';
import classes from './product-section.module.css';

const ProductSection = () => {
    return (
        <section className={classes.section} id='product-section'>
            <div className={classes.container}>
                <h2>Our product in action</h2>

                <div className={classes.content}>
                    <ReactPlayer
                        light={<img src={VideoThumbnail} alt='Thumbnail' />}
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='100%'
                        height='100%'
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 },
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
