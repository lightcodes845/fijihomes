import React, {useState} from 'react';
import classes from "./index.module.scss";
import Link from "next/link";
import {FaAngleDown} from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa";

type Props = {
    mobileOpen: boolean;
    closeDrawer: () => void;
}


const MiniNav: React.FC<Props> = ({mobileOpen, closeDrawer}: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    const sideBarClass = [classes.navlinks];
    if (mobileOpen) {
        sideBarClass.push(classes.sidebar_open);
    }

    const handleToggleShowMenu = () => {
        setShowMenu((prevState => !prevState))
    }

    const menuClass = [classes.dropdown_menu];

    if (showMenu) {
        menuClass.push(classes.show_dropdown_menu);
    }

    return (
        <div className={sideBarClass.join(" ")}>
            <div className={classes.logo}><img src="/assets/img/logo.jpeg" alt="Logo"/></div>
            <ul className={classes.main_list}>
                <li className={classes.list_item} onClick={() => {
                    if (mobileOpen) {
                        closeDrawer();
                    }
                }}><Link href={'/'}>Home</Link></li>
                <li className={classes.dropdown}>
                    <div onClick={handleToggleShowMenu} className={[classes.list_item, classes.icon_set].join(" ")}>
                        <span>Developments</span>
                        {
                            showMenu ? <FaAngleUp/> : <FaAngleDown/>
                        }
                    </div>
                    <div className={menuClass.join(" ")}>
                        <ul>
                            <li
                                onClick={() => {
                                    if (mobileOpen) {
                                        closeDrawer();
                                    }
                                }}
                            ><Link href={"/past"}>Past</Link></li>
                            <li
                                onClick={() => {
                                    if (mobileOpen) {
                                        closeDrawer();
                                    }
                                }}
                            ><Link href={"/current"}>Current</Link></li>
                            <li
                                onClick={() => {
                                    if (mobileOpen) {
                                        closeDrawer();
                                    }
                                }}
                            ><Link href={"/future"}>Future</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={classes.list_item} onClick={() => {
                    if (mobileOpen) {
                        closeDrawer();
                    }
                }}><Link href={'/land'}>Land</Link></li>
                <li className={classes.list_item} onClick={() => {
                    if (mobileOpen) {
                        closeDrawer();
                    }
                }}><Link href={'/about'}>About Us</Link></li>
                <li className={classes.list_item} onClick={() => {
                    if (mobileOpen) {
                        closeDrawer();
                    }
                }}><Link href={'/news'}>News</Link></li>
                <li className={classes.list_item} onClick={() => {
                    if (mobileOpen) {
                        closeDrawer();
                    }
                }}><Link href={'/contact'}>Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default MiniNav;