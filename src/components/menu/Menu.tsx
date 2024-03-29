import React from "react";
import {NavLink} from "react-router-dom";

import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsIcon from "@material-ui/icons/Settings";
import ForumIcon from "@material-ui/icons/Forum";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PeopleIcon from "@material-ui/icons/People";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import BallotIcon from "@material-ui/icons/Ballot";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import lime from "@material-ui/core/colors/lime";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import {blue} from "@material-ui/core/colors";

import {makeStyles} from "@material-ui/core/styles";
import styles from "./Menu.module.css";

const useStyles = makeStyles({
    root: {
        width: 230,
    },
});

const Menu = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon style={{color: green[800]}} fontSize="small"/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/profile" activeClassName={styles.activeLink}>
                            Profile
                        </NavLink>
                    </div>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <QuestionAnswerIcon
                            fontSize="small"
                            style={{color: orange[700]}}
                        />
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/dialogs" activeClassName={styles.activeLink}>
                            {" "}
                            Messages
                        </NavLink>
                    </div>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <PeopleIcon fontSize="small" style={{color: deepPurple[500]}}/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/users" activeClassName={styles.activeLink}>
                            Friends
                        </NavLink>
                    </div>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <BallotIcon fontSize="small" style={{color: lime[500]}}/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/news" activeClassName={styles.activeLink}>
                            {" "}
                            My Newsfeed
                        </NavLink>
                    </div>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <QueueMusicIcon fontSize="small" style={{color: brown[700]}}/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/music" activeClassName={styles.activeLink}>
                            Music
                        </NavLink>
                    </div>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" style={{color: grey[400]}}/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/settings" activeClassName={styles.activeLink}>
                            Settings
                        </NavLink>
                    </div>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ForumIcon fontSize="small" style={{color: blue[400]}}/>
                    </ListItemIcon>
                    <div className={styles.item}>
                        <NavLink to="/chat" activeClassName={styles.activeLink}>
                            Chat
                        </NavLink>
                    </div>
                </MenuItem>
            </MenuList>
        </Paper>
    );
};

export default Menu;
