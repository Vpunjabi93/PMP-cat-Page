export default function Header({ onOpenModal }) {
  return (
    <>
      <header className="top-nav">
        <div className="nav-container">
          <div className="brand-lockup">
            <a href="#top" className="brand-link" aria-label="TimesPro home">
              <img src="https://timespro.com/icons/Timespro_logo.svg" alt="TimesPro" className="brand-logo brand-logo--timespro" />
            </a>
          </div>
          <span className="top-nav-tag">Senior Management Programmes</span>
        </div>
      </header>
      <nav className="sticky-nav" id="stickyNav" aria-label="Section navigation">
        <div className="nav-container">
          <a href="#top" className="brand-link" aria-label="TimesPro home">
            <img src="https://timespro.com/icons/Timespro_logo.svg" alt="TimesPro" className="brand-logo brand-logo--sticky" />
          </a>
          <div className="sticky-links">
            <a href="#programmes">Programmes</a>
            <a href="#comparison">Compare</a>
            <a href="#faculty">Alumni & Faculty</a>
            <a href="#faq">FAQ</a>
          </div>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onOpenModal('callback', '')}>Request a Callback</button>
        </div>
      </nav>
    </>
  );
}
