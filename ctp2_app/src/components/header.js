import { Link } from 'react-router-dom';
import esgi from '../img/esgi.jpg';
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <a href="/"><img src={esgi} alt="log_esgi" className="logo" /></a>
                <ul className="nav-links">
                    <li>
                        <Link to="/propos">A propos !</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/invite">Liste des invités</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
