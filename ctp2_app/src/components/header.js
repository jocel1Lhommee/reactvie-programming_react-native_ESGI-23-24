import { Link } from 'react-router-dom';
import esgi from '../img/esgi.jpg';

function Header() {
    return (<header>
        <nav>
            <a href="/" ><img src={esgi} alt="log_esgi"></img></a>
            <Link to="/propos"> A propos !</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/invite"> Liste des invités</Link>
        </nav></header>)
}
export default Header;