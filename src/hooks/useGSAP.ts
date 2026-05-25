import { useGSAP as useGSAPBase } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAPBase, ScrollTrigger);

export const useGSAP = useGSAPBase;
export { gsap, ScrollTrigger };
