import React from 'react';
import classes from "./index.module.scss";
import {NextPage} from "next";
import Banner from "../../components/Banner";
import NewsList from "../../components/NewsList";
import Head from "next/head";

type Props = {}

export type News = {
    image: string,
    title: string,
    text: string,
    date: string,
    link: string
}

//let text be just two lines, similar to the first one
const news = [
    {
        image: "/assets/img/developments/current/frithville/frithville_001.jpeg",
        title: "General News",
        text: "Plots 1- 7 have all now progressed past plumbing works, being made water tight with roofing works completed, windows  being made water tight with roofing works completed...",
        date: "June 14, 2022",
        link: "/news/general_news_13_06_2022"
    }
]

const NewsPage: NextPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Fiji Homes & Properties</title>
                <meta name="description" content="Fiji Homes & Properties" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.news_page}>
                <Banner main_text={"News"} background_image={"/assets/img/news.jpeg"}/>
                <div className={classes.container}>
                    <h2>News Posts</h2>
                </div>
                <NewsList news={news}/>
            </div>
        </>
    );
};

export default NewsPage;