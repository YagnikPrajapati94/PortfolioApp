import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`container-fluid  ${scrolled ? 'nav-scrolled shadow-sm' : 'bgcolor'}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand text-uppercase logo" href="#">Y🅰️gnik</a>
              <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto nav-color gap-4 mb-lg-0">
                  <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Skills</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Project</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
