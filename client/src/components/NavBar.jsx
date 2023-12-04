export default function NavBar () {
    return (
        <nav className="nav">
            <a href="/" className="home">Home</a>
            <ul>
                <li>
                    <a href="/players">Players</a>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    )
}