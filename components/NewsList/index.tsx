import React from 'react';
import classes from "./index.module.scss"
import {News} from "../../pages/news";
import {FaHome} from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import Link from "next/link";

type Props = {
    news: News[]
}

const NewsList: React.FC<Props> = ({news}) => {
    return (
        <div className={classes.news_list}>
            <div className={classes.container}>
                <div className={classes.content}>
                    {
                        news.length > 0 ?
                            news.map((data, i) => {
                                return <div key={i} className={classes.box}>
                                    <div className={classes.side_left}>
                                        {/*<Image layout={"responsive"} width={"200"} height={"150"} src={data.image} alt="House Image"/>*/}
                                        <img src={data.image} alt="House Image"/>
                                    </div>
                                    <div className={classes.side_right}>
                                        <div className={classes.title}>
                                            <FaNewspaper />
                                            <h2>{data.title}</h2>
                                        </div>
                                        <p>{data.text}</p>
                                        <div className={classes.bottom}>
                                            <span>{data.date}</span>
                                            <div className={classes.cta}>
                                                <Link  href={data.link}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            :
                            <div className={classes.no_news}><FaHome />No Posts Yet</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsList;