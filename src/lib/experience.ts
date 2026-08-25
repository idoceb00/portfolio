export interface Job {
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

export const jobs: Job[] = [
  {
    role: "Prácticas de Ingeniería de Software e IA",
    company: "Xeridia",
    start: "Oct 2025",
    end: "Ene 2026",
    description: "Desarrollé una API REST con FastAPI para servir un modelo de clasificación de noticias basado en NLP, incluyendo validación de datos, pipeline de inferencia y despliegue con Docker. Participé en la construcción de un sistema multi-agente LLM para el análisis automático de reuniones de Microsoft Teams, generando resúmenes, detectando riesgos y bloqueadores, extrayendo tareas e integrando con Jira y Confluence. Diseñé la arquitectura del sistema y desarrollé la API REST principal, desacoplando las integraciones externas para reducir la latencia.",
  },
];