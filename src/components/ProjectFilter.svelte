<script lang="ts">
  interface Project {
    title: string;
    description: string;
    tags: string[];
    category: string;
    type: "personal" | "academico";
    status: "en_desarrollo" | "en_pausa" | "terminado";
    repoUrl?: string;
    demoUrl?: string;
  }

  let { projects }: { projects: Project[] } = $props();

  const languages = ["Go", "Java", "Python", "TypeScript"];

  const tagToLanguage: Record<string, string> = {
    Go: "Go",
    Golang: "Go",
    Java: "Java",
    Python: "Python",
    TypeScript: "TypeScript",
  };

  let selectedLanguage = $state<string | null>(null);

  const filtered = $derived(
    selectedLanguage
      ? projects.filter((p) =>
          p.tags.some((t) => tagToLanguage[t] === selectedLanguage)
        )
      : projects
  );

  const personalProjects = $derived(filtered.filter((p) => p.type === "personal"));
  const academicProjects = $derived(filtered.filter((p) => p.type === "academico"));

  const statusLabels: Record<string, string> = {
    en_desarrollo: "En desarrollo",
    en_pausa: "En pausa",
    terminado: "Terminado",
  };

  const typeLabels: Record<string, string> = {
    personal: "Personal",
    academico: "Académico",
  };
</script>

<div class="flex gap-2 flex-wrap mb-6">
  <button
    class="px-3 py-1 rounded-full border text-sm transition-colors {selectedLanguage === null
      ? 'bg-accent border-accent text-black'
      : 'bg-surface-inverted text-ink border-line hover:border-accent-deep'}"
    onclick={() => (selectedLanguage = null)}
  >
    Todos
  </button>
  {#each languages as lang}
    <button
      class="px-3 py-1 rounded-full border text-sm transition-colors {selectedLanguage === lang
        ? 'bg-accent border-accent text-black'
        : 'bg-surface-inverted text-ink border-line hover:border-accent-deep'}"
      onclick={() => (selectedLanguage = lang)}
    >
      {lang}
    </button>
  {/each}
</div>

{#if selectedLanguage === null}
  {#if personalProjects.length > 0}
    <h2 class="text-2xl font-bold mb-4">Personales</h2>
    <div class="grid gap-6 sm:grid-cols-2 mb-10">
      {#each personalProjects as project}
        <article class="bg-surface-2 text-ink rounded-lg p-5 border border-line hover:border-accent transition-colors duration-300">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs px-2 py-0.5 rounded-full {project.status === 'en_desarrollo' ? 'bg-green-500/20 text-green-400' : project.status === 'en_pausa' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-surface-inverted text-ink-muted'}">
              {statusLabels[project.status] || project.status}
            </span>
          </div>
          <h3 class="font-bold text-xl">{project.title}</h3>
          <p class="text-sm opacity-80 mt-2">{project.description}</p>
          {#if project.tags.length > 0}
            <div class="flex gap-2 flex-wrap mt-3">
              {#each project.tags as t}
                <span class="text-xs px-2 py-1 rounded bg-surface-inverted">{t}</span>
              {/each}
            </div>
          {/if}
          <div class="flex gap-4 mt-4 text-sm">
            {#if project.repoUrl}
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Código</a>
            {/if}
            {#if project.demoUrl}
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Demo</a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  {/if}

  {#if academicProjects.length > 0}
    <h2 class="text-2xl font-bold mb-4">Académicos</h2>
    <div class="grid gap-6 sm:grid-cols-2">
      {#each academicProjects as project}
        <article class="bg-surface-2 text-ink rounded-lg p-5 border border-line hover:border-accent transition-colors duration-300">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs px-2 py-0.5 rounded-full {project.status === 'en_desarrollo' ? 'bg-green-500/20 text-green-400' : project.status === 'en_pausa' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-surface-inverted text-ink-muted'}">
              {statusLabels[project.status] || project.status}
            </span>
          </div>
          <h3 class="font-bold text-xl">{project.title}</h3>
          <p class="text-sm opacity-80 mt-2">{project.description}</p>
          {#if project.tags.length > 0}
            <div class="flex gap-2 flex-wrap mt-3">
              {#each project.tags as t}
                <span class="text-xs px-2 py-1 rounded bg-surface-inverted">{t}</span>
              {/each}
            </div>
          {/if}
          <div class="flex gap-4 mt-4 text-sm">
            {#if project.repoUrl}
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Código</a>
            {/if}
            {#if project.demoUrl}
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Demo</a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  {/if}
{:else}
  <div class="grid gap-6 sm:grid-cols-2">
    {#each filtered as project}
      <article class="bg-surface-2 text-ink rounded-lg p-5 border border-line hover:border-accent transition-colors duration-300">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs px-2 py-0.5 rounded-full {project.status === 'en_desarrollo' ? 'bg-green-500/20 text-green-400' : project.status === 'en_pausa' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-surface-inverted text-ink-muted'}">
            {statusLabels[project.status] || project.status}
          </span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-surface-inverted text-ink-muted">
            {typeLabels[project.type] || project.type}
          </span>
        </div>
        <h3 class="font-bold text-xl">{project.title}</h3>
        <p class="text-sm opacity-80 mt-2">{project.description}</p>
        {#if project.tags.length > 0}
          <div class="flex gap-2 flex-wrap mt-3">
            {#each project.tags as t}
              <span class="text-xs px-2 py-1 rounded bg-surface-inverted">{t}</span>
            {/each}
          </div>
        {/if}
        <div class="flex gap-4 mt-4 text-sm">
          {#if project.repoUrl}
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Código</a>
          {/if}
          {#if project.demoUrl}
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">Demo</a>
          {/if}
        </div>
      </article>
    {/each}
    {#if filtered.length === 0}
      <p class="opacity-60 text-sm">No hay proyectos en esta categoría todavía.</p>
    {/if}
  </div>
{/if}
