import './components.css';

export function Portfolio() {
  return (
    <section className="template-section portfolio-section">
      <p className="eyebrow eyebrow-portfolio">Portfolio Section</p>
      <h2>Showcase your featured work</h2>
      <div className="portfolio-grid">
        <div className="portfolio-card"></div>
        <div className="portfolio-card"></div>
        <div className="portfolio-card"></div>
      </div>
    </section>
  );
}
