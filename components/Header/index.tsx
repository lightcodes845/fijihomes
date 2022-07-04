import React from 'react';
import Link from "next/link";
import {NextPage} from "next";
import classes from "./index.module.scss";
// import {FaHome} from "react-icons/fa";
import MiniNav from "../MiniNav";


type Props = {}

const Header: NextPage<Props> = (props: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const closeDrawer = () => {
        setMobileOpen(false);
    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <div className={classes.logo}><img src="/assets/img/logo.png" alt="Logo"/></div>
                    <div className={classes.navlinks}>
                        <ul className={classes.main_list}>
                            <li className={classes.list_item}><Link href={'/'}>Home</Link></li>
                            <li className={[classes.dropdown, classes.list_item].join(" ")}>
                                <div ><Link href={'#'}>Developments</Link></div>
                                <div className={classes.dropdown_menu}>
                                    <ul>
                                        <Link href={"/past"}><li>Past</li></Link>
                                        <Link href={"/current"}><li>Current</li></Link>
                                        <Link href={"/future"}><li>Future</li></Link>
                                    </ul>
                                </div>
                            </li>
                            {/*<li className={classes.list_item}><Link href={'/land'}>Land</Link></li>*/}
                            <li className={classes.list_item}><Link href={'/about'}>About Us</Link></li>
                            <li className={classes.list_item}><Link href={'/news'}>News</Link></li>
                            <li className={classes.list_item}><Link href={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={classes.Navigation__icon}
                         onClick={handleDrawerToggle}
                    >&nbsp;</div>
                    <MiniNav mobileOpen={mobileOpen} closeDrawer={closeDrawer}/>
                </nav>
            </div>
        </header>
    );
};

export default Header;