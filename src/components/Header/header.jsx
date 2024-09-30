import"./header.css";
import { Link } from "react-router-dom";

function NavigationHeader() {
    return (
        <div className="nav-header">
            <h2 className="title">MUTC</h2>
            <nav className="header-title">
                <ol className="navigation-list">
                    <li className="bars">
                        <a href="/" className="link">
                        Home
                        </a>
                    </li>

                    <li className="bars">
                        <Link to="/events" className="link">
                        events</Link>
                    </li>
                    <li className="bars">
                        <Link to="/leadership" className="link">
                        leadership</Link>
                    </li>
                </ol>
            </nav>

        </div>
    )
}



function Header(){
    return(
        <NavigationHeader/>
    )

}
export default Header;