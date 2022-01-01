import styles from './Navbar.module.css';
import './../../../colors.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={`${props.style} primary-color`}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;