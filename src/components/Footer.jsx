export default function Footer({ onOpenModal }) {
  return (
    <>
      <section className="footer-cta">
        <div className="container text-center">
          <h2 className="section-title text-white">Still Weighing Up Six Options?</h2>
          <div className="footer-actions">
            <div className="action-box">
              <button type="button" className="btn btn-secondary-white btn-block" onClick={() => onOpenModal('callback', '')}>Talk to an Advisor &rarr;</button>
              <span className="microcopy">Tell us your experience and where you want to be in two years. We&rsquo;ll narrow six down to two.</span>
            </div>
            <div className="action-box">
              <button type="button" className="btn btn-primary-white btn-block" onClick={() => onOpenModal('brochure', '')}>Get All Six Brochures &rarr;</button>
              <span className="microcopy">Full curriculum, fee structure and eligibility for every programme, in one go.</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div className="site-footer-brand">
            <img src="https://timespro.com/icons/Timespro_logo.svg" alt="TimesPro" style={{ height: '30px', marginBottom: '16px' }} />
            <p>TimesPro is the delivery partner for these programmes. Certificates are awarded by the respective partner institutes: IIM Indore, IIM Kozhikode, IIM Nagpur, CEP IIT Delhi, IITM Pravartak and XLRI Jamshedpur. Career services, PMP exam preparation, GenAI certifications, EMI and financing are services of TimesPro and not of the partner institutes.</p>
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
