import styles from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <img src={props.ava} alt="" className={styles.ava} />
            <div>
                <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    );
}

export default Friend;