import './style.css';
import logo from './asset/wearit_logo.png'

export default function Navigasi(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                    </a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                    >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            Service
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <button type="button" className="btn btn-primary">
                        Log in
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                        sign up
                    </button>
                    </div>
                </div>
            </nav>
        </>
    )
}