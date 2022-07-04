import React from 'react';
import classes from "./index.module.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import {House} from "../../pages/past";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


type Props = {
    houses: House[]
}

const HouseList: React.FC<Props> = ({ houses }) => {
    return (
        <div className={classes.house_list}>
            <div className={classes.container}>
                <div className={classes.content}>
                    {
                        houses.length > 0
                            ? houses.map((house, index) => (
                                <div className={classes.box} key={index}>
                                    <div className={classes.top}>
                                        <Image layout={"responsive"} width={"280"} height={"175"} src={house.image} alt="House"/>
                                    </div>
                                    <div className={classes.bottom}>
                                        <div className={classes.address}>
                                            <FaMapMarkedAlt /> <span>{house.address}</span>
                                        </div>
                                        <div className={classes.text}>
                                            {house.short_text}
                                        </div>
                                        <div className={classes.cta}>
                                            <span>{house.date}</span>
                                            <Link href={house.link}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <div className={classes.no_houses}><FaHome /> No Houses Yet</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseList;