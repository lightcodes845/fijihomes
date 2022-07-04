import React from 'react';
import {NextPage} from "next";
import classes from "./index.module.scss";
import Banner from "../../components/Banner";
import Head from "next/head";

type Props = {}

const LandPage: NextPage = (props: Props) => {
    return (<>
            <Head>
                <title>Fiji Homes & Properties</title>
                <meta name="description" content="Fiji Homes & Properties" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.land_page}>
                <Banner main_text={"Land"} background_image={"/assets/img/land.jpeg"} />
                <div className={classes.container}>
                    <div className={classes.text_content}>
                        <div className={classes.side_one}>
                            With extensive experience in land procurement, Fiji Homes & Propertie are always seeking new land
                            opportunities. If you have land or property (with or without planning permission) which you
                            think may have development potential, we would love to hear from you. Purchases can range from a
                            straightforward cash option or can be created to minimise tax liabilities.
                        </div>
                        <div className={classes.side_two}>
                            <p>Please contact:</p>
                            <p>Email: land@fijihomes.co.uk / Phone: 01733 841931</p>
                            <p>All enquiries are highly confidential.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandPage;