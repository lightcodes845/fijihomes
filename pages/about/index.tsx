import React from 'react';
import {NextPage} from "next";
import classes from "./index.module.scss";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Head from "next/head";

type Props = {}

const AboutPage: NextPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Fiji Homes & Properties</title>
                <meta name="description" content="Fiji Homes & Properties" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.about_page}>
                <Banner main_text={"About Us"} background_image={"/assets/img/about.jpeg"} />
                <Services />
                <div className={classes.container}>
                    <div className={classes.text_content}>
                        <div className={classes.side_one}>
                            <p>Fiji Homes & Properties was established in 2011 by Mayowa Oluwatosin.
                                With a wealth of experience spanning 50 years, we are dedicated to providing beautiful
                                quality homes, built to the highest standard. We strive to exceed expectations, considering
                                our clients throughout the design process to create homes of distinction.</p>
                            <p>We appreciate that value for money without compromising on quality is important. As with all
                                businesses there is a need to know that the product being purchased fulfills those
                                requirements. We are well versed in all aspects of residential home building and are able to
                                offer a traditional, off-plan or ‘custom build’ purchase.</p>
                        </div>
                        <div className={classes.side_two}>
                            <h3>Custom Build</h3>
                            <p>
                                Here at Fiji Homes & Properties we offer a unique option, perfect for our clients who want
                                more input into their home. On selected developments we offer the client the ability to
                                purchase their dream plot and construct their dream home. The Custom Build process is less
                                stressful than traditional self build as we take full control of all the technical decisions
                                and planning issues that would normally be associated with building a property, leaving the
                                client free to concentrate on all the exciting choices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;