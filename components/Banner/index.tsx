import React from 'react';
import classes from "./index.module.scss";
import {Zoom} from "react-awesome-reveal";

type Props = {
    main_text: string;
    background_image: string;
}

const Banner: React.FC<Props> = ({main_text, background_image}) => {
    return (
        <div className={classes.banner}>
            <div className={classes.container}>
                <div className={classes.image_parent}>
                    <div style={{backgroundImage: `url("${background_image}")`}} className={classes.image_content}>&nbsp;</div>
                    <div className={classes.backdrop}>&nbsp;</div>
                    <div className={classes.heading}>
                        <Zoom triggerOnce delay={500}>
                            <h1>{main_text}</h1>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;