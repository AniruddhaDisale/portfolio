import React, { useState, useEffect } from 'react';
import './App.css';

// Direct asset imports — bundled by Vite with 100% path safety on GitHub Pages
import farmtechImg from './assets/farmtech_guru.jpg';
import paperforgeImg from './assets/paperforge.jpg';
import dataflowImg from './assets/dataflow.jpg';
import dinvoiceImg from './assets/dinvoice.jpg';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState('farmtech');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOpenModal = (service = null) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('disaleaniruddha@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const workbenchDemos = {
    farmtech: {
      title: 'FarmTech Guru — Mobile Agro-Engine & Cloud Sync',
      desc: 'Native Android application logic computing crop nutrient requirements, weather diagnostics, and offline-first Firestore synchronization.',
      metrics: [
        { label: 'Platform', value: 'Android / Java' },
        { label: 'Database', value: 'Firebase Firestore' },
        { label: 'Offline Mode', value: '100% Cache Sync' },
        { label: 'Weather Feed', value: 'OpenWeatherMap API' }
      ],
      code: `// Fertilizer Calculation Engine & Crop Advisory
public class FertilizerEngine {
    public static FertilizerPlan calculate(Crop crop, double landAcres) {
        double nitrogenPerAcre = crop.getRecommendedNitrogen();
        double phosphorusPerAcre = crop.getRecommendedPhosphorus();
        
        // Exact chemical conversion to commercial fertilizer weights
        double totalUreaKg = (nitrogenPerAcre * landAcres) / 0.46;
        double totalDapKg = (phosphorusPerAcre * landAcres) / 0.46;
        
        return new FertilizerPlan(totalUreaKg, totalDapKg, crop.getStage());
    }
}`
    },
    csv: {
      title: 'Python Pandas ETL & Schema Repair',
      desc: 'Normalizes corrupted CSV dates, eliminates duplicates, and isolates transaction anomalies.',
      metrics: [
        { label: 'Throughput', value: '45,000 rows/sec' },
        { label: 'Memory', value: '16.4 MB' },
        { label: 'Schema Validation', value: '100% Strict' },
        { label: 'Error Rate', value: '0.00%' }
      ],
      code: `import pandas as pd

def process_invoices(input_path: str) -> pd.DataFrame:
    # Ingest and sanitize schema
    df = pd.read_csv(input_path, dtype={'inv_id': str})
    df['date'] = pd.to_datetime(df['raw_date'], errors='coerce').dt.strftime('%Y-%m-%d')
    df['amount'] = df['amount'].str.replace('$', '').astype(float)
    
    # Deduplicate and validate
    df = df.drop_duplicates(subset=['inv_id']).dropna(subset=['amount'])
    df['margin'] = df['amount'] * 0.28
    return df.sort_values(by='date')`
    },
    pdf: {
      title: 'Client-Side PDF Vector Manipulation',
      desc: 'In-browser canvas rendering with zero server uploads and zero data latency (PaperForge Core).',
      metrics: [
        { label: 'Server Uploads', value: '0 bytes (100% Private)' },
        { label: 'Render Latency', value: '< 120 ms' },
        { label: 'Vector Accuracy', value: 'Pixel-Perfect' },
        { label: 'Compliance', value: 'GDPR / HIPAA Safe' }
      ],
      code: `import { PDFDocument, rgb } from 'pdf-lib';

export async function annotateDocument(pdfBytes: Uint8Array, annotations: any[]) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw client-side vector highlights without server roundtrips
  annotations.forEach(item => {
    firstPage.drawRectangle({
      x: item.x, y: item.y, width: item.w, height: item.h,
      color: rgb(0.2, 0.7, 1.0), opacity: 0.35,
    });
  });
  return await pdfDoc.save();
}`
    },
    invoice: {
      title: 'GST-Ready Financial Billing Engine',
      desc: 'Lightweight client-side billing calculations with multi-item tax breakdown and instant print export (D-Invoice).',
      metrics: [
        { label: 'Calculation Latency', value: '< 1 ms' },
        { label: 'Tax Accuracy', value: 'CGST + SGST Exact' },
        { label: 'Backend Dependency', value: 'None (Standalone)' },
        { label: 'Print Output', value: 'Vector PDF / Thermal' }
      ],
      code: `function computeInvoiceTotals(items, gstRate = 0.18) {
  const subtotal = items.reduce((acc, it) => acc + (it.qty * it.rate), 0);
  const cgst = subtotal * (gstRate / 2);
  const sgst = subtotal * (gstRate / 2);
  const grandTotal = subtotal + cgst + sgst;

  return {
    subtotal: subtotal.toFixed(2),
    cgst: cgst.toFixed(2),
    sgst: sgst.toFixed(2),
    grandTotal: grandTotal.toFixed(2)
  };
}`
    }
  };

  const projects = [
    {
      id: 'farmtech',
      title: 'FarmTech Guru — Smart Agriculture Mobile App',
      category: ['apps'],
      tags: ['Android', 'Java', 'Firebase Firestore', 'Weather API', 'App Dev'],
      image: farmtechImg,
      badge: 'Mobile Application',
      desc: 'Comprehensive mobile application built for agricultural decision-making. Features real-time weather forecasting, crop stage diagnostics, fertilizer dosage calculators, profitability modeling, and farm produce inventory tracking.',
      highlights: [
        'Native Android Studio architecture with offline Firestore cache',
        'Multi-stage crop disease identification & advisory guides',
        'Accurate agrochemical dosage & farm profit calculators'
      ],
      github: 'https://github.com/AniruddhaDisale/FarmTech_Guru'
    },
    {
      id: 'paperforge',
      title: 'PaperForge — Private In-Browser Document Studio',
      category: ['web', 'docs'],
      tags: ['React', 'Vite', 'Canvas API', 'pdf-lib', 'Word DOCX'],
      image: paperforgeImg,
      badge: 'React & Vite',
      desc: 'Full-featured client-side PDF & Word document editor. Annotate with text, freehand canvas drawing, insert geometric shapes/images, and reorder pages with zero server latency or data leakage.',
      highlights: [
        'Zero server uploads — 100% confidential & private',
        'Real-time vector canvas rendering & layer ordering',
        'Exports standard-compliant PDFs in < 150ms'
      ],
      github: 'https://github.com/AniruddhaDisale/paperforge'
    },
    {
      id: 'dataflow',
      title: 'DataFlow Enterprise Automation Pipeline',
      category: ['python', 'docs'],
      tags: ['Python', 'Pandas', 'OpenPyXL', 'Excel Automation'],
      image: dataflowImg,
      badge: 'Python & Pandas',
      desc: 'High-speed Python pipeline engineered for automated recurring invoice ingestion. Repairs irregular dates, standardizes broken schemas, isolates anomalies, and compiles executive Excel workbooks with KPI summaries and native charts in seconds.',
      highlights: [
        'Processes 50,000+ records in under 3.5 seconds',
        'Auto-generates executive summary KPI dashboard',
        '1-click runner (.bat) ready for non-technical staff'
      ],
      github: 'https://github.com/AniruddhaDisale/data-automation-demo'
    },
    {
      id: 'dinvoice',
      title: 'D-Invoice — GST-Ready Web Invoicing App',
      category: ['web', 'docs'],
      tags: ['JavaScript', 'HTML5', 'CSS3', 'PDF Engine'],
      image: dinvoiceImg,
      badge: 'Web App & PDF',
      desc: 'Zero-overhead invoice generator built for small shops and merchants. Handles multi-item inventory calculation, automatic tax and discount computation, and instant print-ready branded PDF generation without server dependencies.',
      highlights: [
        'No login, database, or server configuration needed',
        'Automatic tax calculation & item subtotaling',
        'Instant client-side PDF download & thermal print mode'
      ],
      github: 'https://github.com/AniruddhaDisale/D-invoice'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  const currentWorkbench = workbenchDemos[activeWorkbenchTab];

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="nav-brand">
            <span>venoumsk</span>
            <span className="brand-dot">/dev</span>
          </a>

          <ul className="nav-links">
            <li><a href="#workbench" className="nav-link">Workbench</a></li>
            <li><a href="#work" className="nav-link">Projects</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="https://github.com/AniruddhaDisale" target="_blank" rel="noreferrer" className="nav-link">GitHub ↗</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Studio'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="badge badge-status">
              <span className="badge-status-dot"></span>
              <span>Available for Hire</span>
            </div>
            <button onClick={() => handleOpenModal()} className="btn btn-primary">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section section">
        <div className="container">
          <div className="hero-badge-wrap animate-reveal">
            <span className="badge">
              Software Engineer · Application Development & Python Automation
            </span>
          </div>

          <h1 className="hero-title animate-reveal-delay-1">
            Engineering robust applications, modern web tools &amp;{' '}
            <span className="hero-title-gradient">automated pipelines.</span>
          </h1>

          <p className="hero-subtitle animate-reveal-delay-2">
            Specializing in full-stack mobile applications (Android/Java), 
            private client-side React tools (PaperForge), and high-throughput Python data workflows.
          </p>

          <div className="hero-ctas animate-reveal-delay-3">
            <a href="#work" className="btn btn-primary">
              View Verified Projects
            </a>
            <a href="#workbench" className="btn btn-secondary">
              Inspect Code &amp; Architecture
            </a>
            <button onClick={() => handleOpenModal()} className="btn btn-secondary">
              Get in Touch
            </button>
          </div>

          <div className="hero-stats-grid animate-reveal-delay-4">
            <div className="stat-card">
              <div className="stat-value">App Development</div>
              <div className="stat-label">Mobile &amp; Full-Stack Systems</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Python &amp; Pandas</div>
              <div className="stat-label">High-Speed Data Pipelines</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">React &amp; Vite</div>
              <div className="stat-label">Client-Side Web Tools</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">100% Private</div>
              <div className="stat-label">Zero-Upload Client Privacy</div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Technical Workbench */}
      <section id="workbench" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Engineered Capabilities</span>
            <h2 className="section-title">Technical Precision &amp; Code Craft</h2>
            <p className="section-subtitle">
              Inspect sample logic, execution latency, and architectural decisions across my core toolchains.
            </p>
          </div>

          <div className="workbench-card surface-card">
            <div className="workbench-tabs">
              <button 
                className={`workbench-tab-btn ${activeWorkbenchTab === 'farmtech' ? 'active' : ''}`}
                onClick={() => setActiveWorkbenchTab('farmtech')}
              >
                Mobile App Engine (FarmTech Guru)
              </button>
              <button 
                className={`workbench-tab-btn ${activeWorkbenchTab === 'csv' ? 'active' : ''}`}
                onClick={() => setActiveWorkbenchTab('csv')}
              >
                Python ETL &amp; Data Repair
              </button>
              <button 
                className={`workbench-tab-btn ${activeWorkbenchTab === 'pdf' ? 'active' : ''}`}
                onClick={() => setActiveWorkbenchTab('pdf')}
              >
                In-Browser Vector PDF (PaperForge)
              </button>
              <button 
                className={`workbench-tab-btn ${activeWorkbenchTab === 'invoice' ? 'active' : ''}`}
                onClick={() => setActiveWorkbenchTab('invoice')}
              >
                GST Financial Engine (D-Invoice)
              </button>
            </div>

            <div className="workbench-grid">
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {currentWorkbench.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {currentWorkbench.desc}
                </p>

                <div className="workbench-metrics">
                  {currentWorkbench.metrics.map((m, idx) => (
                    <div key={idx} className="metric-pill">
                      <div className="metric-pill-label">{m.label}</div>
                      <div className="metric-pill-val">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <button 
                    onClick={() => handleOpenModal(currentWorkbench.title)}
                    className="btn btn-secondary"
                  >
                    Discuss This Implementation →
                  </button>
                </div>
              </div>

              <div className="workbench-code-box">
                <div className="code-header">
                  <div className="code-window-dots">
                    <span className="code-window-dot dot-red"></span>
                    <span className="code-window-dot dot-yellow"></span>
                    <span className="code-window-dot dot-green"></span>
                  </div>
                  <span>Java / Python / TypeScript</span>
                </div>
                <pre className="code-body">
                  <code>{currentWorkbench.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Projects */}
      <section id="work" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">Verified Software &amp; Applications</h2>
            <p className="section-subtitle">
              Native mobile apps, client-side web tools, and enterprise automation pipelines.
            </p>
          </div>

          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects (4)
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'apps' ? 'active' : ''}`}
              onClick={() => setActiveFilter('apps')}
            >
              Mobile &amp; Application Dev
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              Web Applications
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'python' ? 'active' : ''}`}
              onClick={() => setActiveFilter('python')}
            >
              Python &amp; Automation
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="project-card surface-card">
                <div>
                  <div className="project-preview-wrap">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="project-preview-img" 
                      loading="lazy" 
                    />
                    <div className="project-preview-overlay">
                      <span className="preview-badge">{p.badge}</span>
                    </div>
                  </div>

                  <div className="project-tags">
                    {p.tags.map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>

                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>

                  <ul className="project-highlights">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary"
                    style={{ fontSize: '0.84rem', padding: '0.55rem 1rem' }}
                  >
                    View Source on GitHub ↗
                  </a>
                  <button 
                    onClick={() => handleOpenModal(p.title)}
                    className="btn btn-primary"
                    style={{ fontSize: '0.84rem', padding: '0.55rem 1rem' }}
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Clear Scope */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2 className="section-title">Transparent Fixed Scope</h2>
            <p className="section-subtitle">
              Predictable delivery terms and milestone pricing for freelance contracts.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card surface-card">
              <div>
                <h3 className="pricing-name">Data Script &amp; Automation</h3>
                <p className="pricing-desc">Single-file or recurring schema transformation script.</p>

                <div className="pricing-price-wrap">
                  <span className="price-currency">$</span>
                  <span className="price-amount">45</span>
                </div>
                <div className="price-speed">⚡ 24-Hour Turnaround</div>

                <ul className="pricing-features">
                  <li>Deduplication &amp; date/ID normalization</li>
                  <li>Python script + 1-click executable runner</li>
                  <li>Edge-case validation suite</li>
                  <li>Documented execution instructions</li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('Data Script & Automation ($45)')}
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Inquire
              </button>
            </div>

            <div className="pricing-card surface-card featured">
              <span className="popular-tag">Most Popular</span>
              <div>
                <h3 className="pricing-name">Full Application Feature / Pipeline</h3>
                <p className="pricing-desc">Web or mobile app modules, Firestore sync, or Excel pipelines.</p>

                <div className="pricing-price-wrap">
                  <span className="price-currency">$</span>
                  <span className="price-amount">140</span>
                </div>
                <div className="price-speed">⚡ 48-Hour Delivery</div>

                <ul className="pricing-features">
                  <li>Full feature implementation &amp; API integration</li>
                  <li>Firebase / local cache offline architecture</li>
                  <li>Production-grade error resilience</li>
                  <li>Video walkthrough &amp; support warranty</li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('Application Feature / Pipeline ($140)')}
                className="btn btn-primary" 
                style={{ width: '100%' }}
              >
                Inquire
              </button>
            </div>

            <div className="pricing-card surface-card">
              <div>
                <h3 className="pricing-name">Custom Application / Dashboard</h3>
                <p className="pricing-desc">Standalone single-page tool or mobile application module.</p>

                <div className="pricing-price-wrap">
                  <span className="price-currency">$</span>
                  <span className="price-amount">290</span>
                </div>
                <div className="price-speed">⚡ 3-5 Days Delivery</div>

                <ul className="pricing-features">
                  <li>Responsive React / Android architecture</li>
                  <li>Client-side document tooling or data engine</li>
                  <li>Zero ongoing hosting maintenance costs</li>
                  <li>Free Netlify / Vercel deployment setup</li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('Custom Application ($290)')}
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Start a Conversation
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {selectedService ? `Discussing: ${selectedService}` : 'Share a brief overview of your application or workflow requirements.'}
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--border-hairline)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  DIRECT EMAIL
                </span>
                <button 
                  onClick={handleCopyEmail}
                  className="btn btn-secondary" 
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.78rem' }}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>
                disaleaniruddha@gmail.com
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={`mailto:disaleaniruddha@gmail.com?subject=Project Inquiry: ${selectedService || 'Application / Automation'}&body=Hi Aniruddha,%0D%0A%0D%0AI would like to discuss a project involving [brief description].%0D%0A%0D%0ABest regards`}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Open Email Client ↗
              </a>
              <a 
                href="https://github.com/AniruddhaDisale" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                GitHub Profile ↗
              </a>
            </div>

            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              🔒 100% Confidential. All client communications are strictly private.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>venoumsk</span>
            <span style={{ color: 'var(--text-tertiary)', marginLeft: '0.5rem', fontSize: '0.86rem' }}>
              © 2026 Aniruddha Disale
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/AniruddhaDisale" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
            <a href="https://github.com/AniruddhaDisale/FarmTech_Guru" target="_blank" rel="noreferrer" className="nav-link">FarmTech Guru</a>
            <a href="https://github.com/AniruddhaDisale/paperforge" target="_blank" rel="noreferrer" className="nav-link">PaperForge</a>
            <a href="https://github.com/AniruddhaDisale/D-invoice" target="_blank" rel="noreferrer" className="nav-link">D-Invoice</a>
            <a href="https://github.com/AniruddhaDisale/data-automation-demo" target="_blank" rel="noreferrer" className="nav-link">Data Pipeline</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
