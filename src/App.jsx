import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgrammeGrid from './components/ProgrammeGrid';
import ComparisonTable from './components/ComparisonTable';
import TrustSection from './components/TrustSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('callback');
  const [selectedProgram, setSelectedProgram] = useState('');

  const openModal = (type, programId = '') => {
    setModalType(type);
    setSelectedProgram(programId);
    setModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('stickyNav');
      if (!nav) return;
      if (window.scrollY > 200) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main id="top">
        <Hero onOpenModal={openModal} />
        <ProgrammeGrid onOpenModal={openModal} />
        <ComparisonTable onOpenModal={openModal} />
        <TrustSection />
        <FAQ />
      </main>
      <Footer onOpenModal={openModal} />
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalType={modalType}
        selectedProgram={selectedProgram}
      />
    </>
  );
}
