import React from 'react';
import classes from "./index.module.scss";
import {NextPage} from "next";
import {FaPhoneSquareAlt} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaMapMarked} from "react-icons/fa";
import Banner from "../../components/Banner";
import Head from "next/head";

type Props = {}

const ContactPage: NextPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Fiji Homes & Properties</title>
                <meta name="description" content="Fiji Homes & Properties" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.contact_page}>
                <Banner main_text={"Contact Us"} background_image={"/assets/img/land.jpeg"}/>
                <div className={classes.container}>
                    <div className={classes.contact_content}>
                        <div className={classes.box}>
                            <FaPhoneSquareAlt/>
                            <h3>Phone</h3>
                            <p>+44 7459 106979</p>
                        </div>
                        <div className={classes.box}>
                            <FaMailBulk/>
                            <h3>Email</h3>
                            <p>info@fijihomes.co.uk</p>
                        </div>
                        <div className={classes.box}>
                            <FaMapMarked/>
                            <h3>Address</h3>
                            <p>12 Anglesey way Eye Peterborough PE6 7ZB</p>
                        </div>
                    </div>
                    <div className={classes.maps}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.7802031881674!2d-0.18162771372428196!3d52.609743672531735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877fa1b06430e15%3A0x6b7e6e68175d83af!2sAnglesey%20Wy%2C%20Peterborough%2C%20UK!5e0!3m2!1sen!2sng!4v1656928640959!5m2!1sen!2sng"
                            width="100%" height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;