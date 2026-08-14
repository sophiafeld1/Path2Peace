export const BUSINESS = {
  name: "Path to Peace Psychotherapy",
  address: "11733 Bowman Green Drive, Suite 200, Reston, Virginia 20190",
  phone: "703-340-6920",
  phoneHref: "tel:+17033406920",
  email: "info@pathtopeacepsychotherapy.com",
  url: "https://pathtopeacepsychotherapy.com",
  consultation: "Free 15-minute phone consultation",
} as const;

export const NAV_LINKS = [
  { label: "Services Offered", href: "/services-offered" },
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/our-approach" },
  {
    label: "Meet Our Therapists",
    href: "/therapists",
    children: [
      { label: "Robin Feldman, LCSW", href: "/therapists/robin-feldman" },
      { label: "Robert Alexander, LMSW", href: "/therapists/robert-alexander" },
      { label: "Anita Madhava, MA", href: "/therapists/anita-madhava" },
    ],
  },
  {
    label: "Therapeutic Modalities",
    href: "/modalities",
    children: [
      { label: "Internal Family Systems (IFS)", href: "/modalities/internal-family-systems" },
      { label: "EMDR Therapy", href: "/modalities/emdr" },
      { label: "Ego State Therapy", href: "/modalities/ego-state-therapy" },
      { label: "AEDP", href: "/modalities/aedp" },
      { label: "Yoga and Meditation", href: "/modalities/yoga-and-meditation" },
    ],
  },
  { label: "Fees & Photos", href: "/fees-and-photos" },
  { label: "FAQs", href: "/faqs" },
  { label: "Our Blog", href: "/blog" },
  {
    label: "Men's Therapy Groups",
    href: "/mens-therapy-group",
    children: [
      {
        label: "Tolerating Emotions, Building Connections",
        href: "/mens-therapy-group/tolerating-emotions-building-connections",
      },
      {
        label: "Capable Men in their 20's Feeling Stuck",
        href: "/mens-therapy-group/capable-men-in-their-20s-feeling-stuck",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
] as const;

/** Shared mountain hero image crop — centers the peak line in banner strips. */
export const HERO_MOUNTAIN_IMAGE = "/images/hero/hero-nature.jpg";
export const HERO_MOUNTAIN_POSITION = "50% 68%";

/** Desktop banner nav — two rows matching legacy site layout */
export const BANNER_NAV_ROW_1 = [
  { label: "Services Offered", href: "/services-offered" },
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Meet Our Therapists", href: "/therapists" },
  { label: "Therapeutic Modalities", href: "/modalities" },
] as const;

export const BANNER_NAV_ROW_2 = [
  { label: "Fees & Photos", href: "/fees-and-photos" },
  { label: "FAQs", href: "/faqs" },
  { label: "Our Blog", href: "/blog" },
  { label: "Men's Therapy Groups", href: "/mens-therapy-group" },
] as const;
