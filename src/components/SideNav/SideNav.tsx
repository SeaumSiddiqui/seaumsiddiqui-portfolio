import { useState, useEffect } from "react";
import SideNavTab from "./SideNavTab";
import SideNavPanel from "./SideNavPanel";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SideNavProps {
  triggerSection?: string;
}

export default function SideNav({ triggerSection = "about" }: SideNavProps) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.querySelector(`[data-section='${triggerSection}']`) as HTMLElement;

      if (!section) return;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => setVisible(true),
        onLeaveBack: () => setVisible(false),
      });

      return () => st.kill();
    }, 500);

    return () => clearTimeout(timer);
  }, [triggerSection]);

  return (
    <>
      <SideNavTab visible={visible} onClick={() => setOpen(true)} />
      <SideNavPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
