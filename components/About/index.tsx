import React from 'react';
import {FaHome} from "react-icons/fa";
import {FaMapMarkedAlt} from "react-icons/fa";
import {MdHeadsetMic} from "react-icons/md";
import {Slide} from "react-awesome-reveal";
import classes from './index.module.scss';

type Props = {}

const AboutSection: React.FC<Props> = (props: Props) => {
    return (
        <section className={classes.about_section}>
            <div className={classes.container}>
                <h3 className={classes.about_text}>About Us</h3>
                <div className={classes.content}>
                    <div className={classes.side_images}>
                        <img src="/assets/img/about__main6.jpg" alt="Image One"/>
                    </div>
                    <div className={classes.side_text}>
                        <h1 className={classes.main_text}>Dream Living spaces</h1>
                        <p className={classes.sub_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dolorum ex laudantium porro sit totam.
                            Incidunt, laboriosam, tempora? Dicta dignissimos error et maiores non quisquam sint. Aperiam
                            aut
                            commodi ea esse maiores omnis, quaerat quis saepe similique tempore totam unde voluptas.</p>
                        <Slide direction={"right"} triggerOnce>
                            <div className={classes.rect}>
                                <div className={classes.icon}>
                                    <FaHome/>
                                </div>
                                <div className={classes.text}>
                                    <h3>The Perfect Residency</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum labore omnis quos
                                        veniam?
                                        Harum, id?</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide direction={"right"} delay={200} triggerOnce>
                            <div className={classes.rect}>
                                <div className={classes.icon}>
                                    <MdHeadsetMic/>
                                </div>
                                <div className={classes.text}>
                                    <h3>Global Architect Experts</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum labore omnis quos
                                        veniam?
                                        Harum, id?</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide direction={"right"} delay={300} triggerOnce>
                            <div className={classes.rect}>
                                <div className={classes.icon}>
                                    <FaMapMarkedAlt/>
                                </div>
                                <div className={classes.text}>
                                    <h3>Built-in Storage Cupboards</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum labore omnis quos
                                        veniam?
                                        Harum, id?</p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;