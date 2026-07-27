<script lang="ts">
  interface Project {
    title: string;
    description: string;
    tags: string[];
    category: string;
    repoUrl?: string;
    demoUrl?: string;
  }

  let { projects }: { projects: Project[] } = $props();

  const categories = [...new Set(projects.map((p) => p.category))].sort();

  let selectedCategory = $state<string | null>(null);

  const filtered = $derived(
    selectedCategory ? projects.filter((p) => p.category === selectedCategory) : projects
  );
</script>

<div class="flex gap-2 flex-wrap mb-6">
  <button
    class="px-3 py-1 rounded-full border text-sm transition-colors {selectedCategory === null
      ? 'bg-primary-500 border-primary-500 text-black'
      : 'border-darkslate-400 hover:border-primary-500'}"
    onclick={() => (selectedCategory = null)}
  >
    Todos
  </button>
  {#each categories as category}
    <button
      class="px-3 py-1 rounded-full border text-sm transition-colors {selectedCategory === category
        ? 'bg-primary-500 border-primary-500 text-black'
        : 'border-darkslate-400 hover:border-primary-500'}"
      onclick={() => (selectedCategory = category)}
    >
      {category}
    </button>
  {/each}
</div>

<div class="grid gap-6 sm:grid-cols-2">
  {#each filtered as project}
    <article class="bg-darkslate-600 rounded-lg p-5 border border-darkslate-400 hover:border-primary-500 transition-colors duration-300">
      <h3 class="font-bold text-xl">{project.title}</h3>
      <p class="text-sm opacity-80 mt-2">{project.description}</p>
      {#if project.tags.length > 0}
        <div class="flex gap-2 flex-wrap mt-3">
          {#each project.tags as t}
            <span class="text-xs px-2 py-1 rounded bg-darkslate-500">{t}</span>
          {/each}
        </div>
      {/if}
      <div class="flex gap-4 mt-4 text-sm">
        {#if project.repoUrl}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-primary-500">Código</a>
        {/if}
        {#if project.demoUrl}
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="underline hover:text-primary-500">Demo</a>
        {/if}
      </div>
    </article>
  {/each}
  {#if filtered.length === 0}
    <p class="opacity-60 text-sm">No hay proyectos en esta categoría todavía.</p>
  {/if}
</div>