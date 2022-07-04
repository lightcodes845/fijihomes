import React from 'react';
import MiniBanner from "../../../components/MiniBanner";
import classes from "./index.module.scss";

type Props = {}

const BickerDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.bicker}>
            <MiniBanner main_header={"Bicker Project"} link={"/future"} menu_item={"Future"}
                        sub_menu={"bicker"}/>
            <div className={classes.container}>
                <p>Coming Soon...</p>
            </div>
        </div>
    );
};

export default BickerDev;