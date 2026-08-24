---
title: "Eventory"
description: "Aplicación interna de gestión para empresas de eventos en vivo que alquilan equipamiento, con control de stock y solapamiento de reservas."
tags: ["Java", "Spring Boot", "PostgreSQL", "SvelteKit", "TypeScript", "Docker"]
category: "API REST"
type: "personal"
repoUrl: "https://github.com/idoceb00/event-resource-manager"
featured: true
date: 2026-08-01
---

Evolución profesional de mi proyecto académico IgmarEventsManager.
Backend en Java 21 + Spring Boot con Clean Architecture pragmática,
control de concurrencia diferenciado (PESSIMISTIC_WRITE en operaciones
check-then-write vs. UPDATE atómico simple), solapamiento con semántica
de intervalo abierto y barrido de línea (sweep-line) para calcular
picos de concurrencia. Frontend SvelteKit SPA que nunca reimplementa
reglas de negocio, solo reacciona a 400/403/404/409.
