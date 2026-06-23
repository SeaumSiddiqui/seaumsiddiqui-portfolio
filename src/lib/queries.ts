export const HERO_QUERY = `
  *[_type == "hero"][0] {
    roles,
    location,
    portrait
  }
`;

export const EXPERIENCES_QUERY = `
  *[_type == "experience"] | order(index asc) {
    "id": _id,
    index,
    label,
    headline,
    company,
    role,
    period,
    bullets
  }
`;

export const EXPERTISE_QUERY = `
  *[_type == "expertise"][0] {
    resumeUrl,
    skills,
    certifications
  }
`;

export const PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(index asc) {
    "id": _id,
    index,
    title,
    description,
    tech,
    githubUrl,
    liveUrl,
    imageColor,
    "coverImage": coverImage.asset->url,
    "coverImageLandscape": coverImageLandscape.asset->url,
    sections[] {
      "id": _key,
      titleText,
      descText,
      "bannerImage": bannerImage.asset->url,
      collapsibleItems
    }
  }
`;

export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(index asc) {
    "id": _id,
    index,
    title,
    description,
    tech,
    githubUrl,
    liveUrl,
    imageColor,
    "coverImage": coverImage.asset->url,
    "coverImageLandscape": coverImageLandscape.asset->url,
    sections[] {
      "id": _key,
      titleText,
      descText,
      "bannerImage": bannerImage.asset->url,
      collapsibleItems
    }
  }
`;

export const CLOSING_QUERY = `
  *[_type == "closing"][0] {
    buildText,
    email,
    githubUrl,
    linkedinUrl,
    twitterUrl,
    leetcodeUrl,
    footerText
  }
`;
export const MENU_OVERLAY_QUERY = `
  *[_type == "menuOverlay"][0] {
    navLinks,
    copyrightText,
    profileName,
    profileDesc,
    socialLinks,
    email,
    timezonePrefix,
    timezoneCity,
    "bottomImage": bottomImage.asset->url
  }
`;

export const ARCHIVE_PAGE_QUERY = `
  *[_type == "archivePage"][0] {
    pageTitle,
    pageDescription,
    pageMeta
  }
`;
