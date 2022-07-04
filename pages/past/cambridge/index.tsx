import React from 'react';
import classes from "../../../styles/past.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/cambridge/cambridge_001.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_001.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_002.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_002.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_003.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_004.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_004.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_004.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_005.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_005.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_006.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_006.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_007.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_007.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_008.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_008.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_009.jpeg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_009.jpeg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_010.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_010.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_011.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_011.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_012.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_012.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_013.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_013.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_014.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_014.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_015.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_015.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_016.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_016.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_017.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_017.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_018.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_018.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_019.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_019.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_020.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_020.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_021.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_021.jpg",
    },
    {
        original: "/assets/img/developments/past/cambridge/cambridge_022.jpg",
        thumbnail: "/assets/img/developments/past/cambridge/cambridge_022.jpg",
    }
];

const CambridgeDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Cambridge"} link={"/past"} menu_item={"Past"} sub_menu={"cambridge"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>
                        <h2>Cambridge Development</h2>
                    </div>
                    <div className={classes.side_two}>
                        <ul>
                            <li>This is A Housing development of 4 units in Cambridge</li>
                            <li>In the heart of Central Cambridge</li>
                            <li>3 mins walk to Cambridge united stadium</li>
                            <li>3 mins drive from the Cambridge museum of technology</li>
                            <li>Walking distance to B&Q Harfords, Dunelm, Asda superstore and Tesco superstore</li>
                            <li>5 mins drive to Cambridge airport</li>
                            <li>12 mins bicycle ride to Cambridge university campus</li>
                            <li>14 mins drive in traffic to Cambridge train station</li>
                            <li>It is a project with international investors currently bidding at £1,000,000 to purchase
                                the whole block</li>
                        </ul>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CambridgeDev;