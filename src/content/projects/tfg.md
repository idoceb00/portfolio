---
title: "TFG: Identificación de señales lingüísticas asociadas a la desinformación mediante técnicas de PLN"
description: "Sistema de procesamiento de lenguaje natural que genera un perfil lingüístico interpretable de ocho dimensiones para artículos de prensa. No clasifica noticias como verdaderas o falsas: describe rasgos lingüísticos medibles y deja el juicio al lector."
tags: ["Python", "spaCy", "scikit-learn", "Ollama", "Jupyter"]
category: "IA / Machine Learning"
type: "academico"
status: "terminado"
featured: true
date: 2026-07-01
---

Trabajo de Fin de Grado del Grado en Ingeniería Informática, Universidad de León.
Defendido en julio de 2026 con calificación de 9,6/10.

Pipeline de PLN en 7 etapas (NB01–NB07): recolección con NewsAPI y Trafilatura,
limpieza clásica basada en reglas (preservando puntuación y mayúsculas como señal),
limpieza semántica con LLM local (Qwen2.5:7b vía Ollama) que elimina ruido sin
reescribir contenido, anotación lingüística con 53 características en cuatro capas,
ingeniería de características con normalización MinMax, y modelado con Ridge y
MultiOutputRegressor sobre embeddings de all-mpnet-base-v2.

Corpus de 7.311 artículos (4.057 tras deduplicación) de 209 fuentes y 90 eventos
temáticos. Validación cruzada GroupKFold agrupada por fuente para evitar fuga de
información. En validación externa, 4 de las 8 dimensiones correlacionan
significativamente con la veracidad de las noticias.
