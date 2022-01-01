import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div>
            <NavLink to={path} className={styles.dialog} activeClassName={styles.active}>
                <img className={styles.ava} src={props.ava} alt="" />
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;