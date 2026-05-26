import { useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CursorBlob from "./components/CursorBlob/CursorBlob";
import SideNav from "./components/SideNav/SideNav";
import Footer from "@/components/Footer/Footer";
import "./styles/tokens.css";
import "./styles/typography.css";

function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-bg)";
    document.documentElement.style.visibility = "hidden";
    document.fonts.ready.then(() => {
      document.documentElement.style.visibility = "visible";
    });
  }, []);
  return <>{children}</>;
}

function getPage() {
  const path = window.location.pathname;
  if (path.startsWith("/archive")) return <ArchivePage />;
  if (path.startsWith("/about")) return <AboutPage />;
  if (path.startsWith("/contact")) return <ContactPage />;
  return <HomePage />;
}

function SideNavRouter() {
  const path = window.location.pathname;
  const triggerMap: Record<string, string> = {
    "/": "about",
    "/archive": "archive-list",
  };
  const trigger = triggerMap[path];
  if (!trigger) return null;
  return <SideNav triggerSection={trigger} />;
}

export default function App() {
  return (
    <LenisProvider>
      <CursorBlob />
      <SideNavRouter />
      {getPage()}
      <Footer />
    </LenisProvider>
  );
}
