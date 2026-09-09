import { useState, useEffect } from "react";
import Header, { PageId } from "./components/Header";
import Footer from "./components/Footer";
import AdmissionModal from "./components/AdmissionModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLifePage from "./pages/CampusLifePage";
import Gallery from "./pages/Gallery";
import CircularsEvents from "./pages/CircularsEvents";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState<string | undefined>(undefined);

  const scrollToTargetSection = (sectionId: string) => {
    let attempts = 0;
    const maxAttempts = 15;
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("target-highlight-pulse");
        setTimeout(() => {
          el.classList.remove("target-highlight-pulse");
        }, 2600);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 60);
      }
    };
    setTimeout(tryScroll, 40);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace("#", "");
      if (!rawHash) {
        setCurrentPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Format can be "#page" or "#page/sectionId" or "#page:sectionId"
      const parts = rawHash.split(/[/:]/);
      const pageCandidate = parts[0] as PageId;
      const targetSectionId = parts[1];

      const validPages: PageId[] = ["home", "about", "academics", "admissions", "facilities", "gallery", "circulars", "contact"];
      if (validPages.includes(pageCandidate)) {
        setCurrentPage(pageCandidate);
        if (targetSectionId) {
          scrollToTargetSection(targetSectionId);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setCurrentPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1280&q=70", // Footer campus backdrop
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

  const navigateTo = (page: PageId, targetSectionId?: string) => {
    const targetHash = targetSectionId ? `${page}/${targetSectionId}` : page;
    window.location.hash = targetHash;
    setCurrentPage(page);

    if (targetSectionId) {
      scrollToTargetSection(targetSectionId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAdmissionModal={handleOpenAdmissionModal}
      />

      <main id="main-content">
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
