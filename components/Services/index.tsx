import React from 'react';
import {Zoom} from "react-awesome-reveal";
import classes from "./index.module.scss";

type Props = {}

const Services: React.FC<Props> = (props: Props) => {
    return (
        <section className={classes.services}>
            <div className={classes.container}>
                <div className={classes.our_services}><span>Our Services</span></div>
                <h1 className={classes.main_text}>Our Main Focus</h1>
                <div className={classes.services_row}>
                    <Zoom triggerOnce delay={300}>
                        <div className={classes.service_box}>
                            <div className={classes.icon_logo}><img src="/assets/img/22.png" alt="icon"/></div>
                            <h2 className={classes.sub_heading}>Buy a home</h2>
                            <p className={classes.sub_text}>
                                The current housing market is flooded with lots and lots of low quality homes, the
                                importance of quality is gradually being eroded. At Fiji Homes & Properties we stick to the age long
                                British standard of quality
                            </p>
                            {/*<div className={classes.button}>Buy a Home &rarr;</div>*/}
                            <p className={classes.bottom_text}>Insist on a Fiji home today to ensure you buy
                                quality</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce>
                        <div className={classes.service_box}>
                            <div className={classes.icon_logo}><img src="/assets/img/21.png" alt="icon"/></div>
                            <h2 className={classes.sub_heading}>Build a home</h2>
                            <p className={classes.sub_text}>
                                Yes, it is possible, to build your own home. At Fiji Homes & Properties, we advise, and provide
                                quality construction systems to help build the modern home of your dreams.
                            </p>
                            {/*<div className={classes.button}>Rent a Home &rarr;</div>*/}
                            <p className={classes.bottom_text}>Let’s go on a journey together, building your dream home</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce delay={300}>
                        <div className={classes.service_box}>
                            <div className={classes.icon_logo}><img src="/assets/img/23.png" alt="icon"/></div>
                            <h2 className={classes.sub_heading}>Invest in Real Estate</h2>
                            <p className={classes.sub_text}>
                                Grow your money with us at Fiji homes by investing in our safe real estate investment models.
                            </p>
                            {/*<div className={classes.button}>Sell a Home &rarr;</div>*/}
                            <p className={classes.bottom_text}>Earn like a developer without being a developer.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default Services;