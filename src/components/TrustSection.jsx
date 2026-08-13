import { testimonials, faculty } from '../data';

export default function TrustSection() {
  return (
    <section className="trust-section" id="faculty">
      <div className="container">
        <h2 className="section-title">Join an Elite Network of Leaders</h2>
        <h3 className="sub-section-title">What Our Alumni Say</h3>
        <p className="section-intro">Hear from senior professionals who have transformed their leadership trajectories through these IIM programmes.</p>
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
        <div className="faculty">
          <h3 className="sub-section-title">Programme Directors &amp; Faculty</h3>
          <div className="faculty-list">
            {faculty.map((f, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-info">
                  <strong>{f.name}</strong>
                  <span>{f.institute}</span>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
