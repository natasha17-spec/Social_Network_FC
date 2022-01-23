import React, {lazy} from 'react';
import styles from './App.module.css'
import {Route, Switch} from "react-router-dom";

import {Settings} from "@material-ui/icons";
import PrimarySearchAppBar from './components/s1_navBar/primarySearchAppBar/NavBar';
import ImageAvatars from './components/avatar/Avatar';
import WhoToFollow from './components/s4_users/whoToFollow/WhoToFollow';
import NavBar from './components/s1_navBar/NavBar';
import ChatOnline from './components/s1_navBar/chatOnline/ChatOnline';


const ProfilePage = lazy(() => import('./components/s2_profile/Profile'));
const UsersContainerPage = lazy(() => import('./components/s4_users/user/UsersContainer'));
const DialogsPage = lazy(() => import('./components/s3_dialogs/Dialogs'));
const NewsPage = lazy(() => import('./components/s5_news/News'));

export default function App() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <div className={styles.parent}>
                <div className={styles.div1}><ImageAvatars/></div>
                <div className={styles.div2}/>
                <div className={styles.div3}><WhoToFollow/></div>
                <div className={styles.div4}>
                    <NavBar/>
                    <ChatOnline/>
                </div>
                <div className={styles.div5}>
                    <Switch>
                        <Route path='/profile' render={() => <ProfilePage/>}/>
                        <Route path='/dialogs' render={() => <DialogsPage/>}/>
                        <Route path='/users' render={() => <UsersContainerPage/>}/>
                        <Route path='/news' render={() => <NewsPage/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

