import { useEffect } from 'react';
import './header.css'
export default function NavbarTop() {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
          
            if (window.scrollY > 0) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return(
        <nav id='navbar' className="navbar fixed-top navbar-expand-lg text-light py-4 border-b bg-body-tertiary">
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