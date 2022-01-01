import stylesSidebar from './../Sidebar.module.css'
import Friends from "./Friends";
import {connect} from "react-redux";

/*const FriendsContainerOld = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().sidebar;

                    return <Friends style={stylesSidebar.friends} friendsData={state.friendsData}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        style: stylesSidebar.friends,
        friendsData: state.sidebar.friendsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;