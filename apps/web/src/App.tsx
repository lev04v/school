import { useState, useEffect } from "react";
import Header, { PageId } from "./components/Header";
import Footer from "./components/Footer";
import AdmissionModal from "./components/AdmissionModal";
import Preloader from "./components/Preloader";
import PageLoader from "./components/PageLoader";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLifePage from "./pages/CampusLifePage";
import Gallery from "./pages/Gallery";
import CircularsEvents from "./pages/CircularsEvents";
import Contact from "./pages/Contact";

const PAGE_NAMES: Record<PageId, string> = {
  home: "Home Campus",
  about: "Heritage & About Us",
  academics: "Academic Programs",
  admissions: "Admissions 2026–27",
  facilities: "Campus",
  gallery: "Gallery",
  circulars: "News & Events",
  contact: "Contact & Helpline",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [routeTargetName, setRouteTargetName] = useState("");
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState<string | undefined>(undefined);

  const scrollToTargetSection = (sectionId: string) => {
    let attempts = 0;
    const maxAttempts = 25;
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 90;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: Math.max(0, elementPosition - navHeight),
          behavior: "smooth",
        });
        el.classList.add("target-highlight-pulse");
        setTimeout(() => {
          el.classList.remove("target-highlight-pulse");
        }, 2600);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 50);
      }
    };
    setTimeout(tryScroll, 60);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace("#", "");
      if (!rawHash) {
        if (currentPage !== "home") {
          setRouteTargetName("Home Campus");
          setIsRouteLoading(true);
          window.scrollTo({ top: 0, behavior: "instant" });
          setTimeout(() => {
            setCurrentPage("home");
            setTimeout(() => setIsRouteLoading(false), 200);
          }, 450);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // Format can be "#page" or "#page/sectionId" or "#page:sectionId"
      const parts = rawHash.split(/[/:]/);
      const pageCandidate = parts[0] as PageId;
      const targetSectionId = parts[1];

      const validPages: PageId[] = ["home", "about", "academics", "admissions", "facilities", "gallery", "circulars", "contact"];
      if (validPages.includes(pageCandidate)) {
        if (pageCandidate !== currentPage) {
          setRouteTargetName(PAGE_NAMES[pageCandidate] || pageCandidate);
          setIsRouteLoading(true);
          window.scrollTo({ top: 0, behavior: "instant" });
          setTimeout(() => {
            setCurrentPage(pageCandidate);
            const effectiveSection =
              pageCandidate === "circulars" && !targetSectionId
                ? "circulars"
                : pageCandidate === "gallery" && !targetSectionId
                ? "gallery-grid"
                : targetSectionId;
            if (effectiveSection) {
              scrollToTargetSection(effectiveSection);
            } else {
              window.scrollTo({ top: 0, behavior: "instant" });
            }
            setTimeout(() => setIsRouteLoading(false), 200);
          }, 450);
        } else {
          const effectiveSection =
            pageCandidate === "circulars" && !targetSectionId
              ? "circulars"
              : pageCandidate === "gallery" && !targetSectionId
              ? "gallery-grid"
              : targetSectionId;
          if (effectiveSection) {
            scrollToTargetSection(effectiveSection);
          }
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentPage]);

  // Preload subpage hero images during browser idle time for zero-latency page transitions
  useEffect(() => {
    const heroImageUrls = [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1280&q=70",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1280&q=70",
    ];

    const preloadImages = () => {
      heroImageUrls.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(preloadImages);
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
      };
    } else {
      const timer = setTimeout(preloadImages, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Global Scroll Reveal Observer (Slides elements into display from sides on scroll across all pages)
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Automatically tag layout elements on any page with side slide-in animations
    const tagAutoReveals = () => {
      // Elements that should slide in from LEFT: text columns, cards at odd positions, headings
      const leftSelectors = [
        ".col-left",
        ".stage-text-col",
        ".contact-form-box",
        ".transport-copy",
        ".tps-portrait",
        ".founder-decree-card",
        ".campus-featured-card",
        ".life-spotlight-visual",
        ".adm-conversion-copy",
        ".about-mission-card",
        ".cal-banner-copy",
        ".desk-card:nth-child(odd)",
        ".why-learn-card:nth-child(odd)",
        ".gallery-card:nth-child(odd)",
        ".club-card:nth-child(odd)",
        ".story-stats__item:nth-child(odd)",
        ".faculty-card:nth-child(odd)",
        ".adm-step-card:nth-child(odd)",
        ".facility-card:nth-child(odd)",
        ".dept-card-enhanced:nth-child(odd)",
        ".spotlight-card:nth-child(odd)",
        ".cal-event-card-modern:nth-child(odd)",
      ];

      // Elements that should slide in from RIGHT: image columns, cards at even positions, action boxes
      const rightSelectors = [
        ".col-right",
        ".stage-image-col",
        ".contact-info-column",
        ".transport-action-box",
        ".tps-content",
        ".campus-sub-card",
        ".life-spotlight-info",
        ".adm-conversion-facts",
        ".about-vision-card",
        ".cal-banner-actions",
        ".desk-card:nth-child(even)",
        ".why-learn-card:nth-child(even)",
        ".gallery-card:nth-child(even)",
        ".club-card:nth-child(even)",
        ".story-stats__item:nth-child(even)",
        ".faculty-card:nth-child(even)",
        ".adm-step-card:nth-child(even)",
        ".facility-card:nth-child(even)",
        ".dept-card-enhanced:nth-child(even)",
        ".spotlight-card:nth-child(even)",
        ".cal-event-card-modern:nth-child(even)",
      ];

      const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

      leftSelectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el, i) => {
          if (!el.classList.contains("reveal-left") && !el.classList.contains("reveal-right") && !el.classList.contains("reveal-up")) {
            el.classList.add(isMobile ? "reveal-up" : "reveal-left");
            if (i % 2 === 1) el.classList.add("delay-100");
          }
        });
      });

      rightSelectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el, i) => {
          if (!el.classList.contains("reveal-left") && !el.classList.contains("reveal-right") && !el.classList.contains("reveal-up")) {
            el.classList.add(isMobile ? "reveal-up" : "reveal-right");
            if (i % 2 === 1) el.classList.add("delay-200");
          }
        });
      });

      // Section center headings slide up gently
      document.querySelectorAll(".center-heading, .section-heading-row, .why-learn-head").forEach((el) => {
        if (!el.classList.contains("reveal-left") && !el.classList.contains("reveal-right") && !el.classList.contains("reveal-up")) {
          el.classList.add("reveal-up");
        }
      });
    };

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      tagAutoReveals();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.06,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
          el.classList.add("active");
        } else {
          observer?.observe(el);
        }
      });
    };

    const handleScroll = () => {
      const targets = document.querySelectorAll(".reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-up:not(.active)");
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(setupObserver, 50);
    const retryTimer = setTimeout(setupObserver, 250);
    const lateTimer = setTimeout(setupObserver, 750);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(retryTimer);
      clearTimeout(lateTimer);
      if (observer) observer.disconnect();
    };
  }, [currentPage]);

  const navigateTo = (page: PageId, targetSectionId?: string) => {
    const effectiveSection =
      page === "circulars" && !targetSectionId
        ? "circulars"
        : page === "gallery" && !targetSectionId
        ? "gallery-grid"
        : targetSectionId;

    if (page !== currentPage) {
      setRouteTargetName(PAGE_NAMES[page] || page);
      setIsRouteLoading(true);

      // Instant scroll to top behind loading curtain
      window.scrollTo({ top: 0, behavior: "instant" });

      // Fast and responsive page transition
      setTimeout(() => {
        const targetHash = effectiveSection ? `${page}/${effectiveSection}` : page;
        window.location.hash = targetHash;
        setCurrentPage(page);

        if (effectiveSection) {
          scrollToTargetSection(effectiveSection);
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }

        setIsRouteLoading(false);
      }, 160);
    } else {
      const targetHash = effectiveSection ? `${page}/${effectiveSection}` : page;
      window.location.hash = targetHash;
      if (effectiveSection) {
        scrollToTargetSection(effectiveSection);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleOpenAdmissionModal = (streamName?: string) => {
    setSelectedStream(streamName);
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmissionModal = () => {
    setIsAdmissionModalOpen(false);
    setSelectedStream(undefined);
  };

  return (
    <div className="site-shell">
      <Preloader />
      <PageLoader isLoading={isRouteLoading} targetPageName={routeTargetName} />

      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAdmissionModal={handleOpenAdmissionModal}
      />

      <main id="main-content">
        <PageTransition pageKey={currentPage}>
          {currentPage === "home" && (
            <Home
              onNavigate={navigateTo}
              onOpenAdmissionModal={handleOpenAdmissionModal}
            />
          )}
          {currentPage === "about" && (
            <About
              onNavigate={navigateTo}
              onOpenAdmissionModal={() => handleOpenAdmissionModal()}
            />
          )}
          {currentPage === "academics" && (
            <Academics
              onNavigate={navigateTo}
              onOpenAdmissionModal={handleOpenAdmissionModal}
            />
          )}
          {currentPage === "admissions" && (
            <Admissions
              onNavigate={navigateTo}
              onOpenAdmissionModal={handleOpenAdmissionModal}
            />
          )}
          {currentPage === "facilities" && (
            <CampusLifePage
              onNavigate={navigateTo}
              onOpenAdmissionModal={() => handleOpenAdmissionModal()}
            />
          )}
          {currentPage === "gallery" && (
            <Gallery
              onNavigate={navigateTo}
              onOpenAdmissionModal={() => handleOpenAdmissionModal()}
            />
          )}
          {currentPage === "circulars" && (
            <CircularsEvents
              onNavigate={navigateTo}
              onOpenAdmissionModal={() => handleOpenAdmissionModal()}
            />
          )}
          {currentPage === "contact" && (
            <Contact onNavigate={navigateTo} />
          )}
        </PageTransition>
      </main>

      <Footer
        onNavigate={navigateTo}
        onOpenAdmissionModal={handleOpenAdmissionModal}
      />

      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={handleCloseAdmissionModal}
        defaultStream={selectedStream}
      />

      {/* Floating Mobile CTA */}
      <div className="mobile-floating-apply">
        <button
          onClick={() => handleOpenAdmissionModal()}
          className="btn-mobile-floating"
          aria-label="Apply Online 2026-27"
        >
          <span>Apply 2026-27</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
}
