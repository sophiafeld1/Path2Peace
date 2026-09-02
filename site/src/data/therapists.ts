export interface Therapist {
  slug: string;
  name: string;
  title: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio?: string[];
  bioSections?: { title: string; paragraphs: string[] }[];
  quote?: string;
  credentials?: string[];
  credentialsSection?: { title: string; paragraphs: string[] };
  specializations: string[];
  personalBackground?: string;
  personalBackgroundTitle?: string;
  services: string;
  contactCtaText?: string;
  certificationImage?: string;
  certificationAlt?: string;
}

export const therapists: Therapist[] = [
  {
    slug: "robin-feldman",
    name: "Robin Feldman",
    title: "LCSW",
    role: "Director & Therapist",
    image: "/images/therapists/robin-feldman.jpg",
    shortBio:
      "Over 20 years in private practice specializing in anxiety disorders, trauma, PTSD, developmental and attachment trauma, with particular expertise in adoption-related issues.",
    bioSections: [
      {
        title: "How I Approach Treatment",
        paragraphs: [
          "My approach is collaborative and centered on building upon each client's strengths, inner resources, and capacity for self-compassion. I work with teens and adults of all ages experiencing chronic anxiety, emotional pain, and fear, often stemming from early traumatic experiences, significant losses, or complicated grief.",
          "Healing from trauma begins in the context of a safe, attuned relationship. I strive to create a space where clients feel deeply seen, understood, and accepted, helping the nervous system to feel safe enough to settle and making it possible to explore difficult experiences at a pace that feels manageable and supportive. I initially focus on building trust while teaching practical coping strategies to help clients better manage difficult emotions. Honesty, warmth, and authenticity are essential to effective therapy. Teens, in particular, know when someone is not being genuine. I take an active and engaged approach, meeting clients where they are and helping them feel safe enough to move forward toward healing.",
        ],
      },
      {
        title: "Supporting You on Your Journey",
        paragraphs: [
          "I understand the importance of attunement, encouragement, and support throughout the healing process. I balance the seriousness of your pain with compassion and, when appropriate, a touch of humor.",
          "I bring extensive training and almost three decades of clinical experience, combined with genuine care, to help you release patterns and habits that no longer serve you. Together, we will work at a pace that feels safe and manageable, using a variety of therapeutic approaches to transform pain into growth, resilience, and greater self-understanding.",
          "I utilize somatic modalities, including EMDR Therapy, Ego State Therapy, Internal Family Systems (IFS), and Accelerated Experiential Dynamic Psychotherapy (AEDP). Using an integrative approach, we work collaboratively to help you process and integrate difficult experiences so that previously triggering situations no longer carry the same emotional intensity.",
          "I also incorporate sand tray therapy and mindfulness practices into my work. My relational approach is central to helping clients feel safe, empowered, and hopeful about their future.",
        ],
      },
    ],
    credentialsSection: {
      title: "Certification/Education/Licenses",
      paragraphs: [
        "I completed my EMDR training over 25 years ago and hold a certification in EMDR Therapy. I also have extensive training and practice in Ego State Therapy, which focuses on healing young wounded emotional parts.",
        "I earned a Masters degree in Clinical Social Work from Simmons College School of Social Work (now Simmons University).",
        "I am licensed to practice in Virginia, Maryland, and West Virginia (telehealth only). My professional affiliations are with National Association of Social Workers (NASW), EMDRIA (EMDR International Association), and Therapy First.",
      ],
    },
    specializations: [
      "EMDR Therapy",
      "Ego State Therapy",
      "Internal Family Systems (IFS)",
      "AEDP",
      "Sand-tray play",
      "Mindfulness techniques",
    ],
    personalBackgroundTitle: "A Bit More About Me",
    personalBackground:
      "I've been married for almost 25 years and have two grown daughters. My hobbies include hiking, walks with my dear old dog, more vigorous walking with friends and family, reading, watching TV series, dancing, yoga, kayaking, and traveling.",
    services: "In-person and remote appointments available",
    contactCtaText: "Contact Robin",
    certificationImage: "/images/emdria-cert.webp",
    certificationAlt: "EMDRIA certified EMDR therapist",
  },
  {
    slug: "robert-alexander",
    name: "Robert (Bobby) Alexander",
    title: "LMSW",
    role: "Therapist",
    image: "/images/therapists/robert-alexander.jpg",
    shortBio:
      "Licensed Social Worker helping adults navigate life\u2019s transitions and challenges, including anxiety, depression, self-esteem issues, relationship concerns, and complex trauma.",
    fullBio: [
      "Robert (Bobby) Alexander is a Licensed Social Worker based in Reston, Virginia, serving clients in-person and via telehealth in Maryland, DC, and Virginia.",
      "He serves adults 18+ and addresses anxiety, depression, trauma, substance use, relationship concerns, self-esteem, and career or life transitions. His practice includes supporting adults from a wide range of backgrounds, including gay, lesbian, bisexual and questioning. His prior work in digital advertising, marketing, and entrepreneurship informs his understanding of career pressures and life transitions.",
      "His therapeutic approach is trauma-informed and supportive, integrating Internal Family Systems, EMDR, and somatic work. He incorporates breathing exercises to develop self-regulation skills and body awareness.",
    ],
    credentials: [
      "MSW from Silberman School of Social Work, Hunter College, NYC",
      "Internal Family Systems (IFS) training from IFS Institute",
      "EMDR Therapy & Parts Work for Complex Trauma certification",
      "Integrative Somatic Parts Work (Levels 1 & 2)",
      "EMDR Basic Training",
      "Licensed in Virginia, Maryland, and DC",
    ],
    specializations: [
      "Internal Family Systems (IFS)",
      "EMDR Therapy",
      "Somatic work",
      "Career & life transitions",
      "Substance use recovery",
    ],
    personalBackground:
      "Born in Australia, raised in New York City, with work experience in California. Professional background includes digital advertising, marketing, and entrepreneurship. Personal interests include yoga, meditation, cooking, baking, gardening, and exploring new destinations. Practices under supervision of Chelsea Nicole, LCSW.",
    services: "In-person in Reston, Virginia; telehealth in Maryland, DC, and Virginia",
    contactCtaText: "Contact Robert",
  },
  {
    slug: "anita-madhava",
    name: "Anita Madhava",
    title: "MA",
    role: "Therapist",
    image: "/images/therapists/anita-madhava.jpg",
    shortBio:
      "Holistic therapist working with children, parents, adolescents, and adults experiencing stress, anxiety, depression, grief, trauma, and life transitions.",
    fullBio: [
      "Anita Madhava is a holistic therapist at Path to Peace Psychotherapy and a Resident in Counseling licensed in Virginia. She works with children, parents, adolescents, and adults experiencing stress, anxiety, depression, grief, trauma, life transitions, and disconnection from self or others.",
      "Her treatment is client-centered, emphasizing listening with genuine care and unconditional positive regard. She believes healing is possible when clients feel emotionally and neurologically safe to be understood without judgment. Her style is gentle, grounded, and present, with compassionate yet honest engagement.",
      "Anita integrates Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), somatic approaches, mindfulness, relational work, and nervous system–focused practices, alongside yoga and meditation. Her additional experience includes work in the education sector, volunteering with Crisis Text Line, chair yoga instruction for seniors, oncology yoga, and mindfulness-based practices.",
    ],
    credentials: [
      "Faculty member, George Washington University School of Medicine and Health Sciences",
      "Master’s degree in Clinical Mental Health Counseling",
      "Bachelor’s degree in Psychology",
      "Advanced certificate in Yoga and Meditation (specialization in Cancer Yoga and Yoga Nidra)",
      "Certified Yoga and Meditation Teacher",
      "Resident in Counseling, licensed in Virginia",
      "Practices under supervision of Candice Arnold, LPC, LSATP",
    ],
    specializations: [
      "Cognitive Behavioral Therapy (CBT)",
      "Acceptance and Commitment Therapy (ACT)",
      "Somatic approaches",
      "Mindfulness practices",
      "Relational work",
      "Yoga & meditation",
    ],
    personalBackground:
      "A Northern Virginia native and mother of three. Her interests include art galleries, writing, music, nature, and tongue drum.",
    services: "In-person in Reston, Virginia, and telehealth across Virginia",
    contactCtaText: "Contact Anita",
  },
];
