import { programmes } from '../data';

export default function WhereYouWillLearn() {
  return (
    <section className="campus" id="campuses">
      <div className="container">
        <h2 className="section-title">Where You Will Learn</h2>
        <p className="section-intro" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Experience world-class infrastructure and academic excellence during your campus immersions.
        </p>
        <div className="campus-grid">
          {programmes.map((prog) => (
            <figure key={prog.id} className="campus-card">
              <img 
                src={prog.campusImage} 
                alt={`${prog.institute} Campus`} 
                loading="lazy"
                onError={(e) => { 
                  e.target.src = `https://placehold.co/600x400/eaebec/1f2937?text=${encodeURIComponent(prog.institute)}+Campus`; 
                }}
              />
              <figcaption>{prog.institute}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
