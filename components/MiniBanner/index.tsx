import React from 'react';
import classes from "./index.module.scss";
import { FaHouseUser } from "react-icons/fa";
import Link from "next/link";

type Props = {
    main_header: string;
    menu_item: string;
    sub_menu: string;
    link?: string
}

const MiniBanner: React.FC<Props> = ({main_header, menu_item, sub_menu, link}) => {
    return (
        <div className={classes.mini_banner}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h1>{main_header}</h1>
                    <div className={classes.menu}>
                        <FaHouseUser /><span><Link href={link ? link: "/"}>{menu_item}</Link></span> &rarr; <span>{sub_menu}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniBanner;