<header className="navbar">
  <div className="logo">
    <img src="/logo.png" alt="Unity SACCO" />
    <div>
      <h2>UNITY SACCO</h2>
      <span>Your SACCO For All Seasons</span>
    </div>
  </div>

  <nav className="nav-menu">
    <a href="/">Home</a>
    <a href="#about">About Us</a>

    {/* PRODUCTS DROPDOWN */}
    <div className="dropdown">
      <button className="dropbtn">
        Products ▼
      </button>

      <div className="dropdown-content">
        <a href="#">Savings Accounts</a>
        <a href="#">Fixed Deposits</a>
        <a href="#">Development Loans</a>
        <a href="#">Emergency Loans</a>
        <a href="#">School Fees Loans</a>
      </div>
    </div>

    <a href="#services">Services</a>

    {/* MEMBERSHIP DROPDOWN */}
    <div className="dropdown">
      <button className="dropbtn">
        Membership ▼
      </button>

      <div className="dropdown-content">
        <a href="#">Join SACCO</a>
        <a href="#">Membership Benefits</a>
        <a href="#">Requirements</a>
        <a href="#">Downloads</a>
      </div>
    </div>

    <a href="#news">News</a>
    <a href="#contact">Contact Us</a>
  </nav>

  <div className="nav-buttons">
    <button className="login-btn">
      Login
    </button>

    <button className="join-btn">
      Join Now
    </button>
  </div>
</header>