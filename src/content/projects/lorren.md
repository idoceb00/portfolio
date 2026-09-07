---
title: "Lorren"
description: "Herramienta CLI en Go para registrar hábitos diarios y sesiones de entrenamiento sin salir de la terminal."
tags: ["Go", "Cobra", "Viper", "Markdown", "Obsidian"]
category: "CLI"
type: "personal"
status: "en_desarrollo"
repoUrl: "https://github.com/idoceb00/lorren"
featured: false
date: 2026-08-01
---

Herramienta CLI en Go para registrar hábitos diarios y sesiones de
entrenamiento sin salir de la terminal. Genera ficheros markdown con
frontmatter YAML dentro de un vault de Obsidian, consultables con el plugin
Dataview. Nace de una necesidad propia: años de entrenamiento constante sin un
sistema cómodo para dejar registro de pesos, notas y hábitos.

- Arquitectura hexagonal (Ports & Adapters): dominio puro aislado tras interfaces
  (`Interviewer`, `Repository`), con adaptadores desacoplados para la entrada
  (wizard interactivo con Charm huh) y la salida (persistencia markdown mediante
  `ObsidianWriter`).
- Enrutamiento de comandos con Cobra, con `lorren day` implementado para el
  registro de hábitos diarios.
- Configuración con Viper: fichero YAML persistente en
  `~/.config/lorren/config.yaml` y wizard guiado en el primer uso que valida la
  ruta del vault, evitando reconfigurar la herramienta en cada ejecución.
- Separación deliberada entre frontmatter YAML (solo campos escalares,
  consultables con Dataview) y cuerpo markdown en texto libre, para que las notas
  sean legibles y consultables a la vez.
