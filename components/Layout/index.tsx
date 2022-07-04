import React from 'react';
import {NextPage} from "next";
import Header from "../Header";
import Footer from "../Footer"
import classes from "./index.module.scss"

type Props = {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}: Props) => {
    return (
        <>
         <Header />
         <main className={classes.main}>
             { children }
         </main>
         <Footer />
        </>
    );
};

export default Layout;