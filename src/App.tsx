import React, {lazy, Suspense} from "react";
import styles from "./App.module.css";
import {Route, Switch} from "react-router-dom";

import ImageAvatars from "./components/avatar/Avatar";
import Menu from "./components/menu/Menu";
import ChatOnline from "./components/menu/who_online/ChatOnline";
import WhoToFollow from "./pages/customer/follow";
import Panel from "./pages/navBar/panel";

const ProfilePage = lazy(() => import("./pages/profile"));
const UsersContainerPage = lazy(() => import("./pages/customer/index"));
const DialogsPage = lazy(() => import("./pages/dialogs"));
const NewsPage = lazy(() => import("./pages/news"));
const ChatPage = lazy(() => import("./../src/pages/chat/index"));
const SettingsPage = lazy(() => import("./../src/pages/settings/index"));

export default function App() {
    return (
        <>
            <Panel/>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <ImageAvatars/>
                </div>
                <div className={styles.div2}/>
                <div className={styles.div3}>
                    <WhoToFollow/>
                </div>
                <div className={styles.div4}>
                    <Menu/>
                    <ChatOnline/>
                </div>
                <div className={styles.div5}>
                    <Suspense fallback={<div/>}>
                        <Switch>
                            <Route path="/profile" render={() => <ProfilePage/>}/>
                            <Route path="/dialogs" render={() => <DialogsPage/>}/>
                            <Route path="/users" render={() => <UsersContainerPage/>}/>
                            <Route path="/news" render={() => <NewsPage/>}/>
                            <Route path="/settings" render={() => <SettingsPage/>}/>
                            <Route path="/chat" render={() => <ChatPage/>}/>
                            <Route path="*" render={() => <div>404 not found</div>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </>
    );
}
