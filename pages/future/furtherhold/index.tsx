import React from 'react';
import MiniBanner from "../../../components/MiniBanner";
import classes from "./index.module.scss";

type Props = {}

const FurtherholdDev: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.futherhold}>
            <MiniBanner main_header={"Furtherhold Project"} link={"/future"} menu_item={"Future"}
                        sub_menu={"Furtherhold"}/>
            <div className={classes.container}>
                <p>Coming Soon...</p>
            </div>
        </div>
    );
};

export default FurtherholdDev;