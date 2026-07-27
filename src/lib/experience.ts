export interface Job {
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

export const jobs: Job[] = [
  {
    role: "IA & Software Engineering Intern",
    company: "Xeridia",
    start: "Oct 2025",
    end: "Jan 2026",
    description: "Developed a REST API with FastAPI to serve an NLP-based news classification model, including data validation, inference pipeline, and Docker deployment. Participated in building a multi-agent LLM system for automatic analysis of Microsoft Teams meetings, generating summaries, detecting risks and blockers, extracting tasks, and integrating with Jira and Confluence. Designed the system architecture and developed the main REST API, decoupling external integrations to reduce latency.",
  },
];