// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PORTFOLIO HERE
// This is the single source of truth for everything shown on the site.
// Replace the placeholder text (marked TODO) with your real information.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Taís Santos",
  // Your photo: save the image as /public/profile.jpg (or .png) and keep this path.
  // If the file is missing, the site shows your initials instead — no broken image.
  photo: "/profile.jpeg",
  role: "Software Development Engineer in Test (SDET)",
  tagline:
    "I design and evolve scalable test automation frameworks in Playwright and TypeScript that deliver reliable, maintainable validation aligned with real user scenarios, powered by AI-assisted workflows.",
  location: "Open to remote",
  available: true, // shows the status badge below
  availableText: "Open to connect",
  email: "tais.santos.dev@gmail.com",
  // To enable the Resume button, drop your PDF at /public/resume.pdf and keep this path.
  // Leave it as "" to hide the button entirely.
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/tais-santos-dev",
    linkedin: "https://www.linkedin.com/in/ta%C3%ADs-santos-3202931b1",
    whatsapp: "https://wa.me/5515997817243", // +55 15 99781-7243
  },
  // 2–4 short paragraphs about you, written for international recruiters.
  about: [
    "I'm a Software Development Engineer in Test (SDET) with experience designing, developing, and evolving scalable test automation frameworks using Playwright and TypeScript, ensuring reliable, maintainable, and high-quality validation aligned with real user scenarios.",
    "My experience spans end-to-end testing, API validation, and mobile testing, with active participation throughout the Software Development Lifecycle (SDLC), from requirements analysis and test strategy definition to production validation and monitoring.",
    "I collaborate closely with developers, product managers, and cross-functional teams to identify risks early, improve software quality, and accelerate delivery through automation, continuous testing, and quality engineering practices.",
    "I also leverage AI-assisted workflows and intelligent agents to optimize quality processes such as test case generation, test data creation, failure analysis, root cause investigation, and automation development support. I'm ISTQB CTFL certified and fluent in English and Portuguese.",
  ],
};

export type Skill = { name: string; items: string[] };

export const skills: Skill[] = [
  {
    name: "Test Automation",
    items: ["Playwright", "Cypress", "Detox", "TypeScript", "JavaScript", "Python"],
  },
  {
    name: "API & Data",
    items: ["Postman", "REST APIs", "JMeter", "SQL", "MySQL Workbench", "DBeaver"],
  },
  {
    name: "CI/CD & Quality Gates",
    items: ["GitHub Actions", "Azure DevOps", "Docker", "SonarQube", "Static Analysis", "Monorepos"],
  },
  {
    name: "AI-Assisted Testing",
    items: ["Test generation", "Test data creation", "Failure analysis", "Root cause investigation", "Intelligent agents"],
  },
  {
    name: "Quality Engineering",
    items: ["Test Strategy & Planning", "BDD Modeling", "Risk-Based Testing", "Test Data Management", "Production Monitoring", "Quality Metrics"],
  },
  {
    name: "Testing & Methodologies",
    items: ["E2E", "Regression", "Integration", "Exploratory", "Accessibility", "Usability", "Agile Scrum", "Kanban", "Shift-Left", "Continuous Testing", "ISTQB CTFL"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "AB InBev",
    role: "Mobile QA Automation Engineer",
    period: "Jun 2026 to Present",
    location: "Belgium",
    highlights: [
      "Driving mobile test automation for iOS and Android across AB InBev's global digital products.",
      "Collaborating in a distributed, international engineering team.",
    ],
  },
  {
    company: "Conexa Saúde",
    role: "Software Quality Engineer",
    period: "Sep 2021 to May 2026",
    location: "Full-time, Remote",
    highlights: [
      "Built and executed automated Web and API tests with Playwright (and Cypress), owning the full quality cycle from test planning to release delivery with a strong focus on user experience.",
      "Pioneered AI-assisted QA: used generative AI to accelerate test scenarios, data sets, and scripts, and to support log analysis and fault identification, structuring AI agent workflows that cut manual effort and boosted productivity.",
      "Ran functional, non-functional, exploratory, and regression testing across web, iOS, and Android applications.",
      "Active in Scrum and Kanban ceremonies, backlog organization, and bug analysis; tools: Postman, Jira, Git/GitLab/GitHub, DBeaver.",
    ],
  },
  {
    company: "D&D Group",
    role: "Software QA Analyst",
    period: "Feb 2021 to Sep 2021",
    location: "Solar Coca-Cola, Brazil",
    highlights: [
      "Worked across multiple squads simultaneously for the Solar Coca-Cola client, owning deliverable quality from requirements to post-production validation.",
      "Planned and executed functional, non-functional, regression, and exploratory tests for web and mobile (iOS/Android), keeping fully traceable test documentation.",
      "Mentored junior QAs and ran feature demos for stakeholders; tools: Azure DevOps, Postman, MySQL Workbench.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

// Pulled from github.com/tais-santos-dev. Reorder or trim as you like.
export const projects: Project[] = [
  {
    title: "QA Automation Agents",
    description:
      "Playwright + TypeScript E2E suite for OrangeHRM with CI/CD quality gates and AI-powered agents for failure analysis, coverage reporting, and test generation.",
    tags: ["Playwright", "TypeScript", "AI Agents", "CI/CD"],
    github: "https://github.com/tais-santos-dev/qa-automation-agents",
    featured: true,
  },
  {
    title: "QA AI Testing",
    description:
      "Testing framework for AI systems: automated prompt injection, hallucination detection, LLM consistency checks, and OWASP LLM Top 10 validation using LLM-as-Judge with calibrated rubrics and golden datasets.",
    tags: ["LLM-as-Judge", "OWASP LLM Top 10", "Prompt Injection"],
    github: "https://github.com/tais-santos-dev/qa-ai-testing",
    featured: true,
  },
  {
    title: "QA Automation Security",
    description:
      "QA suite with a security layer covering XSS, SQL injection, auth bypass, and OWASP Top 10 validation, integrated into a Playwright CI/CD pipeline with AI-powered analysis.",
    tags: ["OWASP Top 10", "Security", "Playwright"],
    github: "https://github.com/tais-santos-dev/qa-automation-security",
    featured: true,
  },
  {
    title: "QA Performance",
    description:
      "Performance testing with AI analysis covering automated load testing, Core Web Vitals monitoring, latency regression detection between deploys, and executive reports using k6, Lighthouse, and Claude.",
    tags: ["k6", "Lighthouse", "Core Web Vitals"],
    github: "https://github.com/tais-santos-dev/qa-performance",
  },
  {
    title: "QA Accessibility",
    description:
      "Automated accessibility testing with AI for WCAG 2.1 A/AA/AAA validation, using the Playwright accessibility tree plus Claude for semantic analysis, violation explanation, and remediation guidance.",
    tags: ["WCAG 2.1", "Accessibility", "Playwright"],
    github: "https://github.com/tais-santos-dev/qa-accessibility",
  },
  {
    title: "QA Mobile",
    description:
      "Cross-device mobile E2E testing with Playwright mobile viewports and Appium, AI-powered visual regression detection, and gesture interaction testing for iOS and Android.",
    tags: ["Appium", "Mobile", "Visual Regression"],
    github: "https://github.com/tais-santos-dev/qa-mobile",
  },
  {
    title: "QA Data Quality",
    description:
      "Data quality framework with AI agents for schema validation, completeness checks, statistical drift detection, and business rule enforcement across data pipelines using Python, Great Expectations, and Claude.",
    tags: ["Python", "Great Expectations", "Data Quality"],
    github: "https://github.com/tais-santos-dev/qa-data-quality",
  },
];
