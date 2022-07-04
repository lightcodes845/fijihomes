import React from 'react';
import {NextPage} from "next";
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";
import Head from "next/head";

type Props = {}

export type House = {
    link: string;
    image: string;
    address: string;
    short_text: string;
    date: string;
}

const houses = [
    {
        link: "/past/cambridge",
        image: "/assets/img/developments/past/cambridge/cambridge_007.jpeg",
        address: "Cambridge",
        short_text: "This is A Housing development of 4 units in Cambridge, It is in the heart of Central Cambridge...",
        date: "June 8, 2022"
    }
]

const PastPage: NextPage<Props> = (props: Props) => {
    return (
        <>
            <Head>
                <title>Fiji Homes & Properties</title>
                <meta name="description" content="Fiji Homes & Properties" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <MiniBanner main_header={"Past Development"} menu_item={"Development"} sub_menu={"Past"}/>
                <HouseList houses={houses} />
            </div>
        </>
    );
};

export default PastPage;