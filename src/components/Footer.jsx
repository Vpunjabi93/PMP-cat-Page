export default function Footer({ onOpenModal }) {
  return (
    <>
      <section className="footer-cta" style={{ background: '#00008C', padding: '60px 0', color: '#fff' }}>
        <div className="container text-center">
          <h2 className="section-title text-white" style={{ color: '#fff' }}>Ready to Take the Next Step in Your Leadership Journey?</h2>
          <div className="footer-actions" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px' }}>
            <div className="action-box" style={{ flex: '1', minWidth: '280px', maxWidth: '350px' }}>
              <button type="button" className="btn btn-secondary-white btn-block" onClick={() => onOpenModal('callback', '')}>Request a Callback &rarr;</button>
              <span className="microcopy" style={{ display: 'block', marginTop: '12px', fontSize: '14px', opacity: 0.8 }}>Discuss your experience and career goals—we'll help you find the right IIM.</span>
            </div>
            <div className="action-box" style={{ flex: '1', minWidth: '280px', maxWidth: '350px' }}>
              <button type="button" className="btn btn-primary-white btn-block" onClick={() => onOpenModal('brochure', '')}>Download Brochure &rarr;</button>
              <span className="microcopy" style={{ display: 'block', marginTop: '12px', fontSize: '14px', opacity: 0.8 }}>Apply directly and secure your seat in the upcoming batch.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" style={{ padding: '40px 0', background: '#FAFAFA', borderTop: '1px solid #EAEAEA' }}>
        <div className="container site-footer-inner" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
          <div className="site-footer-brand" style={{ maxWidth: '600px' }}>
            <span className="logo logo-sm" style={{ display: 'block', marginBottom: '16px' }}>TimesPro</span>
            <p style={{ fontSize: '14px', color: '#666' }}>TimesPro is the delivery partner for these programmes. Certificates are awarded by the respective partner institutes (IIM Calcutta, IIM Indore, IIM Kashipur, IIM Nagpur). EMI and financing, where offered, are services of TimesPro and not the partner institute.</p>
          </div>
          <nav className="site-footer-links" aria-label="Footer" style={{ display: 'flex', gap: '20px' }}>
            <a href="#" rel="noopener" style={{ color: '#333', fontSize: '14px' }}>Privacy Policy</a>
            <a href="#" rel="noopener" style={{ color: '#333', fontSize: '14px' }}>Terms of Use</a>
            <a href="#" rel="noopener" style={{ color: '#333', fontSize: '14px' }}>Contact</a>
          </nav>
        </div>
        <div className="container site-footer-bottom" style={{ borderTop: '1px solid #EAEAEA', paddingTop: '24px', fontSize: '13px', color: '#999' }}>
          <span id="footerYear">© {new Date().getFullYear()}</span> TimesPro. All rights reserved. Fees and start dates are indicative and subject to change by the partner institutes.
        </div>
      </footer>
    </>
  );
}
