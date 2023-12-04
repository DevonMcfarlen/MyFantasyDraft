import '../../style/NavBar.css';

const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container"></div>
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link" href="/cards">Players</a>
                    <a class="nav-item nav-link" href="/profile">Profile</a>
                </div>
        </div>
    </nav>
  );
}

export default NavBar;