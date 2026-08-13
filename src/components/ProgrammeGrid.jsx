import { programmes } from '../data';

export default function ProgrammeGrid({ onOpenModal }) {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="programme-section" id="programmes">
      <div className="container">
        <h2 className="section-title">Senior Management Programmes at a Glance</h2>
        <div className="programme-grid" id="programmeGrid">
          {programmes.map((prog) => (
            <div key={prog.id} className="prog-card">
              <div className="prog-institute">
                <img src={prog.logo.startsWith('/') ? `${base}${prog.logo.replace(/^\//, '')}` : prog.logo} alt={prog.institute} className="prog-logo" onError={(e) => { e.target.style.display = 'none'; }} />
                {prog.institute}
              </div>
              <h3 className="prog-title">{prog.name}</h3>
              <span className="prog-badge">10+ Years Experience</span>
              <div className="prog-meta">
                <span><strong>Duration:</strong> {prog.duration}</span>
                <span><strong>Format:</strong> {prog.format}</span>
                <span className="prog-start">
                  <strong>Batch starts:</strong> {prog.startDate}
                </span>
              </div>
              <p className="prog-desc">{prog.outcome}<br/><br/><strong>Best for:</strong> {prog.bestFor}</p>
              <div className="prog-cta">
                <button type="button" className="btn btn-primary btn-block" onClick={() => onOpenModal('brochure', prog.id)}>Download Brochure</button>
                <button type="button" className="btn btn-outline btn-block" style={{marginTop: '10px'}} onClick={() => onOpenModal('callback', prog.id)}>Request a Callback</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
