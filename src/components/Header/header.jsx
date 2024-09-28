import"./header.css";
function NavigationHeader() {
    return (
        <div className="nav-header">
            <h2 className="title">MUTC</h2>
            <nav className="header-title">
                <ol className="navigation-list">
                    <li className="bars"><a href="#" className="link">Home</a></li>
                    <li className="bars"><a href="#" className="link">leadership</a></li>
                    <li className="bars"><a href="#" className="link">Tracks</a></li>
                    <li className="bars"><a href="#" className="link">events</a></li>
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