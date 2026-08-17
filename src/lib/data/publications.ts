export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "review";
  researchIds: string[];
  href?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: "kwak-microexpression-review",
    title:
      "A Comprehensive Review of Microexpression Recognition, Classification, and Datasets",
    authors: "P. Malik, J. Singh, F. Ali, and D. Kwak",
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2025,
    type: "review",
    researchIds: ["vision-health", "trustworthy-ai"],
    href: "https://researchers.kean.edu/en/publications/a-comprehensive-review-of-microexpression-recognition-classificat/",
    note: "Accepted / in press on the public Kean researcher profile.",
  },
  {
    id: "kwak-smart-home-zta",
    title:
      "A Privacy Preserving Optimized Intelligent Security Framework for Smart Homes Using Zero Trust Architecture and Explainability",
    authors: "A. Gupta, S. Gupta, S. Sharma, J. Singh, F. Ali, and D. Kwak",
    venue: "Scientific Reports",
    year: 2025,
    type: "journal",
    researchIds: ["security-privacy", "intelligent-systems"],
    href: "https://researchers.kean.edu/en/publications/a-privacy-preserving-optimized-intelligent-security-framework-for/",
  },
  {
    id: "kwak-xr-6g",
    title:
      "Collaborative Intelligence: Orchestrating Ultra-Low Latency XR Experiences in 6G Consumer Networks",
    authors: "S. D. A. Shah, F. Ali, A. A. Alzubi, and D. Kwak",
    venue: "IEEE Consumer Electronics Magazine",
    year: 2025,
    type: "journal",
    researchIds: ["intelligent-systems", "hci-education"],
    href: "https://researchers.kean.edu/en/publications/collaborative-intelligence-orchestrating-ultra-low-latency-xr-exp/",
    note: "Accepted / in press on the public Kean researcher profile.",
  },
  {
    id: "kwak-federated-6g",
    title:
      "Consumer Data Privacy-Aware Federated Orchestration for Communication, Computing, and Control in 6G Consumer Services",
    authors: "S. D. A. Shah, A. K. Bashir, D. Kwak, A. Salhi, and F. Ali",
    venue: "IEEE consumer-systems venue (in press)",
    year: 2025,
    type: "journal",
    researchIds: ["security-privacy", "intelligent-systems"],
    href: "https://researchers.kean.edu/en/publications/consumer-data-privacy-aware-federated-orchestration-for-communica/",
  },
  {
    id: "hu-kwak-asr-accents",
    title:
      "Evaluating Automatic Speech Recognition Models: How Well Do They Handle Accents?",
    authors: "W. Liu, Y. Xiong, B. Hu, and D. Kwak",
    venue: "Springer CCIS (RESPECT / related proceedings)",
    year: 2025,
    type: "conference",
    researchIds: ["trustworthy-ai", "data-knowledge"],
    href: "https://researchers.kean.edu/en/publications/evaluating-automatic-speech-recognition-models-how-well-do-they-h/",
  },
  {
    id: "morreale-inclusive-design",
    title:
      "How We Did It: Integrating Inclusive Design across the Undergraduate Computer Science Curriculum",
    authors: "P. Morreale, M. Burnett, K. J. Harms, and D. Kwak",
    venue: "Computing education / inclusive-design venue (public ORCID record)",
    year: 2024,
    type: "conference",
    researchIds: ["hci-education", "trustworthy-ai"],
    href: "https://orcid.org/0000-0002-7954-2122",
  },
  {
    id: "ojeda-assessment-sigcse",
    title:
      "Web-based Course Assessment System of Student Learning Outcomes: A Pilot Study",
    authors: "D. Ojeda, P. Morreale, and D. Kwak",
    venue: "SIGCSE Technical Symposium 2024 (Posters)",
    year: 2024,
    type: "conference",
    researchIds: ["hci-education"],
    href: "https://sigcse2024.sigcse.org/details/sigcse-ts-2024-posters/112/Web-based-Course-Assessment-System-of-Student-Learning-Outcomes-A-Pilot-Study-",
  },
  {
    id: "morreale-chi-transfer",
    title:
      "“fast, easy, simple”? SES-diverse transfer students’ sociotechnical experiences registering for classes",
    authors:
      "A. Busteed, J. Noa-Guevara, L. A. Castro, D. Moz Ruiz, S. Afroz, I. Mokraoui, P. Velhal, P. Morreale, A. Sarma, and M. Burnett",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    year: 2025,
    type: "conference",
    researchIds: ["hci-education"],
    href: "https://researchers.kean.edu/en/publications/fast-easy-simple-ses-diverse-transfer-students-sociotechnical-exp/",
  },
  {
    id: "davis-morreale-nav",
    title:
      "Steering Toward Improvement: A Roadmap to Address Driver Frustration with Navigation Apps",
    authors: "E. Davis and P. Morreale",
    venue: "HCI International (Lecture Notes in Computer Science)",
    year: 2024,
    type: "conference",
    researchIds: ["hci-education"],
    href: "https://researchers.kean.edu/en/publications/steering-toward-improvement-a-roadmap-to-address-driver-frustrati/",
  },
  {
    id: "gosha-morreale-msi",
    title:
      "Building Research Capacity through Collaboration with MSIs: Broadening Participation in Computing Research",
    authors: "K. Gosha, P. Morreale, and T. Washington",
    venue: "Computing research / broadening-participation venue",
    year: 2024,
    type: "conference",
    researchIds: ["hci-education"],
    href: "https://researchers.kean.edu/en/publications/building-research-capacity-through-collaboration-with-msis-broade/",
  },
  {
    id: "dalal-se-impact",
    title: "How to Teach Software Engineering for Societal and Social Impact",
    authors: "A. Csizmar Dalal, S. Kurkovsky, P. Morreale, and M. Goldweber",
    venue: "Software engineering education venue",
    year: 2024,
    type: "workshop",
    researchIds: ["hci-education"],
    href: "https://researchers.kean.edu/en/publications/how-to-teach-software-engineering-for-societal-and-social-impact/",
  },
  {
    id: "hug-conference-access",
    title:
      "Boosting Professional Participation in Computing Through Greater and Wider Conference Access",
    authors: "S. Hug, P. Morreale, A. Q. Gates, B. Rivera, B. Alvarez, and H. Thiry",
    venue: "Computing education / professional-participation venue",
    year: 2024,
    type: "conference",
    researchIds: ["hci-education"],
    href: "https://researchers.kean.edu/en/publications/boosting-professional-participation-in-computing-through-greater--2/",
  },
];

export const featuredPublicationIds = [
  "kwak-microexpression-review",
  "kwak-smart-home-zta",
  "morreale-chi-transfer",
  "kwak-xr-6g",
  "ojeda-assessment-sigcse",
] as const;

export function featuredPublications() {
  return featuredPublicationIds
    .map((id) => publications.find((publication) => publication.id === id))
    .filter((publication): publication is Publication => Boolean(publication));
}

export function publicationsFor(researchId: string) {
  return publications.filter((publication) =>
    publication.researchIds.includes(researchId),
  );
}
