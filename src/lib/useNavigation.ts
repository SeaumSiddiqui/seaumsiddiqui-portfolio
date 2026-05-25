import { useSanityQuery } from "./useSanity";
import { NAV_QUERY } from "./queries";
import { NavigationData, NAV_FALLBACK } from "./types";

export function useNavigation() {
  const { data, loading } = useSanityQuery<NavigationData>(NAV_QUERY);

  return {
    loading,
    nav: {
      brandName: data?.brandName ?? NAV_FALLBACK.brandName,
      logo: data?.logo ?? NAV_FALLBACK.logo,
      copyright: data?.copyright ?? NAV_FALLBACK.copyright,
      navLinks: data?.navLinks ?? NAV_FALLBACK.navLinks,
      socialLinks: data?.socialLinks ?? NAV_FALLBACK.socialLinks,
      availabilityText: data?.availabilityText ?? NAV_FALLBACK.availabilityText,
      availabilitySub: data?.availabilitySub ?? NAV_FALLBACK.availabilitySub,
    },
  };
}
