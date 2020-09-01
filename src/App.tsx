import React from 'react';
import styles from './App.module.css'
import {Route, Switch} from "react-router-dom";
import Profile from "./s2_profile/Profile";
import Dialogs from "./s3_dialogs/Dialogs";
import {Settings} from "@material-ui/icons";
import Users from "./s4_users/users/Users";
import News from "./s5_news/News";
import NavBar from "./s1_navBar/NavBar"
import PrimarySearchAppBar from "./s1_navBar/primarySearchAppBar/NavBar";
import ImageAvatars from "./avatar/Avatar";
import ChatOnline from "./s1_navBar/chatOnline/ChatOnline";
import WhoToFollow from "./s4_users/whoToFollow/WhoToFollow";
import UsersContainer from "./s4_users/user/UsersContainer";



export default function App() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <div className={styles.parent}>
                <div className={styles.div1}><ImageAvatars/></div>
                <div className={styles.div2}>div2</div>
                <div className={styles.div3}><WhoToFollow/></div>
                <div className={styles.div4}>
                    <NavBar/>
                    <ChatOnline/>
                </div>
                <div className={styles.div5}>
                    <Switch>
                        {/*<Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>*/}
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

