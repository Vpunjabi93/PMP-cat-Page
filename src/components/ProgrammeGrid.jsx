import { aims, programmes } from '../data';

export default function ProgrammeGrid({ onOpenModal }) {
  const base = import.meta.env.BASE_URL;
  const resolve = (path) => (path.startsWith('/') ? `${base}${path.replace(/^\//, '')}` : path);

  return (
    <section className="programme-section" id="programmes">
      <div className="container">
        <h2 className="section-title">Start With Your Aim, Not the Institute</h2>
        <p className="section-intro section-intro--center">
          Project management is not one career, so these are not six versions of the same programme.
          Find the aim that sounds like yours and start there.
        </p>

        {aims.map((aim) => {
          const matching = programmes.filter((p) => p.aim === aim.id);
          if (matching.length === 0) return null;

          return (
            <div key={aim.id} className="aim-group">
              <div className="aim-header">
                <h3 className="aim-title">{aim.label}</h3>
                <p className="aim-blurb">{aim.blurb}</p>
              </div>

              <div className="programme-grid">
                {matching.map((prog) => (
                  <div key={prog.id} className="prog-card">
                    <div className="prog-institute">
                      {prog.logo && (
                        <img
                          src={resolve(prog.logo)}
                          alt={prog.institute}
                          className="prog-logo"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                      <span>
                        {prog.institute}
                        {prog.instituteNote && <em className="prog-institute-note">{prog.instituteNote}</em>}
                      </span>
                    </div>

                    <h4 className="prog-title">{prog.name}</h4>
                    {prog.edge && <span className="prog-badge">{prog.edge}</span>}

                    <div className="prog-meta">
                      <span><strong>Duration:</strong> {prog.duration}</span>
                      <span><strong>Format:</strong> {prog.format}</span>
                      <span><strong>Classes:</strong> {prog.schedule}</span>
                      <span className="prog-start"><strong>Batch starts:</strong> {prog.startDate}</span>
                    </div>

                    <p className="prog-desc">
                      {prog.outcome}
                      <br /><br />
                      <strong>Best for:</strong> {prog.bestFor}
                    </p>

                    <dl className="prog-facts">
                      <div><dt>Fee (excl. GST)</dt><dd>{prog.fee}</dd></div>
                      <div><dt>Eligibility</dt><dd>{prog.eligibility}</dd></div>
                      <div><dt>Campus immersion</dt><dd>{prog.campusImmersion}</dd></div>
                      <div><dt>Tools covered</dt><dd>{prog.tools} and more</dd></div>
                    </dl>

                    {prog.note && <p className="prog-note">{prog.note}</p>}

                    <div className="prog-cta">
                      <button type="button" className="btn btn-primary btn-block" onClick={() => onOpenModal('brochure', prog.id)}>Download Brochure</button>
                      <button type="button" className="btn btn-outline btn-block" style={{marginTop: '10px'}} onClick={() => onOpenModal('callback', prog.id)}>Talk to an Advisor</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
