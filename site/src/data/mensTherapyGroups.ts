export interface MensTherapyGroup {
  slug: string;
  name: string;
  pageTitle: string;
  description: string;
  intro: string[];
  bulletHeading?: string;
  bullets?: string[];
  closing?: string;
  interestFormUrl: string;
}

export const mensTherapyGroups: MensTherapyGroup[] = [
  {
    slug: "tolerating-emotions-building-connections",
    name: "Tolerating Emotions, Building Connections",
    pageTitle: "Tolerating Emotions, Building Connections",
    description:
      "A weekly men's group for self-awareness, emotional regulation, and meaningful connection—especially for those in trauma therapy.",
    intro: [
      "Struggling with connection, anxiety, trauma, loneliness? Want to show up more fully in your life and relationships?",
      "This group can help.",
      "Our Weekly Men's Group offers a safe, grounded, judgment-free space to explore self-awareness, emotional regulation, and the powerful connection between body and mind.",
      "Led by a trauma specialist, the group is especially well-suited for those currently engaged in trauma therapy, providing a safe, embodied space to reinforce and integrate healing work through connection and practice.",
    ],
    bulletHeading: "We'll focus on:",
    bullets: [
      "Building healthier coping mechanisms",
      "Practicing effective grounding tools and somatic awareness tools",
      "Increasing emotional resilience",
      "Boosting self-confidence",
      "Fostering meaningful connection and reducing aloneness",
    ],
    closing: "Starting in May!",
    interestFormUrl: "https://forms.gle/HxZnLB8p9XXAV6pG8",
  },
  {
    slug: "capable-men-in-their-20s-feeling-stuck",
    name: "Capable Men in their 20's Feeling Stuck",
    pageTitle: "Finding Traction: Men's Therapy Group",
    description:
      "A supportive therapy group for men in their 20s who want clarity, momentum, and connection with others navigating similar challenges.",
    intro: [
      "Feeling stuck, burned out, or unsure about your next move? You're not alone.",
      "Finding Traction is a supportive therapy group for men in their 20's who want to gain clarity, build momentum, and connect with others navigating similar challenges.",
    ],
    bulletHeading: "Details:",
    bullets: [
      "Starting in Late May (flexible depending on interest)",
      "Format: Weekly 90-minute sessions",
      "Commitment: 8-week initial commitment",
      "Group size: Max 8 men",
      "Location: In-person or virtual (TBD)",
      "Eligibility: Participants must be based in DC, Maryland, or Virginia",
      "Fee: $80 per session (superbill available for out-of-network reimbursement)",
    ],
    interestFormUrl: "https://forms.gle/h5dTjTTWnSG4Yd8S7",
  },
];
