import React from 'react';
import classes from "./index.module.scss"
import MiniBanner from "../../../components/MiniBanner";

type Props = {}

const GeneralNews13062022: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.news}>
            <MiniBanner main_header={"General News"} link={"/news"} menu_item={"News"}
                        sub_menu={"General News June 14 2022"}/>
            <div className={classes.container}>
                <div className={classes.section}>
                    <div className={classes.side_image}>
                        <img src="/assets/img/developments/current/frithville/frithville_005.jpeg" alt="image"/>
                    </div>
                    <div className={classes.side_text}>
                        <h2>General Overview</h2>
                        <p>Plots 1- 7 have all now progressed past plumbing works, being made water tight with roofing
                            works completed, windows and doors fittings up, and progressing to landscaping and fencing
                            of the entire site. Legal conveyancing on all sold plots is also ongoing.
                        </p>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.side_text}>
                        <h2>Electrical Works</h2>
                        <p>Electrical works being carried out earlier, we are happy to update that units 1-7 have been
                            completely wired now and ready for the final fittings inside the units. These fittings will
                            be completed by the time some of you read this news page.
                        </p>
                    </div>
                    <div className={classes.side_image}>
                        <img src="/assets/img/developments/current/frithville/frithville_006.jpeg" alt="image"/>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.side_image}>
                        <img src="/assets/img/developments/current/frithville/frithville_007.jpeg" alt="image"/>
                    </div>
                    <div className={classes.side_text}>
                        <h2>Roofing Works</h2>
                        <p>Roofing beams being installed earlier in the project, these were completed in a timely manner
                            with zero incidents to the best standards, using only the best materials so that the home
                            owners know their peace of mind is a key driver.
                        </p>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.side_text}>
                        <h2>Landscaping</h2>
                        <p>Landscaping and the fencing of the entire site is now ongoing following the completion of
                            roofing , plumbing, and electrical works.
                        </p>
                    </div>
                    <div className={classes.side_image}>
                        <img src="/assets/img/developments/current/frithville/frithville_012.jpeg" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralNews13062022;