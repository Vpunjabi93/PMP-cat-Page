import { programmes } from '../data';

export default function ComparisonTable({ onOpenModal }) {
  return (
    <section className="comparison-section reveal" id="comparison">
      <div className="container">
        <h2 className="section-title">Compare the Programmes Side by Side</h2>
        <p className="section-intro section-intro--center">Evaluate duration, campus immersions, and investment to find your ideal fit.</p>
        <div className="table-responsive" tabIndex="0" role="group" aria-label="Programme comparison table, scrollable horizontally">
          <table className="comparison-table inverted-table" id="comparisonTable">
            <caption className="sr-only">Comparison of selected Senior Management programmes by institute, duration, format, fee and start date.</caption>
            <thead>
              <tr>
                <th className="row-header">Feature</th>
                {programmes.map(p => <th key={p.id}>{p.institute}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">Duration</td>
                {programmes.map(p => <td key={p.id}>{p.duration}</td>)}
              </tr>
              <tr>
                <td className="row-header">Campus Immersion</td>
                {programmes.map(p => <td key={p.id}>{p.campusImmersion}</td>)}
              </tr>
              <tr>
                <td className="row-header">Fee (excl. GST)</td>
                {programmes.map(p => <td key={p.id}>{p.fee}</td>)}
              </tr>
              <tr>
                <td className="row-header">Batch Starts</td>
                {programmes.map(p => <td key={p.id}>{p.startDate}</td>)}
              </tr>
              <tr>
                <td className="row-header">Action</td>
                {programmes.map(p => (
                  <td key={p.id}>
                    <button type="button" className="link-btn" onClick={() => onOpenModal('brochure', p.id)}>
                      Download Brochure &rarr;
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footnote">
          <p>Application/Registration fees (₹15,000–₹25,000 depending on programme) are separate and payable at the time of application. EMI options available — terms offered by TimesPro, not the partner institute.</p>
          <button type="button" className="btn btn-secondary mt-16" onClick={() => onOpenModal('callback', '')}>Not Ready to Pick One? Request a Callback &rarr;</button>
        </div>
      </div>
    </section>
  );
}
