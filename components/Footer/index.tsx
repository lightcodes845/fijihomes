import React from 'react';
import {NextPage} from "next"
import classes from "./index.module.scss";

type Props = {}

const Footer: NextPage<Props> = (props: Props) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.address_info}>
                    <p>Copyright &copy; {new Date().getFullYear()} Fiji Homes and Properties. All rights reserved</p>
                    <p>Fiji Homes and Properties | Peterborough | England | PE6 7ZB | +44 7459 106979</p>
                </div>
                <div className={classes.information}>
                    <p>This website and its content is for illustrative purposes only. Elevations, treatments and site
                        layouts may change. This website should be treated as general guidance and is not intended to
                        form part of any warranty or contract. Surfaces, landscaping, layouts, parking arrangements and
                        boundaries should be checked prior to reservation. The dimensions shown are approximate and the
                        precise measurements may vary. Previous developments were carried out by Fiji Homes and Properties and its
                        associated companies.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;