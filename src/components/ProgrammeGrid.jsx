import { useState } from 'react';
import { aims, programmes } from '../data';

const institutes = [...new Set(programmes.map((p) => p.institute))];

export default function ProgrammeGrid({ onOpenModal }) {
  const base = import.meta.env.BASE_URL;
  const [aimFilter, setAimFilter] = useState('all');
  const [instituteFilter, setInstituteFilter] = useState('all');

  const filtered = programmes.filter(
    (p) =>
      (aimFilter === 'all' || p.aim === aimFilter) &&
      (instituteFilter === 'all' || p.institute === instituteFilter)
  );

  const isFiltered = aimFilter !== 'all' || instituteFilter !== 'all';
  const clearAll = () => { setAimFilter('all'); setInstituteFilter('all'); };

  const chip = (key, label, active, onClick) => (
    <button
      key={key}
      type="button"
      className={`filter-chip${active ? ' is-active' : ''}`}
      aria-pressed={active}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <section className="programme-section" id="programmes">
      <div className="container">
        <h2 className="section-title">Start With Your Aim, Not the Institute</h2>
        <p className="section-intro section-intro--center">
          Project management is not one career, so these are not six versions of the same programme.
          Filter by what you want out of it, or by the institute you already have in mind.
        </p>

        <div className="filter-bar">
          <div className="filter-row">
            <span className="filter-label" id="filter-outcome">Outcome</span>
            <div className="filter-chips" role="group" aria-labelledby="filter-outcome">
              {chip('aim-all', 'All outcomes', aimFilter === 'all', () => setAimFilter('all'))}
              {aims.map((a) => chip(a.id, a.label, aimFilter === a.id, () => setAimFilter(a.id)))}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-label" id="filter-institute">Institute</span>
            <div className="filter-chips" role="group" aria-labelledby="filter-institute">
              {chip('inst-all', 'All institutes', instituteFilter === 'all', () => setInstituteFilter('all'))}
              {institutes.map((i) => chip(i, i, instituteFilter === i, () => setInstituteFilter(i)))}
            </div>
          </div>

          <p className="filter-status" role="status">
            Showing {filtered.length} of {programmes.length} programmes
            {isFiltered && (
              <button type="button" className="link-btn filter-clear" onClick={clearAll}>Clear filters</button>
            )}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No programme matches that combination. Try a different institute, or clear the filters.</p>
            <button type="button" className="btn btn-secondary" onClick={clearAll}>Clear filters</button>
          </div>
        ) : (
          aims.map((aim) => {
            const matching = filtered.filter((p) => p.aim === aim.id);
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
                            src={prog.logo.startsWith('/') ? `${base}${prog.logo.replace(/^\//, '')}` : prog.logo}
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

                      <ul className="prog-spec">
                        <li><span>Duration</span><strong>{prog.duration}</strong></li>
                        <li><span>Starts</span><strong>{prog.startDate}</strong></li>
                        <li><span>Fee</span><strong>{prog.fee}</strong></li>
                      </ul>

                      <p className="prog-desc">{prog.outcome}</p>
                      <p className="prog-bestfor"><strong>Best for:</strong> {prog.bestFor}</p>

                      {prog.highlights?.length > 0 && (
                        <ul className="prog-chips">
                          {prog.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      )}

                      <dl className="prog-facts">
                        <div><dt>Eligibility</dt><dd>{prog.eligibilityShort}</dd></div>
                        <div><dt>Campus</dt><dd>{prog.campusShort}</dd></div>
                      </dl>

                      {prog.note && <p className="prog-note">{prog.note}</p>}

                      <div className="prog-cta">
                        <button type="button" className="btn btn-primary btn-block" onClick={() => onOpenModal('brochure', prog.id)}>Download Brochure</button>
                        <button type="button" className="btn btn-outline btn-block" onClick={() => onOpenModal('callback', prog.id)}>Talk to an Advisor</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
