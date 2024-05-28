import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="TAISHOW Logo" className="footer-logo" />
          <p className="footer-description">
            Bringing the best movie experience to you.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/cinemas">Cinemas</a>
            </li>
            <li>
              <a href="/member">Member Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
