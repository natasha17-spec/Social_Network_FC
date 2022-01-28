import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            "& > * + *": {
                marginLeft: theme.spacing(2),
            },
        },
    })
);

export default function Preloader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary"/>
        </div>
    );
}
