export default function Footer({ onOpenModal }) {
  return (
    <>
      <section className="footer-cta">
        <div className="container text-center">
          <h2 className="section-title text-white">Ready to Take the Next Step in Your Leadership Journey?</h2>
          <div className="footer-actions">
            <div className="action-box">
              <button type="button" className="btn btn-secondary-white btn-block" onClick={() => onOpenModal('callback', '')}>Request a Callback &rarr;</button>
              <span className="microcopy">Discuss your experience and career goals — we'll help you find the right IIM.</span>
            </div>
            <div className="action-box">
              <button type="button" className="btn btn-primary-white btn-block" onClick={() => onOpenModal('brochure', '')}>Download Brochure &rarr;</button>
              <span className="microcopy">Get detailed curriculum, fee structure, and eligibility in one document.</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div className="site-footer-brand">
            <span className="logo logo-sm">TimesPro</span>
            <p>TimesPro is the delivery partner for these programmes. Certificates are awarded by the respective partner institutes (IIM Calcutta, IIM Indore, IIM Kashipur, IIM Nagpur). EMI and financing, where offered, are services of TimesPro and not the partner institute.</p>
          </div>
          <nav className="site-footer-links" aria-label="Footer">
            <a href="#" rel="noopener">Privacy Policy</a>
            <a href="#" rel="noopener">Terms of Use</a>
            <a href="#" rel="noopener">Contact</a>
          </nav>
        </div>
        <div className="container site-footer-bottom">
          <span>&copy; {new Date().getFullYear()} TimesPro. All rights reserved. Fees and start dates are indicative and subject to change by the partner institutes.</span>
        </div>
      </footer>
    </>
  );
}
