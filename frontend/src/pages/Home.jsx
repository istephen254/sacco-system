import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Unity SACCO" />

          <div>
            <h2>UNITY SACCO</h2>
            <span>Your SACCO For All Seasons</span>
          </div>
        </div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="join-btn">Join Now</button>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Building Wealth Together</h1>

            <p>
              Join Kenya's trusted SACCO and enjoy affordable loans,
              secure savings, investment opportunities and financial
              freedom.
            </p>

            <div className="hero-buttons">
              <Link to="/register">
                <button className="primary-btn">
                  Open Account
                </button>
              </Link>

              <Link to="/loan-application">
                <button className="secondary-btn">
                  Apply Loan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats">
        <div className="card">
          <h2>15,000+</h2>
          <p>Active Members</p>
        </div>

        <div className="card">
          <h2>KES 2.5B</h2>
          <p>Savings Portfolio</p>
        </div>

        <div className="card">
          <h2>KES 1.8B</h2>
          <p>Loans Issued</p>
        </div>

        <div className="card">
          <h2>20+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <div className="about-text">
          <h2>About Unity SACCO</h2>

          <p>
            Unity SACCO is dedicated to empowering members through
            savings, affordable credit facilities and financial
            education. We strive to improve livelihoods while
            creating sustainable wealth for our members.
          </p>

          <Link to="/about">
            <button className="primary-btn">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Savings Accounts</h3>
            <p>
              Secure and flexible savings plans designed to grow
              your financial future.
            </p>
          </div>

          <div className="service-card">
            <h3>Development Loans</h3>
            <p>
              Affordable financing for projects, businesses and
              personal growth.
            </p>
          </div>

          <div className="service-card">
            <h3>School Fees Loans</h3>
            <p>
              Ensure uninterrupted education for your children.
            </p>
          </div>

          <div className="service-card">
            <h3>Emergency Loans</h3>
            <p>
              Quick access to funds when unexpected situations
              arise.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose Unity SACCO?</h2>

        <div className="features">
          <div className="feature-box">
            ✓ Fast Loan Processing
          </div>

          <div className="feature-box">
            ✓ Competitive Dividends
          </div>

          <div className="feature-box">
            ✓ Secure Savings
          </div>

          <div className="feature-box">
            ✓ Mobile Banking
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Members Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Unity SACCO helped me secure a loan and build my
              family home."
            </p>

            <h4>- John Mwangi</h4>
          </div>

          <div className="testimonial">
            <p>
              "Excellent customer service and reliable financial
              support."
            </p>

            <h4>- Mary Wanjiku</h4>
          </div>

          <div className="testimonial">
            <p>
              "The savings plans have helped me achieve my
              investment goals."
            </p>

            <h4>- Peter Kamau</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Financial Journey Today</h2>

        <p>
          Become a member and enjoy affordable financial services.
        </p>

        <Link to="/register">
          <button className="join-btn">
            Become a Member
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3>UNITY SACCO</h3>
          <p>Your SACCO For All Seasons</p>
        </div>

        <p>
          © {new Date().getFullYear()} Unity SACCO. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;