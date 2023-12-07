import '../../style/NavBar.css'
import {Link, useLocation} from 'react-router-dom'
import { GiBasketballBasket } from "react-icons/gi";

const NavBar = () => {
const currentPage = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className='navbar-header'>MyFantasyDraft</h1>
        <h1 className='basketball-icon'><GiBasketballBasket /></h1>
        <div className="container"></div>
            <div className="navbar-brand">
              <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >Home
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <div className="nav-item nav-link">
                      <Link
                      to="/players"
                      className={currentPage === '/' ? 'nav-link' : 'nav-link'}
                      >Players
                      </Link>
                    </div>
                    <div className="nav-item nav-link">
                      <Link
                      to="/login"
                      className={currentPage === '/' ? 'nav-link' : 'nav-link'}
                      >Login
                      </Link>
                    </div>
                    <div className="nav-item nav-link">
                      <Link
                      to="/profile"
                      className= {currentPage === '/' ? 'nav-link' : 'nav-link'}
                      >Profile
                      </Link>
                    </div>
                </div>
            </div>
    </nav>
  );
}
export default NavBar;
