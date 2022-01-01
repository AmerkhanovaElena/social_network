import styles from './MyPosts.module.css';
import './../../../colors.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    
    let posts =
        props.postsData.map( post => <Post message={post.message} likesCount={post.likesCount} /> )

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div className={`${styles.postsBlock} primary-color text-primary`}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div className="">
                        <textarea cols="30" rows="6" onChange={ onPostChange } ref={newPost}
                                value={props.newPostText}></textarea>
                    </div>
                    <div className="">
                        <button onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {posts}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;