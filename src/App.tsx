import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CursorBlob from "./components/CursorBlob/CursorBlob";
import "./styles/tokens.css";
import "./styles/typography.css";
import SideNav from "./components/SideNav/SideNav";
import Footer from "@/components/Footer/Footer";

function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-bg)";
  }, []);
  return <>{children}</>;
}

function SideNavRouter() {
  const { pathname } = useLocation();

  const triggerMap: Record<string, string> = {
    "/": "about",
    "/archive": "archive-list",
  };

  const trigger = triggerMap[pathname];
  if (!trigger) return null; // hide on /about, /contact etc.

  return <SideNav triggerSection={trigger} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <CursorBlob />
        <SideNavRouter />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </LenisProvider>
    </BrowserRouter>
  );
}
