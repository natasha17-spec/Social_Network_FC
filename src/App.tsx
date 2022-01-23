import React, {lazy} from 'react';
import styles from './App.module.css'
import {Route, Switch} from "react-router-dom";

import {Settings} from "@material-ui/icons";

import ImageAvatars from './components/avatar/Avatar';
import Menu from './components/menu/Menu';
import ChatOnline from './components/menu/who_online/ChatOnline';
import WhoToFollow from './pages/users/whoToFollow/WhoToFollow';
import Panel from './pages/navBar/panel/Panel';


const ProfilePage = lazy(() => import('./../src/pages/profile/Profile'));
const UsersContainerPage = lazy(() => import('./../src/pages/users/user/UsersContainer'));
const DialogsPage = lazy(() => import('./../src/pages/dialogs/Dialogs'));
const NewsPage = lazy(() => import('./../src/pages/news/News'));

export default function App() {
    return (
        <div>
            <Panel/>
            <div className={styles.parent}>
                <div className={styles.div1}><ImageAvatars/></div>
                <div className={styles.div2}/>
                <div className={styles.div3}><WhoToFollow/></div>
                <div className={styles.div4}>
                    <Menu/>
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

