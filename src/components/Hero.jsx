import { useState } from 'react';
import { programmes } from '../data';

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
          <h1>Whatever you want next in project management, one of these six was built for it.</h1>
          <p>Six programmes from IIM Indore, IIM Kozhikode, IIM Nagpur, IIT Delhi, IIT Madras Pravartak and XLRI — from your first credential to running the whole portfolio. Compare them in one place.</p>
          <div className="hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => onOpenModal('brochure', '')}>Get All Six Brochures</button>
            <button type="button" className="btn btn-secondary btn-secondary-white-border" onClick={() => onOpenModal('callback', '')}>Help Me Choose</button>
          </div>
          <ul className="hero-stats" aria-label="Programme highlights">
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </span>
              <span className="hero-stat-body"><strong>6</strong><span>Programmes to compare</span></span>
            </li>
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </span>
              <span className="hero-stat-body"><strong>6</strong><span>IIM, IIT &amp; XLRI partners</span></span>
            </li>
            <li className="hero-stat">
              <span className="hero-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <span className="hero-stat-body"><strong>6&ndash;10</strong><span>Months, alongside your job</span></span>
            </li>
          </ul>
        </div>
        <div className="hero-form-wrapper">
          <div className="hero-form-container">
            <h3 className="form-title">Not Sure Which One?</h3>
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
                  <option value="1-2 years">1-2 years</option>
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
                  {programmes.map((prog) => (
                    <option key={prog.id} value={prog.id}>{prog.institute}</option>
                  ))}
                </select>
              </div>
              <div className="form-group form-consent">
                <input type="checkbox" id="heroConsent" required />
                <label htmlFor="heroConsent">I authorise TimesPro and its representatives to contact me regarding this enquiry via phone, email and WhatsApp, and I agree to the Privacy Policy.</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Talk to an Advisor</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
