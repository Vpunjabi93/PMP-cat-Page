import { useState, useEffect } from 'react';

export default function LeadModal({ isOpen, onClose, modalType, selectedProgram }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    programme: ''
  });

  useEffect(() => {
    if (selectedProgram) {
      setFormData(prev => ({ ...prev, programme: selectedProgram }));
    }
  }, [selectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Mock)");
    onClose();
  };

  const title = modalType === 'brochure' ? 'Download Brochure' : 'Request A Callback';
  const subtitle = modalType === 'brochure' 
    ? 'Enter your details to access the full programme brochure.' 
    : 'Tell us a little about yourself and a counsellor will reach out.';

  return (
    <div className="modal-overlay" style={{display: 'flex'}} aria-hidden="true" role="dialog">
      <div className="modal-container">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2 className="form-title">{title}</h2>
        <p className="form-sub">{subtitle}</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="modalName">Name <span className="req" aria-hidden="true">*</span></label>
            <input type="text" id="modalName" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="modalEmail">Email <span className="req" aria-hidden="true">*</span></label>
            <input type="email" id="modalEmail" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="modalPhone">Phone <span className="req" aria-hidden="true">*</span></label>
            <input type="tel" id="modalPhone" required placeholder="10-digit mobile number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="modalExperience">Work Experience <span className="req" aria-hidden="true">*</span></label>
            <select id="modalExperience" required value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})}>
              <option value="" disabled>Select your experience</option>
              <option value="Fresher">Fresher</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10-15 years">10-15 years</option>
              <option value="15+ Years">15+ Years</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="modalProgramme">Interested Programme <span className="req" aria-hidden="true">*</span></label>
            <select id="modalProgramme" required value={formData.programme} onChange={e => setFormData({...formData, programme: e.target.value})}>
              <option value="" disabled>Select a programme</option>
              <option value="Help me decide">Help me decide</option>
              <option value="calcutta">IIM Calcutta Senior Management Programme</option>
              <option value="indore">IIM Indore Senior Management Programme</option>
              <option value="kashipur">IIM Kashipur Senior Management Programme</option>
              <option value="nagpur">IIM Nagpur Senior Management Programme</option>
            </select>
          </div>
          <div className="form-group form-consent">
            <input type="checkbox" id="modalConsent" required />
            <label htmlFor="modalConsent">I authorise TimesPro and its representatives to contact me regarding this enquiry via phone, email and WhatsApp, and I agree to the Privacy Policy.</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">{title}</button>
        </form>
      </div>
    </div>
  );
}
