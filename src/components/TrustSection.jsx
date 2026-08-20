import { testimonials, faculty } from '../data';

export default function TrustSection() {
  return (
    <section className="trust-section" id="faculty">
      <div className="container">
        <h2 className="section-title">Who You Will Learn With, and From</h2>

        {testimonials.length > 0 && (
          <>
            <h3 className="sub-section-title">What Past Participants Say</h3>
            <p className="section-intro">
              Engineers, IT leads and functional managers who took one of these programmes while holding down the job.
            </p>
            <div className="testimonial-cards">
              {testimonials.map((t, index) => (
                <figure key={index} className="testimonial-card">
                  <blockquote className="quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="author-info">
                    <strong>{t.author}</strong>
                    <span>{t.title}</span>
                    <span className="tag">{t.programme}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        {faculty.length > 0 && (
          <div className="faculty">
            <h3 className="sub-section-title">Programme Directors &amp; Faculty</h3>
            <p className="section-intro">
              Each programme is led by faculty from its own institute &mdash; operations, construction management,
              information systems and quantitative methods, depending on where the programme puts its weight.
            </p>
            <div className="faculty-list">
              {faculty.map((f, idx) => (
                <div key={idx} className="faculty-card">
                  <div className="faculty-avatar">
                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(f.name.replace(/^(Prof\.|Dr\.)\s*/, ''))}&background=00008C&color=fff`} alt={f.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                  </div>
                  <div className="faculty-info">
                    <strong>{f.name}</strong>
                    <span>{f.institute}</span>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
