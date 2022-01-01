import styles from './Users.module.css'
import * as axios from 'axios';
import userDefaultPhoto from '../../assets/images/user.png'
import React from 'react';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    // debugger;
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return <div>
            <div>
                <span className={styles.selectedPage}>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {this.props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small ? user.photos.small : userDefaultPhoto} className={styles.ava}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.caption}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
            </div>)}
        </div>
    }
}

const FUsers = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger;
            props.setUsers(response.data.items);
        })
    }

    /*{
                    id: 1,
                    name: "Elena A.",
                    avaUrl: "https://www.treehugger.com/thmb/cCuTgDbViqbpGbVemWrNAnLqgDw=/660x660/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__08__reflective-sunset-be415c8fac164a69ac27a902f2ac835c.jpg",
                    caption: "terminally online",
                    followed: false,
                    location: {country: "Russia", city: "Yoshkar-Ola"}
                },
                {
                    id: 2,
                    name: "Maria D.",
                    avaUrl: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
                    caption: "what if we both are red flags",
                    followed: true,
                    location: {country: "Serbia", city: "Loznica"}
                },
                {
                    id: 3, name: "Anastasia S", avaUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
                    caption: "chikkie nuggies", followed: false, location: {country: "Russia", city: "Shchelkovo"}
                },*/

    return <div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small ? user.photos.small : userDefaultPhoto} className={styles.ava}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.caption}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;