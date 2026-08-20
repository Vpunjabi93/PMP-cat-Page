import { programmes } from '../data';

export default function WhereYouWillLearn() {
  const base = import.meta.env.BASE_URL;
  const withCampusPhotos = programmes.filter((prog) => prog.campusImage);

  if (withCampusPhotos.length === 0) return null;

  return (
    <section className="campus" id="campuses">
      <div className="container">
        <h2 className="section-title">Where You Will Learn</h2>
        <p className="section-intro" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Campus immersion runs from two days to five, and is compulsory on some programmes and optional on others.
          Travel and accommodation are at your own cost throughout.
        </p>
        <div className="campus-grid">
          {withCampusPhotos.map((prog) => (
            <figure key={prog.id} className="campus-card">
              <img
                src={prog.campusImage.startsWith('/') ? `${base}${prog.campusImage.replace(/^\//, '')}` : prog.campusImage}
                alt={`${prog.institute} campus`}
                loading="lazy"
              />
              <figcaption>
                {prog.institute}
                <span className="campus-detail">{prog.campusImmersion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
