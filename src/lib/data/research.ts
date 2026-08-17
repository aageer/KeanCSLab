export type Method = {
  name: string;
  kind: "method" | "dataset" | "benchmark" | "tooling";
  detail: string;
};

export type ResearchArea = {
  slug: string;
  index: string;
  title: string;
  short: string;
  lede: string;
  statement: string;
  questions: string[];
  methods: Method[];
  tracks: { title: string; body: string }[];
  phdFit: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "trustworthy-ai",
    index: "01",
    title: "Trustworthy & Human-Centered AI",
    short: "Models people can inspect, contest, and live with.",
    lede: "How should learning systems explain themselves — and to whom — when they enter classrooms, clinics, and civic software?",
    statement:
      "Kean CS faculty work on explainable and human-centered AI: not only accuracy, but whether a person can form a usable mental model of a system, detect failure, and refuse a bad recommendation. The thread runs through XAI, bias-aware evaluation, and computing-education research on how students and practitioners actually encounter AI tools.",
    questions: [
      "What explanations help non-experts calibrate trust rather than merely increase it?",
      "How do we evaluate models when the user population is socioeconomically and linguistically diverse?",
      "Where should a doctoral project sit between model internals and the interface that carries them?",
    ],
    methods: [
      {
        name: "Explainable AI (XAI)",
        kind: "method",
        detail:
          "Feature attribution, concept-based explanations, and human-subject studies of explanation usefulness — not explanation volume.",
      },
      {
        name: "Human-centered evaluation",
        kind: "method",
        detail:
          "Task-based studies, think-aloud protocols, and sociotechnical analysis of how people register, contest, and recover from model errors.",
      },
      {
        name: "Fairness & robustness suites",
        kind: "benchmark",
        detail:
          "Standard classification and language benchmarks paired with subgroup analysis; accent and dialect stress tests for speech models.",
      },
      {
        name: "Inclusive design curricula",
        kind: "tooling",
        detail:
          "Public departmental work on embedding equitable and inclusive design across undergraduate CS — a living lab for how AI literacy is taught.",
      },
    ],
    tracks: [
      {
        title: "Explanation as an interface problem",
        body: "Adenuga’s stated focus on human-centered and explainable AI sits next to Ma’s HCI/LLM work: a natural doctoral spine is the design of explanations that are measurable in human terms, not only in fidelity metrics.",
      },
      {
        title: "Evaluation under real users",
        body: "Kwak, Hu, and collaborators have publicly examined how automatic speech recognition handles accents. That is the evaluation posture we want for doctoral work: the benchmark is incomplete until the population is.",
      },
      {
        title: "AI in the curriculum",
        body: "Morreale, Li, Kumar, and Kwak publish on computing education and inclusive design. Ph.D. students can treat pedagogy itself as a research site — instruments, not anecdotes.",
      },
    ],
    phdFit:
      "Strong fit if you want a dissertation that binds model behavior to human judgment — XAI, HCI for AI, or evaluation methodology. Bring a quantitative backbone and a willingness to run studies with people, not only with leaderboards.",
  },
  {
    slug: "vision-health",
    index: "02",
    title: "Vision, Imaging & Health AI",
    short: "Seeing systems that hold up in the clinic and the wild.",
    lede: "Representation learning for images — from medical volumes to faces that last a fraction of a second.",
    statement:
      "Computer vision at Kean spans medical image analysis, general deep learning for vision, and affective computing. The shared discipline is evaluation: a segmentation that looks clean on a challenge set is not a clinical claim, and a microexpression classifier is not a theory of emotion until the dataset and protocol say so.",
    questions: [
      "Which inductive biases survive domain shift between scanners, sites, and patient populations?",
      "How do we learn from scarce, privacy-constrained medical labels?",
      "What does a fair, reproducible protocol look like for fleeting facial behavior?",
    ],
    methods: [
      {
        name: "Medical image analysis",
        kind: "method",
        detail:
          "Convolutional and transformer backbones for detection, segmentation, and quantification; careful train/val/test hygiene across sites.",
      },
      {
        name: "Microexpression corpora",
        kind: "dataset",
        detail:
          "Public review work from Kwak and collaborators surveys recognition, classification, and datasets — the map a new doctoral project should start from, not skip.",
      },
      {
        name: "Challenge benchmarks",
        kind: "benchmark",
        detail:
          "Standard vision suites (classification, detection, segmentation) plus domain-specific medical challenges. We treat leaderboard position as a starting measurement, not a result.",
      },
      {
        name: "On-device vision",
        kind: "tooling",
        detail:
          "Embedded and edge inference (Li, Lyu) when the camera cannot assume a datacenter — latency, memory, and privacy as first-class constraints.",
      },
    ],
    tracks: [
      {
        title: "Medical imaging",
        body: "Xu’s public focus is computer vision, deep learning, and medical image analysis. Doctoral work here should name the clinical decision, the imaging modality, and the failure mode — not only the architecture.",
      },
      {
        title: "Affective and fine-grained vision",
        body: "Kwak’s microexpression survey is a methods paper in the best sense: it forces a student to choose a dataset, a split, and a claim that the literature has not already exhausted.",
      },
      {
        title: "Vision + language on the edge",
        body: "Boyang Li and Kuan Huang work across vision, NLP, and embedded ML. A dissertation can compress multimodal models without pretending compression is free.",
      },
    ],
    phdFit:
      "Ideal if you already write PyTorch (or equivalent), can read a medical or vision paper to the loss function, and want a project with a measurable artifact — a model, a protocol, or a dataset critique.",
  },
  {
    slug: "security-privacy",
    index: "03",
    title: "Security, Privacy & Trust Architectures",
    short: "Zero trust, sensing, and the right to be unobserved.",
    lede: "Security is not a perimeter. It is a set of assumptions you can state — and a set you can test.",
    statement:
      "Faculty work ranges from cybersecurity and software assurance to privacy-preserving sensing and zero-trust designs for smart environments. The Ph.D. program names cybersecurity as a priority domain. SOTA treats that as a research area: threat models, measurements, and systems you can evaluate in a laboratory you control — not a certification checklist.",
    questions: [
      "What does zero trust look like when the ‘enterprise’ is a home full of sensors?",
      "How do we learn from mobile and IoT traces without reconstituting the person?",
      "Where does explainability help a defender — and where does it help an adversary?",
    ],
    methods: [
      {
        name: "Zero-trust & explainable security",
        kind: "method",
        detail:
          "Public work with Kwak on privacy-preserving smart-home security using zero-trust architecture and explainability — a template for systems papers that name both the control and the human-readable rationale.",
      },
      {
        name: "Mobile sensing traces",
        kind: "dataset",
        detail:
          "On-device and participatory sensing (Hu) with explicit consent, minimization, and attack-surface notes. We do not treat a smartphone as a free sensor.",
      },
      {
        name: "Privacy threat modeling",
        kind: "method",
        detail:
          "STRIDE-style and LINDDUN-style analysis before a line of training code. If you cannot name the adversary, you do not yet have a security thesis.",
      },
      {
        name: "Embedded ML security",
        kind: "tooling",
        detail:
          "Model extraction, membership inference, and side channels on constrained devices (Li) — security properties of the artifact, not only of the network.",
      },
    ],
    tracks: [
      {
        title: "Smart environments",
        body: "Kwak’s IoT and CPS work, plus the smart-home security paper, give a concrete setting: homes, campuses, and civic sensors that cannot assume a trusted LAN.",
      },
      {
        title: "Privacy in learning",
        body: "Federated and privacy-aware orchestration appears in Kwak’s 6G/consumer-service papers. Doctoral projects can take the measurement seriously: what leakage remains after the protocol?",
      },
      {
        title: "Cybersecurity education & practice",
        body: "Li, Steiner, and Morreale (WiCyS) connect security research to how the next cohort is trained. A methods contribution can be a lab, a dataset, or a curriculum instrument — if it is evaluated.",
      },
    ],
    phdFit:
      "Come with systems or security coursework and a habit of writing threat models. We are not looking for a survey of tools; we are looking for a claim you can falsify.",
  },
  {
    slug: "intelligent-systems",
    index: "04",
    title: "Intelligent Systems, IoT & Immersive Networks",
    short: "Cyber-physical stacks from the radio to the headset.",
    lede: "Latency, orchestration, and the physical world — 6G, XR, and the devices that refuse to sit still.",
    statement:
      "Kwak’s group and collaborators publish on cyber-physical systems, IoT, and ultra-low-latency XR in emerging consumer networks. Lei works on systems, networking, and cloud. Lyu works on edge AI and time series. Together they describe a stack: sense, decide, actuate — under energy, privacy, and millisecond budgets.",
    questions: [
      "What orchestration actually keeps XR inside a human just-noticeable-difference?",
      "Which compute should live on the device, at the edge, or in the region?",
      "How do we evaluate a CPS paper when the ‘world’ is a lab, a campus, or a city?",
    ],
    methods: [
      {
        name: "Edge / split inference",
        kind: "method",
        detail:
          "Partitioned models and time-series predictors (Lyu) that respect device memory and radio duty cycles.",
      },
      {
        name: "Network & cloud measurement",
        kind: "method",
        detail:
          "Latency, jitter, and failure injection on programmable networks and cloud paths (Lei) — graphs before slogans.",
      },
      {
        name: "XR interaction loops",
        kind: "benchmark",
        detail:
          "Motion-to-photon and collaborative-session metrics. Public Kwak work on ultra-low-latency XR in 6G consumer networks is the citation to beat, not to paraphrase.",
      },
      {
        name: "Campus-scale sensing",
        kind: "dataset",
        detail:
          "IoT and mobile traces collected under IRB-ready protocols. A doctoral dataset is a contribution if the schema, consent, and release plan are part of the paper.",
      },
    ],
    tracks: [
      {
        title: "6G and collaborative XR",
        body: "A live literature: federated orchestration, consumer-data privacy, and collaborative intelligence for XR. The dissertation question is which layer owns the SLA.",
      },
      {
        title: "Cyber-physical control",
        body: "IoT plus control — not dashboards. If the system closes a loop on a physical process, the evaluation must include the process, not only the packet.",
      },
      {
        title: "Immersive HCI",
        body: "Ma and Subramanian work in VR/AR. Pair their interaction questions with the network stack and you have a systems+HCI thesis that NYC-metro partners can actually use.",
      },
    ],
    phdFit:
      "Best for students who can write both a systems experiment and a user-facing metric. Networking, embedded, or XR portfolios are all valid entries — the bar is measurement.",
  },
  {
    slug: "data-knowledge",
    index: "05",
    title: "Data, Language & Knowledge Systems",
    short: "From tokens and tables to ontologies that mean something.",
    lede: "Data science is not a pile of notebooks. It is a claim about a population, a schema, and a failure mode.",
    statement:
      "The Ph.D. program names data science as a core focus. Faculty cover NLP, data mining, databases, ontologies, and time-series learning. The lab stance is conservative about hype and liberal about rigor: a language model is a tool; a knowledge graph is a hypothesis about the world; a dashboard is not a dissertation.",
    questions: [
      "When does an ontology earn its keep versus a fine-tuned extractor?",
      "How do we mine campus, civic, or clinical text without laundering bias into policy?",
      "What does a reproducible data-science thesis look like when the interesting data cannot leave the room?",
    ],
    methods: [
      {
        name: "NLP & information extraction",
        kind: "method",
        detail:
          "Transformer pipelines, evaluation on held-out domains, and error taxonomies (Wang, Kollapally, Li). Report the confusion, not only the F1.",
      },
      {
        name: "Ontologies & knowledge graphs",
        kind: "method",
        detail:
          "Kollapally’s ontology and database work: formal vocabularies, alignment, and query. A graph that cannot answer a question a practitioner cares about is decoration.",
      },
      {
        name: "Time-series & NAS",
        kind: "method",
        detail:
          "Lyu’s predictive analytics and neural architecture search — search spaces you can name, compute budgets you can defend.",
      },
      {
        name: "Relational & web-scale data",
        kind: "tooling",
        detail:
          "Huang’s database and web-application stack for collecting, cleaning, and serving research data with audit trails.",
      },
    ],
    tracks: [
      {
        title: "Language as infrastructure",
        body: "NLP projects should pick a domain (education, health, civic records) and a decision. ‘We fine-tuned a model’ is a method paragraph, not a thesis statement.",
      },
      {
        title: "Knowledge systems",
        body: "Ontologies plus databases: the unfashionable, durable half of AI. Excellent fit for students who like formal structure and messy institutions.",
      },
      {
        title: "Discrete foundations",
        body: "Emanouilidis’s combinatorics and number theory remind the lab that algorithms have proofs. Theory-leaning doctoral work is welcome when it speaks to a computing problem.",
      },
    ],
    phdFit:
      "Bring fluency in data wrangling and at least one of: NLP, databases, or statistical learning. You will be asked what population your numbers describe.",
  },
  {
    slug: "hci-education",
    index: "06",
    title: "HCI, XR & Computing Education",
    short: "Interfaces, inclusion, and the next generation of researchers.",
    lede: "Who gets to use the system — and who gets to become the person who builds the next one?",
    statement:
      "Morreale’s HCI, software engineering, and CS-education research is a departmental signature, including public work on inclusive design across the undergraduate curriculum, transfer-student sociotechnical experience, and broadening participation. Ma and Subramanian add XR. This is not ‘soft’ CS. It is empirical, instrumented, and publishable in CHI, SIGCSE, and HCI venues.",
    questions: [
      "What does inclusive design look like as a required practice, not an elective sermon?",
      "How do transfer and first-generation students actually experience university software?",
      "When is XR a better interface — and when is it a more expensive mouse?",
    ],
    methods: [
      {
        name: "HCI study design",
        kind: "method",
        detail:
          "Controlled studies, field studies, and mixed methods. Pre-register when you can; report when you cannot. The method section is the contribution.",
      },
      {
        name: "Curriculum as experiment",
        kind: "method",
        detail:
          "Public papers on embedding equitable design and assessing learning outcomes (including a SIGCSE 2024 pilot with Ojeda, Morreale, and Kwak). Treat the course as a system under test.",
      },
      {
        name: "XR prototypes",
        kind: "tooling",
        detail:
          "Unity/Unreal or web-XR artifacts with defined tasks, not demos. Latency and cybersickness are data.",
      },
      {
        name: "Sociotechnical corpora",
        kind: "dataset",
        detail:
          "Interview, interaction, and log data from real institutional systems — collected with consent and analyzed with a named theory, not a vibe.",
      },
    ],
    tracks: [
      {
        title: "Inclusive & equitable design",
        body: "Morreale’s collaborations (including work with Burnett and others on inclusive design in the CS curriculum) give incoming students a literature and a local practice to extend.",
      },
      {
        title: "Institutional interfaces",
        body: "The CHI-facing work on transfer students and class registration is a model: pick a system everyone hates, measure why, and propose a change you can evaluate.",
      },
      {
        title: "Immersive learning and work",
        body: "XR for learning, accessibility, or professional practice — with Ma and Subramanian — if you can say what the headset is for.",
      },
    ],
    phdFit:
      "HCI, learning sciences, or software-engineering backgrounds are all viable. You should enjoy writing, running studies, and arguing from evidence. A portfolio of interfaces helps; a portfolio of unanswered questions helps more.",
  },
];

export function getResearch(slug: string) {
  return researchAreas.find((area) => area.slug === slug);
}
