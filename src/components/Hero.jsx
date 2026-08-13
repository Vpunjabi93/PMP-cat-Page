import { useState } from 'react';

export default function Hero({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', experience: '', programme: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Mock)');
  };

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-gradient-overlay" aria-hidden="true"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-eyebrow">Backed by The Times Group</span>
          <h1>Step Into the Leadership roles with confidence by learning Senior Management from top IIMs.</h1>
          <p>Find the Right Fit for Your Leadership Goals.</p>
          <div className="hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => onOpenModal('brochure', '')}>Download Brochure</button>
            <button type="button" className="btn btn-secondary btn-secondary-white-border" onClick={() => onOpenModal('callback', '')}>Request a Callback</button>
          </div>
          <ul className="hero-stats" aria-label="Programme highlights">
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </span>
              <span className="hero-stat-body"><strong>4</strong><span>Certificate programmes</span></span>
            </li>
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </span>
              <span className="hero-stat-body"><strong>4</strong><span>Partner institutes</span></span>
            </li>
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <span className="hero-stat-body"><strong>12</strong><span>Months to complete</span></span>
            </li>
          </ul>
        </div>
        <div className="hero-form-wrapper">
          <div className="hero-form-container">
            <h3 className="form-title">Request A Callback</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="heroName">Name <span className="req">*</span></label>
                <input type="text" id="heroName" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="heroEmail">Email <span className="req">*</span></label>
                <input type="email" id="heroEmail" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="heroPhone">Phone <span className="req">*</span></label>
                <input type="tel" id="heroPhone" required placeholder="10-digit mobile number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="heroExperience">Work Experience <span className="req">*</span></label>
                <select id="heroExperience" required value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})}>
                  <option value="" disabled>Select your experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="2-5 years">2-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10-15 years">10-15 years</option>
                  <option value="15+ Years">15+ Years</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="heroProgramme">Interested Programme <span className="req">*</span></label>
                <select id="heroProgramme" required value={formData.programme} onChange={e => setFormData({...formData, programme: e.target.value})}>
                  <option value="" disabled>Select a programme</option>
                  <option value="Help me decide">Help me decide</option>
                  <option value="calcutta">IIM Calcutta Senior Management Programme</option>
                  <option value="indore">IIM Indore Senior Management Programme</option>
                  <option value="kashipur">IIM Kashipur Senior Management Programme</option>
                  <option value="nagpur">IIM Nagpur Senior Management Programme</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit Details</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
