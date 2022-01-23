import React from "react";
import styles from "./index.module.css"
import WhoToFollowUser from "./user";

const WhoToFollow: React.FC = () => {

    return (
        <div className={styles.whoToFollow_container}>
            <div className={styles.title}>Who To Follow</div>
            <WhoToFollowUser/>
        </div>
    )
};
export default WhoToFollow;