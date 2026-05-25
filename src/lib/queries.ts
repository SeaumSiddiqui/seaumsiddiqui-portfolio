export const NAV_QUERY = `
  *[_type == "navigation"][0] {
    brandName,
    logo { asset->{ url } },
    copyright,
    navLinks[] { label, href, external },
    socialLinks[] { label, href },
    availabilityText,
    availabilitySub
  }
`;

export const HERO_QUERY = `
  *[_type == "hero"][0] {
    name,
    roles,
    location,
    portrait,
    copyright
  }
`;

export const ABOUT_QUERY = `
  *[_type == "about"][0] {
    statement,
    resume,
    experience[] {
      company,
      location,
      period,
      role,
      brief
    }
  }
`;

export const PROJECTS_QUERY = `*[_type == "project"][featured == true] | order(order asc) {
  _id, index, name, abbr, summary, tags, imagePortrait, href
}`;

export const STATS_QUERY = `*[_type == "stats"][0]{
  heading,
  subHeading,
  statCards[]{
    icon{ asset->{ url } },
    value,
    label,
    subLabel
  },
  commitsFrom,
  commitsTo
}`;

export const ARCHIVE_QUERY = `*[_type == "archive"][0]{
  headingLine1,
  headingLine2,
  subText,
  techStack
}`;

export const ARCHIVE_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id, order, name, title, abbr, client, date,
  desc[] { _key, _type, style, children[]{ _key, _type, text, marks }, markDefs, listItem, level },
  summary, tags, imageLandscape, href, featured
}`;

export const FOOTER_QUERY = `
  *[_type == "footer"][0] {
    email,
    navLinks,
    socials,
    location,
    timezone
  }
`;
