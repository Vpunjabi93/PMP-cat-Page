import { useState } from 'react';
import { programmes } from '../data';

const ROWS = [
  { label: 'Duration', key: 'duration' },
  { label: 'Classes', key: 'schedule' },
  { label: 'Eligibility', key: 'eligibility' },
  { label: 'Campus immersion', key: 'campusImmersion' },
  { label: 'Tools covered', key: 'tools' },
  { label: 'Fee (excl. GST)', key: 'fee' },
  { label: 'Batch starts', key: 'startDate' },
  { label: 'You end up with', key: 'credential' },
];

export default function ComparisonTable({ onOpenModal }) {
  const [selectedIds, setSelectedIds] = useState([
    programmes[0]?.id,
    programmes[1]?.id,
    programmes[2]?.id
  ].filter(Boolean));

  const handleSelect = (index, newId) => {
    const newSelectedIds = [...selectedIds];
    newSelectedIds[index] = newId;
    setSelectedIds(newSelectedIds);
  };

  const selectedProgrammes = selectedIds.map(id => programmes.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="comparison-section reveal" id="comparison">
      <div className="container">
        <h2 className="section-title">Put Any Three Side by Side</h2>
        <p className="section-intro section-intro--center">
          Fees run from &#8377;1,45,000 to &#8377;1,98,000 and commitments from six months to ten.
          Swap the columns to compare the ones you are actually weighing up.
        </p>
        <div className="table-responsive" tabIndex="0" role="group" aria-label="Programme comparison table, scrollable horizontally">
          <table className="comparison-table inverted-table" id="comparisonTable">
            <caption className="sr-only">Comparison of selected project management programmes by duration, schedule, eligibility, fee, start date and credential.</caption>
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
              {ROWS.map((row) => (
                <tr key={row.key}>
                  <td className="row-header">{row.label}</td>
                  {selectedProgrammes.map((p, index) => <td key={index}>{p[row.key]}</td>)}
                </tr>
              ))}
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
          <p>Fees shown exclude GST. Application and registration fees are separate and payable when you apply &mdash; they range from &#8377;1,000 at the two IIT programmes to &#8377;13,000 at XLRI. EMI options are offered by TimesPro, not the partner institute.</p>
          <button type="button" className="btn btn-secondary mt-16" onClick={() => onOpenModal('callback', '')}>Still Torn Between Two? Talk to an Advisor &rarr;</button>
        </div>
      </div>
    </section>
  );
}
