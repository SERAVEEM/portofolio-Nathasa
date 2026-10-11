export type ProjectCategory = 'Cybersecurity' | 'UI/UX Design';

export const BASE_PATH = "/portofolio-Nathasa";

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  year: string;
  image: string;
  tools: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  statusNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  rating: number;
  description: string;
  badge: string;
}

export interface ToolCategory {
  title: string;
  subtitle: string;
  tools: {
    name: string;
    level: string;
    iconEmoji: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "Web App Pentest: OWASP Juice Shop",
    category: "Cybersecurity",
    tagline: "Black-box & gray-box penetration test identifying critical vulnerabilities with full remediation advisory.",
    description: "Conducted an in-depth black-box/gray-box penetration test of OWASP Juice Shop in an isolated Kali Linux lab adhering to OWASP Top 10 and WSTG.",
    fullOverview: "Conducted a black-box/gray-box penetration test of OWASP Juice Shop in an isolated Kali Linux lab, following OWASP Top 10 (2021) and WSTG methodologies. Identified and validated four vulnerabilities, documenting their evidence, impact, root causes, and remediation recommendations in a formal security report.",
    challenge: "Conduct a black-box/gray-box penetration test of OWASP Juice Shop in an isolated lab environment using Kali Linux, VMware, and Docker. The main challenge was identifying and validating web application vulnerabilities based on the OWASP Top 10 (2021) and WSTG, while gathering reliable evidence for each finding.",
    solution: "Performed structured vulnerability testing using Burp Suite, supported by curl, jq, Hashcat, and jwt.io. Identified and validated four vulnerabilities: SQL Injection (Critical, 9.8), IDOR (High, 9.1), Password Hash Disclosure (High, 8.1), and DOM-based XSS (Medium-High, 6.1). Documented each finding with evidence, root cause, and remediation recommendations in a formal security report, alongside a separate testing journal documenting the methodology and technical challenges.",
    year: "2025",
    image: getAssetPath("/01_juiceshop.png"),
    tools: ["Burp Suite", "OWASP Top 10", "SQL Injection", "XSS", "IDOR", "CVSS", "OWASP WSTG", "Hashcat"],
    metrics: ["4 Validated Vulnerabilities", "CVSS 9.8 Critical SQLi", "Comprehensive Security Report"],
    githubUrl: "https://github.com/Athyre/juice-shop-pentest"
  },
  {
    id: "project-2",
    title: "Secure vs Vulnerable Login System",
    category: "Cybersecurity",
    tagline: "Hands-on web security lab comparing vulnerable and hardened PHP authentication systems.",
    description: "Built a hands-on Web Application Security Lab featuring vulnerable and hardened PHP login systems across 8 OWASP Top 10 vulnerabilities.",
    fullOverview: "Built a hands-on Web Application Security Lab featuring vulnerable and hardened PHP login systems, covering eight common web vulnerabilities mapped to the OWASP Top 10 and CWE. The project demonstrates the complete security lifecycle — from exploitation and evidence collection to remediation and retesting.",
    challenge: "Identify and exploit vulnerabilities across authentication, session management, input validation, access control, and request handling within a controlled lab environment (Windows host running XAMPP + Kali Linux VM via VMware). Each vulnerability required active exploitation with documented evidence, followed by a verified fix that did not break existing functionality.",
    solution: "Hardened the PHP application against all eight vulnerabilities using prepared statements, password hashing, secure sessions, CSRF protection, rate limiting, output encoding, generic error handling, and server-side authorization checks. Each vulnerability was exploited with Burp Suite, remediated, and successfully retested with documented evidence.",
    year: "2025",
    image: getAssetPath("/02_securevuln.png"),
    tools: ["PHP", "Web Security", "OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Burp Suite", "Penetration Testing"],
    metrics: ["8 Vulnerabilities Patched", "Zero Regressions", "End-to-End Retest Verified"],
    githubUrl: "https://github.com/Athyre/php-login-vuln-vs-secure"
  },
  {
    id: "project-3",
    title: "Empirical Study: QR Scanners vs Quishing",
    category: "Cybersecurity",
    statusNote: "Accepted and awaiting publication",
    tagline: "Empirical security evaluation of mobile QR code scanner handling against malicious phishing vectors.",
    description: "Rigorous empirical evaluation assessing how commercial mobile QR code scanner applications detect and handle sophisticated QR phishing vectors.",
    fullOverview: "An empirical security research investigation assessing how commercial and native mobile QR code scanner applications detect, preview, and process malicious QR phishing (quishing) vectors, exposing scanner heuristic limitations and user vulnerability.",
    challenge: "Construct an automated test generator for diverse QR phishing payloads to systematically benchmark scanning applications, evaluating scanner preview safety, redirection tracking, and heuristic detection against cloaked URLs.",
    solution: "Developed an empirical testing framework and dataset generator evaluating mobile QR scanners against obfuscated URLs and social engineering lures. Uncovered critical preview blindspots and authored a structured research paper detailing vulnerability patterns and defense recommendations.",
    year: "2025",
    image: getAssetPath("/03_icoris.png"),
    tools: ["Mobile Security", "Quishing Analysis", "QR Heuristics", "Phishing Simulation", "Empirical Research"],
    metrics: ["Status: Accepted & Awaiting Publication", "Multi-Scanner Benchmark", "Published Research"],
    githubUrl: "https://github.com/Hyphen-14/QR-Phishing-Example-Generator-for-Scanner-App-Testing-/tree/main/Result"
  },
  {
    id: "project-4",
    title: "Talent Connect: Digital Recruitment Platform",
    category: "UI/UX Design",
    statusNote: "🏆 Winner FIND IT UI/UX Competition",
    tagline: "Award-winning digital hiring platform connecting candidates and recruiters through a fair, transparent experience.",
    description: "Integrated recruitment platform with transparent hiring status, career roadmap guidance, and AI-powered talent discovery.",
    fullOverview: "A digital recruitment platform that connects jobseekers and recruiters through a fair, transparent, and efficient hiring experience. The project was developed as a competition entry for FIND IT UI/UX Competition and won the competition.",
    challenge: "Jobseekers struggle with excessive requirements, rigid filters, scattered job listings, and unclear recruitment processes, while recruiters face hundreds of applications and difficulty identifying promising candidates.",
    solution: "Designed an integrated recruitment platform with transparent hiring status, career roadmap guidance, and AI-powered talent discovery to improve hiring transparency, help jobseekers develop relevant skills, and help recruiters discover potential candidates beyond conventional filters.",
    year: "2024",
    image: getAssetPath("/04_talentconnect.png"),
    tools: ["Figma", "Design Thinking", "User Research", "User Persona", "User Journey", "Prototyping"],
    metrics: ["FIND IT 1st Place Winner", "Full Design System", "High-Fidelity Interactive Prototype"]
  },
  {
    id: "project-5",
    title: "ShelterTrack: Animal Shelter Management System",
    category: "UI/UX Design",
    tagline: "Centralized web-based operations platform for animal shelter records, medical tracking, and adoption.",
    description: "Centralized shelter management system with digital health records, care reminders, caretaker task management, and public adoption.",
    fullOverview: "Led the development of ShelterTrack, a centralized web-based management system designed to help animal shelters manage animal records, medical history, care schedules, caretaker assignments, and adoption in one platform. Contributed to the product design while coordinating the team and project execution.",
    challenge: "Many animal shelters still rely on manual records, unstructured spreadsheets, and memory, resulting in lost information, poor health monitoring, and difficulties managing daily shelter operations.",
    solution: "Designed and coordinated the development of a centralized shelter management system with digital health records, care reminders, contact tracing, caretaker task management, and a public adoption platform to organize shelter operations and improve animal health monitoring.",
    year: "2024",
    image: getAssetPath("/05_sheltertrack.png"),
    tools: ["Product Design", "UI/UX Design", "Project Management", "User Flow", "User Stories"],
    metrics: ["All-in-One Shelter Operations", "Digital Health Records", "Full Public Adoption Portal"]
  },
  {
    id: "project-6",
    title: "Parenthink — Digital Parenting Platform",
    category: "UI/UX Design",
    tagline: "Integrated parenting platform guiding new parents with accessible resources, tracking, and marketplace tools.",
    description: "Digital parenting platform featuring educational articles, parenting videos, a trusted marketplace, and vaccination tracking.",
    fullOverview: "A digital parenting platform that helps parents, especially new parents, navigate their parenting journey through accessible information, parenting resources, and practical tools in one platform.",
    challenge: "New parents often face difficulties finding reliable parenting information and managing various parenting needs, from learning about childcare to keeping track of vaccinations and finding essential parenting products.",
    solution: "Designed an integrated parenting platform featuring parenting articles, educational videos, a parenting marketplace, and vaccination tracking to provide parents with accessible resources and practical tools throughout their parenting journey.",
    year: "2024",
    image: getAssetPath("/06_parenthink.png"),
    tools: ["Figma", "UI/UX Design", "User Research", "User Flow", "Prototyping", "Product Design"],
    metrics: ["End-to-End Vaccination Tracker", "Parenting Resource Library", "Curated Marketplace"]
  },
  {
    id: "project-7",
    title: "Mobile App Security: JAKI v4.0.19 Assessment",
    category: "Cybersecurity",
    tagline: "Comprehensive static and dynamic vulnerability assessment of Jakarta's flagship municipal mobile application.",
    description: "Performed APK decompilation, dynamic interception, and endpoint testing, discovering 5 vulnerabilities evaluated under OWASP MASTG.",
    fullOverview: "Conducted a mobile application security assessment of JAKI v4.0.19 using static and dynamic analysis to identify, exploit, and assess security vulnerabilities across the application’s client, authentication, and network layers.",
    challenge: "Identify security weaknesses in a real-world mobile application while mapping the attack surface, validating vulnerabilities through controlled exploitation, and assessing their potential impact using established security standards.",
    solution: "Performed APK decompilation, traffic interception, API endpoint testing, and vulnerability assessment, identifying five vulnerabilities including WebView injection, OTP brute force, cleartext traffic, hardcoded API keys, and information disclosure. Findings were evaluated using OWASP MASTG and CVSS v3.1, with mitigation recommendations provided for each vulnerability.",
    year: "2024",
    image: getAssetPath("/project-1.jpg"),
    tools: ["Mobile Penetration Testing", "JADX", "Burp Suite", "Frida", "Android Emulator", "API Security Testing", "OWASP MASTG"],
    metrics: ["5 Vulnerabilities Uncovered", "OWASP MASTG Compliant", "CVSS v3.1 Impact Scored"]
  },
  {
    id: "project-8",
    title: "E-Commerce Threat Modeling & SQLi Assessment",
    category: "Cybersecurity",
    tagline: "STRIDE framework threat modeling and hands-on exploit validation across critical e-commerce workflows.",
    description: "Mapped security threats across auth and payment workflows using STRIDE with authentication bypass proof of concept.",
    fullOverview: "Conducted a security assessment of an e-commerce platform using the STRIDE threat modelling framework, covering authentication, payment, search, promotion, and Cash on Delivery (COD) features. The project included an attack demonstration on OWASP Juice Shop to validate identified security risks.",
    challenge: "Identify potential threats across critical e-commerce workflows, map them to STRIDE categories, assess their potential impact, and validate a high-risk authentication vulnerability through a controlled security testing environment.",
    solution: "Mapped security threats including Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege, then demonstrated authentication bypass through SQL Injection on the login feature using Burp Suite. Proposed prioritized mitigations including parameterized queries, server-side validation, rate limiting, MFA, secure logging, and WAF protection.",
    year: "2024",
    image: getAssetPath("/project-2.jpg"),
    tools: ["STRIDE", "Threat Modelling", "OWASP Juice Shop", "Burp Suite", "SQL Injection", "Web Security"],
    metrics: ["6 STRIDE Categories Evaluated", "Auth Bypass Demonstrated", "Hardened WAF & Query Policies"],
    githubUrl: "https://github.com/Athyre/ecommerce-security-threat-modeling-sqli"
  },
  {
    id: "project-9",
    title: "Digital Forensics & Incident Investigation",
    category: "Cybersecurity",
    statusNote: "Security Lab",
    tagline: "Filesystem artifact recovery, memory inspection, and structured digital evidence correlation.",
    description: "Hands-on digital forensic analysis reconstructing attack timelines, file activity, and preserving chain of custody.",
    fullOverview: "Conducted forensic examinations focusing on digital artifact extraction, volatile memory analysis, and log correlation to reconstruct breach sequences and identify unauthorized intrusion indicators.",
    challenge: "Extract and interpret fragmented evidentiary data across NTFS filesystems and memory dumps while guaranteeing digital integrity and evidentiary validity.",
    solution: "Employed forensic frameworks to parse master file tables, correlate prefetch artifacts, and analyze network traces, delivering a comprehensive timeline analysis report.",
    year: "2024",
    image: getAssetPath("/project-3.jpg"),
    tools: ["Digital Forensics", "Autopsy", "FTK Imager", "Volatility", "Incident Response", "Artifact Analysis"],
    metrics: ["Timeline Reconstruction", "Chain of Custody Preserved", "Detailed Incident Report"]
  },
  {
    id: "project-11",
    title: "FindIt: Emergency Response & Evacuation App",
    category: "UI/UX Design",
    tagline: "Emergency mobile application delivering rapid evacuation mapping and decisive safety navigation.",
    description: "Interactive evacuation map and crisis assistance app helping users identify nearby safe points under emergency pressure.",
    fullOverview: "An emergency response application that helps users respond to dangerous situations, including accidents and natural disasters. The application focuses on an interactive map that helps users identify nearby evacuation locations and navigate to a safer area.",
    challenge: "During accidents or natural disasters, people may struggle to determine where to evacuate and which route is safest, especially when they are under pressure and have limited information about nearby evacuation locations.",
    solution: "Designed an emergency response application centered around an interactive evacuation map, allowing users to identify nearby evacuation points and receive directions to reach them. The application aims to simplify emergency navigation and help users make faster evacuation decisions during critical situations.",
    year: "2024",
    image: getAssetPath("/11_findit.png"),
    tools: ["Figma", "User Research", "User Flow", "Prototyping", "Design Systems"],
    metrics: ["Interactive Safe-Zone Map", "Rapid Emergency Navigation", "Stress-Resilient Interface"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-bncc-cfo",
    role: "Chief Financial Officer",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Mar 2026 — Present",
    location: "Malang, East Java, Indonesia",
    description: "Serving as executive CFO overseeing financial planning, budgeting, resource allocation, and organizational governance across BNCC chapters.",
    achievements: [
      "Manage comprehensive financial operations and organizational budgets across multiple event cycles and organizational initiatives.",
      "Ensure fiscal accountability, financial strategy alignment, and sound resource management across divisions."
    ],
    skills: ["Financial Management", "Organizational Leadership", "Budgeting", "Strategic Planning"]
  },
  {
    id: "exp-himti-manager",
    role: "Manager of Creative and Design",
    company: "HIMTI BINUS University",
    period: "Mar 2026 — Present",
    location: "Malang, East Java, Indonesia",
    description: "Leading the Creative and Design division to direct visual communication, brand presence, and design system governance across all organization initiatives.",
    achievements: [
      "Manage end-to-end creative workflows, brand governance, and digital promotional assets for university-wide tech events.",
      "Oversee and mentor design team members, standardizing design processes and asset quality assurance."
    ],
    skills: ["Creative Direction", "Design Systems", "Team Leadership", "Brand Identity"]
  },
  {
    id: "exp-bncc-technoscape",
    role: "Coordinator of Design and Documentation — TechnoScape 2026",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Mar 2026 — Jul 2026",
    location: "West Jakarta, Jakarta, Indonesia · Hybrid",
    description: "Led the Design and Documentation division for TechnoScape 2026, BNCC's flagship nationwide event series consisting of a seminar, regional workshops, and a national hackathon.",
    achievements: [
      "Directed cross-regional design workflows by assigning priorities, balancing workloads, and monitoring progress to keep deliverables strictly on schedule.",
      "Coordinated with cross-functional teams to manage evolving requirements and maintain consistent quality of design assets across all event formats."
    ],
    skills: ["Workflow Optimization", "Stakeholder Management", "Cross-Regional Coordination", "Design Leadership"]
  },
  {
    id: "exp-bncc-trainer",
    role: "UI/UX Trainer",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Sep 2025 — Mar 2026",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Delivered a comprehensive 13-session UI/UX training program for BNCC members through weekly lectures and practical hands-on workshops.",
    achievements: [
      "Structured curriculum, practical exercises, case studies, mid-project, and final project using Figma, Storyset, Pinterest, and Dribbble to evaluate participant design proficiency.",
      "Taught end-to-end UI/UX design concepts for responsive web, mobile, and tablet interfaces while providing individualized technical mentorship."
    ],
    skills: ["UI/UX Design", "Figma", "Curriculum Development", "Mentoring", "Public Speaking"]
  },
  {
    id: "exp-binus-fyp-partner",
    role: "First Year Program (FYP B29) — Freshmen Partner",
    company: "BINUS University",
    period: "Sep 2025 — Jun 2026",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Mentored first-year Computer Science students throughout their inaugural academic year, facilitating academic adaptation and personal development.",
    achievements: [
      "Monitored freshmen attendance and academic performance, providing proactive guidance to maintain academic success.",
      "Served as a trusted advisory point connecting freshmen with university campus resources and academic life guidance."
    ],
    skills: ["Student Mentorship", "Public Speaking", "Academic Guidance", "Leadership"]
  },
  {
    id: "exp-himti-sesvent",
    role: "Coordinator of Design and Documentation — SESVENT 2025",
    company: "HIMTI BINUS University",
    period: "Sep 2025 — Dec 2025",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Coordinated the Design and Documentation team for SESVENT 2025, supporting Leadership Basic Training and the Internal Gathering.",
    achievements: [
      "Coordinated visual design planning, agile task allocation, and prompt asset delivery ensuring smooth event execution."
    ],
    skills: ["Team Coordination", "Event Coordination", "Graphic Design", "Documentation"]
  },
  {
    id: "exp-bncc-opening",
    role: "Co-Coordinator of Design and Documentation — BNCC Opening Season 2025",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Jul 2025 — Aug 2025",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Co-led Design and Documentation for BNCC Opening Season 2025, BNCC's major annual recruitment initiative welcoming new members.",
    achievements: [
      "Assisted the coordinator in overseeing design ticket requests, monitoring task progress, and ensuring on-time delivery of visual assets.",
      "Collaborated across committees to ensure promotional materials stayed strictly aligned with recruitment branding objectives."
    ],
    skills: ["Collaborative Leadership", "Task Monitoring", "Brand Alignment", "Asset Delivery"]
  },
  {
    id: "exp-binus-fyp-leader",
    role: "First Year Program (FYP B29) — Freshmen Leader",
    company: "BINUS University",
    period: "Jul 2025 — Sep 2025",
    location: "Malang, East Java, Indonesia · On-site",
    description: "Guided and mentored incoming Computer Science freshmen during BINUS University's orientation program.",
    achievements: [
      "Facilitated orientation and team-building activities, creating an approachable, professional environment through strong communication and teamwork."
    ],
    skills: ["Mentorship", "Team Leadership", "Interpersonal Communication", "Facilitation"]
  },
  {
    id: "exp-himti-digifest",
    role: "Coordinator of Design and Documentation — DIGIFEST 2025",
    company: "HIMTI BINUS University",
    period: "Apr 2025 — Sep 2025",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Coordinated the Design and Documentation division for DigiFest, HIMTI's flagship tech event for high school students across East Java.",
    achievements: [
      "Led task delegation and prioritized workloads under constrained team resources, successfully delivering all event materials.",
      "Adapted project timelines and design deliverables to accommodate evolving requirements without delaying milestones."
    ],
    skills: ["Resource Management", "Workload Prioritization", "Visual Communication", "Design Delivery"]
  },
  {
    id: "exp-himti-luminova",
    role: "Academic Committee Member — LUMINOVA",
    company: "HIMTI × HIMPRE BINUS University",
    period: "Mar 2025 — Nov 2025",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Organized community outreach introducing Business Model Canvas and UI/UX fundamentals to high school students across Malang.",
    achievements: [
      "Collaborated with the Technology Coordinator to build the core UI/UX educational module aligned with student learning outcomes.",
      "Coordinated cross-organization content development and practical workshops to deliver interactive training."
    ],
    skills: ["Curriculum Development", "Educational Content Development", "UI/UX Training", "Collaboration"]
  },
  {
    id: "exp-himti-treasurer",
    role: "Treasurer (Core Committee) — Company Visit 2025",
    company: "HIMTI BINUS University",
    period: "Apr 2025 — Jul 2025",
    location: "Malang, East Java, Indonesia · Hybrid",
    description: "Managed finances and budgeting for HIMTI's industrial company visit to PT Salam Pacific Indonesia Lines (SPIL).",
    achievements: [
      "Administered fundraising records, tracked vendor transactions, and managed event budgets with transparent financial reporting."
    ],
    skills: ["Financial Management", "Vendor Management", "Budget Tracking", "Documentation"]
  },
  {
    id: "exp-bncc-activist",
    role: "Human Resource Division Activist",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Feb 2025 — Mar 2026",
    location: "Malang, East Java, Indonesia",
    description: "Participated in BNCC's Technology Project Member (TPM) track and internal soft-skills development programs.",
    achievements: [
      "Completed foundational training in UI/UX design and built a hackathon website prototype as the practical graduation project.",
      "Trained in public speaking, proposal writing, technical documentation, and professional communication."
    ],
    skills: ["UI/UX Design", "Public Speaking", "Communication", "Technical Documentation"]
  },
  {
    id: "exp-himti-activist",
    role: "Creative and Design Division Activist",
    company: "HIMTI BINUS University",
    period: "Mar 2025 — Mar 2026",
    location: "Malang, East Java, Indonesia",
    description: "Produced creative visual communication assets and supported cross-division initiatives including treasury and sponsorships.",
    achievements: [
      "Designed visual assets across multiple student organization events with strict adherence to brand guidelines.",
      "Supported treasury financial logging and sponsorship acquisition to broaden organizational operations."
    ],
    skills: ["Figma", "GUI Design", "Visual Communication", "Sponsorship Support"]
  }
];

export interface StatItem {
  number: string;
  label: string;
  description: string;
}

export const STATS_DATA: StatItem[] = [
  {
    number: "50+",
    label: "Students Taught",
    description: "Delivered 13 UI/UX teaching sessions, covering design fundamentals, Figma, and prototyping."
  },
  {
    number: "5x",
    label: "Design Coordinator",
    description: "Hands-on lead who decided what needed to be built, prioritized the workload, and contributed directly to the design work."
  },
  {
    number: "8",
    label: "Vulnerabilities Exploited & Fixed",
    description: "Built a vulnerable PHP login, exploited 8 OWASP Top 10 flaws with Burp Suite, then secured and retested each one."
  },
  {
    number: "50+",
    label: "CTF Challenges Solved",
    description: "Solved challenges across CTF competitions, CyLab, and Hack The Box, spanning multiple security categories."
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "ICORIS 2026 Paper Author",
    organization: "10th Int. Conf. on Research and Innovation in Information Systems (2026)",
    year: "2026",
    rating: 5,
    description: "Co-authored a research paper on the comparative evaluation of real-world QR code scanners in detecting quishing (QR code phishing). The paper has been accepted for publication and is currently undergoing the publication process.",
    badge: "Accepted Paper"
  },
  {
    id: "ach-2",
    title: "UI/UX Design Trainer PRAETO",
    organization: "BNCC (2025/2026)",
    year: "2025/2026",
    rating: 5,
    description: "Delivered 13 UI/UX training sessions to more than 50 students in the Malang region, covering foundational design principles and practical UI/UX design skills.",
    badge: "Design Trainer"
  },
  {
    id: "ach-3",
    title: "2nd Place in Information System Festival FINDIT",
    organization: "Universitas Kristen Satya Wacana (2025)",
    year: "2025",
    rating: 5,
    description: "Achieved second place in a UI/UX design competition by developing a user-centered solution to a given case study within an eight-hour challenge.",
    badge: "2nd Place Winner"
  },
  {
    id: "ach-4",
    title: "Dean’s List",
    organization: "BINUS University • School of Computer Science (2025)",
    year: "2025",
    rating: 5,
    description: "Recognized for outstanding academic performance by the School of Computer Science at BINUS University.",
    badge: "Dean's List"
  },
  {
    id: "ach-5",
    title: "Appreciation Day Awardee",
    organization: "BINUS University (2025)",
    year: "2025",
    rating: 5,
    description: "Recognized at BINUS University’s Appreciation Day for achievements in competitions and contributions to student excellence.",
    badge: "Awardee"
  },
  {
    id: "ach-6",
    title: "Business Idea Competition",
    organization: "BINUS University (2025)",
    year: "2025",
    rating: 5,
    description: "Participated in a campus-level business idea competition, developing and presenting an innovative business concept.",
    badge: "Presenter"
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    title: "UI/UX Design",
    subtitle: "Product Design, Prototyping & Collaboration",
    tools: [
      { name: "Figma", level: "UI/UX & Prototyping", iconEmoji: "🎨" },
      { name: "Figjam", level: "Brainstorming & User Flow", iconEmoji: "📋" },
      { name: "Canva", level: "Visual Assets & Presentation", iconEmoji: "✨" },
      { name: "Jira", level: "Agile & Sprint Tracking", iconEmoji: "🎯" },
      { name: "Notion", level: "PRD & Documentation", iconEmoji: "📝" }
    ]
  },
  {
    title: "Cyber Security",
    subtitle: "Penetration Testing, Forensic & Analysis",
    tools: [
      { name: "Burp Suite", level: "Web App Security & Proxy", iconEmoji: "🛡️" },
      { name: "Browser DevTools", level: "DOM & Network Inspection", iconEmoji: "🔍" },
      { name: "Android Studio", level: "Mobile Security Testing", iconEmoji: "📱" },
      { name: "Docker", level: "Isolated Lab Environments", iconEmoji: "🐳" },
      { name: "Wireshark", level: "Packet & Protocol Analysis", iconEmoji: "🦈" },
      { name: "Kali Linux", level: "Security OS & Tooling", iconEmoji: "🐉" },
      { name: "FTK Imager", level: "Disk Image & Evidence Acquisition", iconEmoji: "💾" },
      { name: "MailView", level: "Email & Header Forensics", iconEmoji: "✉️" }
    ]
  }
];
