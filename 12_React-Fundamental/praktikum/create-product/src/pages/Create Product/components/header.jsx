export default function Header(){
    return(
        <>
        {/* navigasi bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Simple header
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
            >
                <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    FAQs
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </>
    )
}