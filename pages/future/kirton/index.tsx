import React from 'react';
import ImageGallery from "react-image-gallery";
import classes from "./index.module.scss";
import MiniBanner from "../../../components/MiniBanner";

type Props = {}
const images = [
    {
        original: "/assets/img/developments/future/kirton/kirton_013.jpg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_013.jpg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_001.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_001.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_002.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_002.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_003.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_003.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_004.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_004.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_005.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_005.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_006.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_006.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_007.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_007.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_008.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_008.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_009.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_009.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_010.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_010.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_011.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_011.jpeg",
    },
    {
        original: "/assets/img/developments/future/kirton/kirton_012.jpeg",
        thumbnail: "/assets/img/developments/future/kirton/kirton_012.jpeg",
    }
];
const KirtonDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.kirton}>
            <MiniBanner main_header={"Kirton Project"} link={"/future"} menu_item={"Future"}
                        sub_menu={"kirton"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>
                </div>
                <div className={classes.video_container}>
                    <h2>Kirton development video overview</h2>
                        <video className={classes.Video} controls poster={"/assets/img/developments/future/kirton/kirton_001.jpeg"}>
                            <source src="/assets/img/developments/future/kirton/kirton.mp4" type="video/mp4" />
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p>Your browser doesn't support HTML5 video. </p>
                        </video>
                </div>
                <div className={classes.site_location}>
                    <img src="/assets/img/developments/future/kirton/site_location.jpg" alt="site location"/>
                </div>

                <div className={classes.site_plan}>
                    <img src="/assets/img/developments/future/kirton/site_plan.jpg" alt="site plan"/>
                </div>

                <div className={classes.timeline}>
                    <img src="/assets/img/developments/future/kirton/timeline.jpg" alt="timeline"/>
                </div>
            </div>
        </div>
    );
};

export default KirtonDev;