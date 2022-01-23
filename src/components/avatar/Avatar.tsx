import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ava from './../../assets/3.jpg'
import photo from './../../assets/ava.jpg'
import styles from './Avatar.module.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            transform: 'translate(-225px, -3px)',

            borderRadius: '50%',
            '& > *': {
                margin: theme.spacing(1),
                border: '2px solid white',
            },
        },
    }),
);

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={styles.ava}>
            <img src={photo} alt="" />
            <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={ava}/>
            </div>
        </div>
    );
}