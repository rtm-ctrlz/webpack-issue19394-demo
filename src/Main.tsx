import React from "react";
import {tss} from "tss-react";


const useStyles = tss.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    }
});

export function Main() {
    const {classes} = useStyles();
    return (
        <div className={classes.container}>
            <span>
                If you can see this, it means the app is running.
            </span>
        </div>
    );
}