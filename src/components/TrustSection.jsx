import { testimonials, faculty } from '../data';

export default function TrustSection() {
  return (
    <section className="trust-section reveal" id="faculty">
      <div className="container">
        <h2 className="section-title">Join an Elite Network of Leaders</h2>

        <div className="testimonials">
          <h3 className="sub-section-title">What Our Alumni Say</h3>
          <p className="section-intro">Hear from senior professionals who have transformed their leadership trajectories through these IIM programmes.</p>

          <div className="testimonial-cards" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {testimonials.map((t, index) => (
              <figure key={index} className="testimonial-card" style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #EAEAEA' }}>
                <blockquote className="quote" style={{ fontStyle: 'italic', marginBottom: '16px' }}>"{t.quote}"</blockquote>
                <figcaption className="author-info">
                  <strong>{t.author}</strong><br/>
                  <span style={{ fontSize: '14px', color: '#666' }}>{t.title}</span><br/>
                  <span className="tag" style={{ fontSize: '12px', fontWeight: 'bold', color: '#DA2128' }}>{t.programme}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="faculty" style={{ marginTop: '60px' }}>
          <h3 className="sub-section-title">Programme Directors & Faculty</h3>
          <div className="faculty-list" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {faculty.map((f, idx) => (
              <div key={idx} className="faculty-card" style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #EAEAEA' }}>
                <div className="faculty-info">
                  <strong style={{ display: 'block', fontSize: '18px', marginBottom: '8px' }}>{f.name}</strong>
                  <span style={{ color: '#00008C', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{f.institute}</span>
                  <p style={{ fontSize: '14px', margin: 0 }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
