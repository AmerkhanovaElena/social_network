import Navbar from './Navbar/Navbar';
import styles from './Sidebar.module.css'
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
    return (
        <div className={`${styles.sidebar} text-primary`}>
            <Navbar style={styles.nav} />
            <FriendsContainer />
            {/*<Friends style={styles.friends} state={props.state.friendsData} />*/}
        </div>
    );
}

export default Sidebar;