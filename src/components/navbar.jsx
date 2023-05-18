import './header.css'
export default function NavbarTop() {
    return(
        <nav className="navbar sticky-top navbar-expand-lg text-light py-4 border-b bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand text-light" href="#">&lt;code/&gt;</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex">

                </div>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <a className="nav-link nav-cus" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link nav-cus" href="#">Projects</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link nav-cus" href="#">Contact</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link nav-cus" href="#"><i className='fa-brands fa-linkedin'></i></a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}