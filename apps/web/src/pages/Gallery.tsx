import { useState } from "react";
import { PageId } from "../components/Header";
import { PageHero } from "../components/PageHero";

interface GalleryProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

interface GalleryItem {
  id: number;
  title: string;
  category: "campus" | "labs" | "sports" | "cultural";
  categoryLabel: string;
  date: string;
  imageUrl: string;
  desc: string;
}

export default function Gallery({ onNavigate, onOpenAdmissionModal }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Atal Tinkering Lab & Robotics Hub",
      category: "labs",
      categoryLabel: "STEM & Labs",
      date: "August 2026",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
      desc: "Students collaborating on microcontroller circuitry, sensor kits, and automated robotic systems funded by NITI Aayog.",
    },
    {
      id: 2,
      title: "Main Academic Block & Quadrangle",
      category: "campus",
      categoryLabel: "Campus Architecture",
      date: "September 2026",
      imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=85",
      desc: "Majestic brick architectural facade of the Senior Secondary academic block surrounded by landscaped lawns.",
    },
    {
      id: 3,
      title: "Annual Sports Day & Turf Ground",
      category: "sports",
      categoryLabel: "Sports & Athletics",
      date: "November 2026",
      imageUrl: "https://images.unsplash.com/photo-1531415074868-036b1c57e359?auto=format&fit=crop&w=1200&q=85",
      desc: "Inter-house athletic meet on our professional cricket turf and 200m track with students competing for the champion trophy.",
    },
    {
      id: 4,
      title: "Annual Cultural Fest & Stage Plays",
      category: "cultural",
      categoryLabel: "Cultural & Stage",
      date: "October 2026",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85",
      desc: "Vibrant dance dramas, Indian classical orchestra, and choir performances staged at the open-air amphitheater.",
    },
    {
      id: 5,
      title: "Senior Chemistry & Molecular Lab",
      category: "labs",
      categoryLabel: "STEM & Labs",
      date: "July 2026",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      desc: "Hands-on chemical titration and organic synthesis workstations designed for Class 11 and 12 CBSE board practicals.",
    },
    {
      id: 6,
      title: "Central Knowledge Resource Library",
      category: "campus",
      categoryLabel: "Campus Architecture",
      date: "August 2026",
      imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
      desc: "Over 18,000 academic titles, NCERT reference collections, digital Kindle stations, and private reading carrels.",
    },
    {
      id: 7,
      title: "Horizon Model United Nations (MUN)",
      category: "cultural",
      categoryLabel: "Cultural & Stage",
      date: "September 2026",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
      desc: "Over 400 student delegates from across Delhi/NCR deliberating international diplomacy, human rights, and climate policy.",
    },
    {
      id: 8,
      title: "Indoor Basketball & Badminton Arena",
      category: "sports",
      categoryLabel: "Sports & Athletics",
      date: "August 2026",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
      desc: "FIBA-standard maple wood indoor basketball court and badminton practice courts coached by certified NIS experts.",
    },
    {
      id: 9,
      title: "Interactive Smart Digiboard Classrooms",
      category: "campus",
      categoryLabel: "Campus Architecture",
      date: "September 2026",
      imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
      desc: "High-definition interactive touch displays transforming lessons into 3D conceptual simulations and collaborative quizzes.",
    },
    {
      id: 10,
      title: "Computer Science & AI Coding Studio",
      category: "labs",
      categoryLabel: "STEM & Labs",
      date: "July 2026",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
      desc: "Dual-monitor workstations for Python, SQL, C++, web design, and algorithmic problem solving under expert PGT faculty.",
    },
    {
      id: 11,
      title: "Scholars Convocation & Board Felicitation",
      category: "cultural",
      categoryLabel: "Cultural & Stage",
      date: "June 2026",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
      desc: "Felicitation ceremony honoring CBSE Class 10 and 12 city toppers, Olympiad medalists, and IIT/NEET qualifiers.",
    },
    {
      id: 12,
      title: "Safe GPS-Tracked School Bus Fleet",
      category: "campus",
      categoryLabel: "Campus Architecture",
      date: "August 2026",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
      desc: "Lineup of our 35+ air-conditioned buses equipped with speed governors, CCTV cameras, and live parent mobile tracking.",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header Banner */}
      <PageHero
        breadcrumbCurrent="Campus Gallery"
        onNavigate={onNavigate}
        kicker="CAMPUS GLIMPSES · PROGRAMS · EXCELLENCE IN ACTION"
        title={<>Campus Life, Activities & <span className="text-shimmer">Visual Showcase</span></>}
        subtitle="Explore our state-of-the-art academic architecture, cutting-edge science and robotics laboratories, vibrant athletic arenas, and memorable annual celebrations."
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Campus Atrium and Visual Gallery"
      />

      {/* Gallery Filter & Grid Section */}
      <section className="section-gallery-main container">
        {/* Category Filters */}
        <div className="gallery-filter-bar">
          <button
            className={`gallery-filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Photos ({galleryItems.length})
          </button>
          <button
            className={`gallery-filter-pill ${activeCategory === "campus" ? "active" : ""}`}
            onClick={() => setActiveCategory("campus")}
          >
            Campus & Architecture
          </button>
          <button
            className={`gallery-filter-pill ${activeCategory === "labs" ? "active" : ""}`}
            onClick={() => setActiveCategory("labs")}
          >
            STEM & Laboratories
          </button>
          <button
            className={`gallery-filter-pill ${activeCategory === "sports" ? "active" : ""}`}
            onClick={() => setActiveCategory("sports")}
          >
            Sports & Athletics
          </button>
          <button
            className={`gallery-filter-pill ${activeCategory === "cultural" ? "active" : ""}`}
            onClick={() => setActiveCategory("cultural")}
          >
            Cultural & Stage Events
          </button>
        </div>

        {/* Image Grid */}
        <div className="gallery-items-grid">
          {filteredItems.map((item) => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-thumb-img"
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-zoom-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  </span>
                  <span className="gallery-view-text">Click to View Photo</span>
                </div>
                <span className="gallery-category-badge">{item.categoryLabel}</span>
              </div>

              <div className="gallery-caption-box">
                <time className="gallery-item-date">{item.date}</time>
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close Lightbox"
            >
              ✕
            </button>
            <div className="lightbox-image-wrap">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="lightbox-full-img"
              />
            </div>
            <div className="lightbox-meta">
              <span className="lightbox-cat">{selectedItem.categoryLabel} · {selectedItem.date}</span>
              <h2 className="lightbox-title">{selectedItem.title}</h2>
              <p className="lightbox-desc">{selectedItem.desc}</p>
              <div className="lightbox-actions">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenAdmissionModal();
                  }}
                  className="btn-hero-primary"
                >
                  Schedule Campus Tour & Apply →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="section-page-cta container">
        <div className="page-cta-box">
          <div>
            <h3>Experience These Spaces Firsthand</h3>
            <p>We invite parents and prospective students to tour our laboratories, grounds, and classrooms.</p>
          </div>
          <div className="page-cta-actions">
            <button onClick={() => onNavigate("contact")} className="btn-hero-primary">
              Book a Campus Visit →
            </button>
            <button onClick={onOpenAdmissionModal} className="btn-hero-secondary">
              Apply for 2026-27
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
