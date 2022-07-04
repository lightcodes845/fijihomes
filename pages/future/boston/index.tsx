import React from 'react';
import MiniBanner from "../../../components/MiniBanner";
import classes from "./index.module.scss";

type Props = {}

const BostonDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.boston}>
            <MiniBanner main_header={"Boston Project"} link={"/future"} menu_item={"Future"}
                        sub_menu={"boston"}/>
            <div className={classes.container}>
                <p>Coming Soon...</p>
            </div>
        </div>
    );
};

export default BostonDev;