import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Context/User";

const Header = () => {
    const [user] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{`Hola ${user.name}`}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Login</Link>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;
  