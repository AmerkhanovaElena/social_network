import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={`${styles.item}`}>
            <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
            {props.message}
            <div className="">
                <span>like ({props.likesCount})</span>
            </div>
        </div>
    );
}

export default Post;