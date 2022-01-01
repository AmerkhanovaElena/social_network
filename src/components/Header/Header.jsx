import styles from './Header.module.css';
import './../../colors.css'

const Header = () => {
    return (
        <header className={`${styles.header} secondary-color`}>
            <img src='https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' />
        </header>
    );
}

export default Header;