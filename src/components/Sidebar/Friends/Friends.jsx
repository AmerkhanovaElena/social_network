import styles from './Friends.module.css'
import './../../../colors.css'
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = props.friendsData.map(friend => <Friend ava={friend.ava} name={friend.name} />)

    return (
        <div className={`${props.style} text-primary primary-color`}>
            <h2 >Friends</h2>
            <div className={styles.container}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;