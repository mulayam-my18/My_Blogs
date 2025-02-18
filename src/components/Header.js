import React from 'react';

function Header() {
  return (
    <header className="bg-light border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://bootcamp.lejhro.com/images/common/c-h/c-h-logo-red.webp" alt="Lejhro Logo" height="25" />
          </a>
          <div className="dropdown">
          <button type="button" className="btn btn-dark ps-4 pe-4 dropdown-toggle" data-bs-toggle="dropdown">
            Cources
          </button>
            <ul className="dropdown-menu">
              <li className="dropdown-header h2">Bootcamp</li>
              <li><a className="dropdown-item" href="#">Link 1</a></li>
              <li><a className="dropdown-item" href="#">Link 2</a></li>
              <li><a className="dropdown-item" href="#">Link 3</a></li>
            </ul>
          </div>
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Refer And Earn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Free Masterclass</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Enterprise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hire from Lejhro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">tutorials</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item fw-bold"><a className='text-decoration-none' href="/">Home</a></li>
            <li className="breadcrumb-item fw-bold"><a className='text-decoration-none' href="/blog">Blog</a></li>
            <li className="breadcrumb-item fw-bold active">How Data Analytics Helps in Entrepreneurship</li>
          </ol>
          <style>{`
            .breadcrumb-item + .breadcrumb-item::before {
              content: " > ";
            }
           `}</style> 
        </nav>
      </div>
    </header>
  );
}

export default Header