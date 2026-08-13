import { useState } from 'react';
import { programmes } from '../data';

export default function ComparisonTable({ onOpenModal }) {
  // Select the first 3 programmes by default
  const [selectedIds, setSelectedIds] = useState([
    programmes[0]?.id, 
    programmes[1]?.id, 
    programmes[2]?.id
  ].filter(Boolean));

  // Handle changing a column
  const handleSelect = (index, newId) => {
    const newSelectedIds = [...selectedIds];
    newSelectedIds[index] = newId;
    setSelectedIds(newSelectedIds);
  };

  // Get the selected programme objects
  const selectedProgrammes = selectedIds.map(id => programmes.find(p => p.id === id)).filter(Boolean);

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
                {selectedProgrammes.map((p, index) => (
                  <th key={index}>
                    <select 
                      className="compare-select" 
                      value={p.id} 
                      onChange={(e) => handleSelect(index, e.target.value)}
                      aria-label={`Select programme for column ${index + 1}`}
                    >
                      {programmes.map((prog) => (
                        <option 
                          key={prog.id} 
                          value={prog.id}
                          disabled={selectedIds.includes(prog.id) && prog.id !== p.id}
                        >
                          {prog.institute}
                        </option>
                      ))}
                    </select>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">Duration</td>
                {selectedProgrammes.map((p, index) => <td key={index}>{p.duration}</td>)}
              </tr>
              <tr>
                <td className="row-header">Campus Immersion</td>
                {selectedProgrammes.map((p, index) => <td key={index}>{p.campusImmersion}</td>)}
              </tr>
              <tr>
                <td className="row-header">Fee (excl. GST)</td>
                {selectedProgrammes.map((p, index) => <td key={index}>{p.fee}</td>)}
              </tr>
              <tr>
                <td className="row-header">Batch Starts</td>
                {selectedProgrammes.map((p, index) => <td key={index}>{p.startDate}</td>)}
              </tr>
              <tr>
                <td className="row-header">Action</td>
                {selectedProgrammes.map((p, index) => (
                  <td key={index}>
                    <button type="button" className="link-btn" onClick={() => onOpenModal('brochure', p.id)}>
                      Download Brochure &rarr;
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footnote" style={{ marginTop: '24px' }}>
          <p>Application/Registration fees (₹15,000–₹25,000 depending on programme) are separate and payable at the time of application. EMI options available — terms offered by TimesPro, not the partner institute.</p>
          <button type="button" className="btn btn-secondary mt-16" onClick={() => onOpenModal('callback', '')}>Not Ready to Pick One? Request a Callback &rarr;</button>
        </div>
      </div>
    </section>
  );
}
