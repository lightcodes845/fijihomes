import React from 'react';
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";
import classes from "../../../styles/current.module.scss";
type Props = {}

const images = [
    {
        original: "/assets/img/developments/current/frithville/frithville_001.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_001.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_002.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_002.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_003.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_003.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_004.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_004.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_005.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_005.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_006.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_006.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_007.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_007.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_008.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_008.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_009.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_009.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_010.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_010.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_011.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_011.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_012.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_012.jpeg",
    },
    {
        original: "/assets/img/developments/current/frithville/frithville_013.jpeg",
        thumbnail: "/assets/img/developments/current/frithville/frithville_013.jpeg",
    }
];

const FrithvilleDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Frithville Project"} link={"/current"} menu_item={"Current"}
                        sub_menu={"frithville"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Frithville Development Project</div>
                    <div className={classes.side_two}>
                        <p>Coming soon...
                        </p>
                        <p>To register your interest in this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrithvilleDev;