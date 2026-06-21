import "../styles/home.css";
import "../styles/contact.css";

function Contact() {
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="#products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="join-btn">Join Now</button>
        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have a question about savings, loans, or membership?
          Our team is ready to help.
        </p>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-body">
        <div className="contact-info">
          <div className="info-card">
            <h3>Visit Us</h3>
            <p>Unity SACCO House, Moi Avenue<br />Nairobi, Kenya</p>
          </div>
          <div className="info-card">
            <h3>Call Us</h3>
            <p>+254 700 123 456<br />Mon – Fri, 8am – 5pm</p>
          </div>
          <div className="info-card">
            <h3>Email Us</h3>
            <p>support@unitysacco.co.ke</p>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send a Message</h3>
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>UNITY SACCO</h3>
        <p>Empowering Members Through Financial Growth</p>
      </footer>
    </>
  );
}

export default Contact;