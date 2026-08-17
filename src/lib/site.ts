export const site = {
  name: "Kean CS Lab",
  formalName: "Kean Computer Science Lab",
  tagline: "Doctoral research commons",
  description:
    "Research portal for the Kean University Computer Science Ph.D. community — AI, cybersecurity, data science, HCI, and intelligent systems in Union, New Jersey.",
  url: "https://kean-cs-lab.vercel.app",
  university: "Kean University",
  department: "Department of Computer Science and Technology",
  college:
    "Dorothy and George Hennings College of Science, Mathematics and Technology",
  location: "Union, New Jersey",
  address: "1000 Morris Avenue, Union, NJ 07083",
  coordinator: {
    name: "Daehan Kwak, Ph.D.",
    email: "dkwak@kean.edu",
    phone: "(908) 737-4715",
  },
  admissions: {
    email: "gradadmissions@kean.edu",
    phone: "(908) 737-4723",
    fallDeadline: "January 15",
    springDeadline: "October 15",
    note: "Applications open in Fall 2025 for enrollment in Fall 2026.",
  },
  links: {
    phd: "https://www.kean.edu/academics/programs/computer-science-phd",
    department:
      "https://www.kean.edu/academics/dorothy-and-george-hennings-college-science-mathematics-and-technology/department-3",
    faculty: "https://www.kean.edu/department-3-2-0",
    researchers: "https://researchers.kean.edu",
    apply: "https://www.kean.edu/apply-now",
  },
} as const;

export const nav = [
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/phd", label: "Ph.D." },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
