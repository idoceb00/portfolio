---
title: "La Ruta"
description: "Aplicación web para guardar y valorar bares de tapas en grupo y encontrar en segundos dónde ponen cada tapa."
tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Tailwind CSS", "PWA"]
category: "Web"
type: "personal"
status: "en_desarrollo"
repoUrl: "https://github.com/idoceb00/la-ruta"
featured: true
date: 2026-09-21
---

Aplicación web full stack para guardar los bares de tapas de un grupo de amigos,
valorarlos en común y consultar desde el móvil dónde ponen cada tapa. Nace de una
necesidad propia: con tantos bares y tapas es fácil olvidar qué pone cada sitio,
y en mitad de una ruta no había forma rápida de consultarlo. Está desplegada,
es instalable como PWA y la uso en mi día a día.

- Backend REST con Spring Boot 4 y Java 21 en capas (controller, service,
  repository), autenticación con Spring Security y JWT, y autorización por
  comunidad: estar autenticado no basta, cada operación comprueba la pertenencia
  al grupo.
- Valoraciones concurrentes resueltas con bloqueo optimista (`@Version`): las
  medias se guardan precalculadas y las valoraciones se reintentan solas ante un
  conflicto, mientras que la edición de un bar devuelve un 409 para no pisar los
  cambios de otro miembro.
- Esquema versionado con Flyway (Hibernate solo valida) y tests de integración
  contra PostgreSQL real mediante Testcontainers, ejecutados en GitHub Actions.
- Frontend en Angular 22 con signals, `rxResource`, `linkedSignal` y signal forms,
  y una identidad visual propia construida con Tailwind CSS v4 y componentes
  compartidos.
- Despliegue en Vercel, Render y Neon, con una pantalla de espera que despierta
  el backend en los arranques en frío del plan gratuito en lugar de mostrar errores.