import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ava1 from "./../../../assets/1.jpg";
import ava2 from "./../../../assets/2.jpg";
import ava3 from "./../../../assets/3.jpg";
import ava4 from "./../../../assets/4.jpg";
import ava5 from "./../../../assets/5.jpg";
import ava6 from "./../../../assets/5.jpg";

import styles from './ChatOnline.module.css'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            borderRadius: '50%',
            '& > *': {
                margin: theme.spacing(1),
                border: '2px solid white',
            },
        },
    }),
);
export default function ChatOnline() {
    const classes = useStyles();
    return (
        <div className={styles.chat_container} >
            <div className={styles.title}>Chat online</div>


            <div className={styles.online_user_container}>

                <div>
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src={ava1}/>
                </div>
                <ul>
                    <li><span className={styles.online_dot}></span></li>
                </ul>
            </div>


                <div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={ava2}/>

                    </div>
                    <ul>
                        <li><span className={styles.online_dot}></span></li>
                    </ul>
                </div>

                <div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={ava3}/>

                    </div>
                    <ul>
                        <li><span className={styles.online_dot}></span></li>
                    </ul>
                </div>

                <div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={ava4}/>

                    </div>
                    <ul>
                        <li><span className={styles.online_dot}></span></li>
                    </ul>
                </div>

                <div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={ava5}/>

                    </div>
                    <ul>
                        <li><span className={styles.online_dot}></span></li>
                    </ul>
                </div>

                <div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={ava6}/>

                    </div>
                    <ul>
                        <li><span className={styles.online_dot}></span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}