import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/> {/*state={props.state.sidebar}*/}
            <div className='app-wrapper-content primary-color text-primary'>
                <Route exact path='/'
                       render={() => <Profile/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
