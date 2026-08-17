export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  dek: string;
  body: string[];
  href?: string;
  hrefLabel?: string;
};

export const news: NewsItem[] = [
  {
    slug: "phd-applications-fall-2026",
    date: "2025-09-01",
    title: "Computer Science Ph.D. applications open for Fall 2026",
    dek: "Kean’s doctoral program in computer science is recruiting its founding cohort. Applications open Fall 2025; Fall admission deadline is January 15.",
    body: [
      "The Department of Computer Science and Technology is launching a Ph.D. in Computer Science, with applications opening in Fall 2025 for enrollment in Fall 2026. The public program page names three priority domains: artificial intelligence, cybersecurity, and data science — the same spine this lab portal is organized around.",
      "Kean describes the degree as research-centered, including substantial doctoral research credit and a dissertation that contributes original work to the field. Faculty mentorship, facilities in the Hennings College of Science, Mathematics and Technology, and the Union / New York metro location are the stated setting.",
      "This site is a research commons for that community: areas, methods, people, and a curated list of public faculty publications. It is not a substitute for Graduate Admissions. Official eligibility, assistantship details, and the application itself live on Kean’s program and admissions pages.",
    ],
    href: "https://www.kean.edu/academics/programs/computer-science-phd",
    hrefLabel: "Official Ph.D. program page",
  },
  {
    slug: "research-portal-launch",
    date: "2026-08-17",
    title: "Kean CS Lab research portal goes live",
    dek: "A single public map of research areas, methods, faculty, and selected publications for doctoral students and collaborators.",
    body: [
      "Doctoral recruiting fails when the work is invisible. This portal publishes the lab’s research programs in enough depth to write a first email that is not generic: questions, methods, datasets, and who actually works on what.",
      "Faculty names, offices, and areas are drawn from the public departmental directory. Featured papers are drawn from public researcher profiles and venue pages. Where a detail is still moving — assistantships, formal handbook language — we say so and point to Graduate Admissions.",
      "If you are a prospective Ph.D. student, start at Research, read one area page all the way through, then write the faculty whose questions you can already improve.",
    ],
  },
  {
    slug: "r2-urban-research",
    date: "2025-01-15",
    title: "Doctoral research in an R2 urban university",
    dek: "Kean frames itself as New Jersey’s urban research university and a national R2 institution expanding graduate research.",
    body: [
      "The public Ph.D. page states Kean’s institutional posture plainly: an urban research university, a national R2, investing in graduate research and next-generation academic leaders. For incoming doctoral students that is context, not a slogan — it describes a department that is still building the doctoral layer in public.",
      "Building in public is an advantage if you want to help define lab culture, reading groups, and the first dissertations. It is a poor fit if you need a fifty-year-old institute with a fixed rotation of projects. Read the faculty pages and decide which kind of builder you are.",
    ],
    href: "https://www.kean.edu/academics/programs/computer-science-phd",
    hrefLabel: "Why a Ph.D. at Kean",
  },
  {
    slug: "inclusive-design-throughline",
    date: "2024-03-20",
    title: "Inclusive design is a research throughline, not a sidebar",
    dek: "Public faculty work on embedding equitable design in the CS curriculum and on how students actually meet university systems.",
    body: [
      "Several public records — including inclusive-design curriculum work and a SIGCSE 2024 poster on course-assessment systems — show HCI and computing education as an active departmental research line, not a service obligation.",
      "Prospective students who want to study interfaces, learning, or broadening participation should treat those papers as the start of a conversation. Prospective students who want to study models should still read them: the people who use your system are not an afterthought in this lab.",
    ],
    href: "https://www.kean.edu/department-3-2-0",
    hrefLabel: "Faculty directory",
  },
];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
