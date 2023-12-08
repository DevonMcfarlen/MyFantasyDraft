import '../../style/NavBar.css'
import {Link, useLocation} from 'react-router-dom'
import { GiBasketballBasket } from "react-icons/gi";
import Auth from '../utils/auth';


const NavBar = () => {
  const currentPage = useLocation().pathname;

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <h1 className='navbar-header'>MyFantasyDraft</h1>
      <h1 className='basketball-icon'><GiBasketballBasket /></h1>
      <div className="container"></div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link id='navLink'
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link id='navLink'
              to="/players"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Players
            </Link>
            {Auth.loggedIn() ? (
              <Link id='navLink'
                to="/"
                className="nav-link"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link id='navLink'
                to="/login"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                Login
              </Link>
            )}
            <Link id='navLink'
              to="/profile"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Profile
            </Link>
          </div>
        </div>
    </nav>
  );
};



/*

  return (
    <nav className="navbar navbar-expand-lg">
        <h1 className='navbar-header'>MyFantasyDraft</h1>
        <h1 className='basketball-icon'><GiBasketballBasket /></h1>
        <div className="container"></div>
            {/* <div >
              <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >Home
              </Link>
            </div> *//*}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <div className="nav-item nav-link" >
                      <Link id='navLink'
                      to="/"
                      className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                      >Home
                      </Link>
                    </div>
                    <div className="nav-item nav-link">
                      <Link id='navLink'
                      to="/players"
                      className={currentPage === '/players' ? 'nav-link' : 'nav-link'}
                      >Players
                      </Link>
                    </div>
                    <div className="nav-item nav-link">
                      <Link id='navLink'
                      to="/login"
                      className={currentPage === '/' ? 'nav-link' : 'nav-link'}
                      >Login
                      </Link>
                    </div>
                    <div className="nav-item nav-link">
                      <Link id='navLink'
                      to="/profile"
                      className= {currentPage === '/' ? 'nav-link' : 'nav-link'}
                      >Profile
                      </Link>
                    </div>
                </div>
            </div>
    </nav>
  );

*/

export default NavBar;
