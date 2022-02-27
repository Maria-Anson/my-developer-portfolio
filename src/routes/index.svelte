google-site-verification: googlef9d2bff90e3acfa5.html
<script context="module">
  import ProjectCard from '$lib/components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery, projectsQuery } from '$lib/graphql-queries'

  export const load = async () => {
    const [authorReq, projectsReq] = await Promise.all([
      client.request(authorsQuery),
      client.request(projectsQuery),
    ])
    const { authors } = authorReq
    const { projects } = projectsReq

    return {
      props: {
        projects,
        authors,
      },
    }
  }
</script>

<script>
  export let projects
  export let authors
</script>

<svelte:head>
  <title>My Portfolio project</title>
</svelte:head>

<div class="collapse border rounded-box border-base-300 shadow-2xl collapse-plus">
  <input type="checkbox"> 
  <div class="collapse-title text-xl font-large">
    <h1 class="font-bold text-center text-5xl">
      Welcome to my Portfolio
    </h1>
  </div> 
  <div class="collapse-content"> 
    <p align="center"><iframe width="450" height="300" src="https://www.youtube.com/embed/u3Fwa_NfeiA" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
  </div>
</div> 


<h1 class="font-bold text-center mb-20 text-5xl">
</h1>


{#each authors as { name, intro, picture: { url } }}
  <div class="flex mb-40 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
    </div>

    <img class="mask mask-squircle h-48" src={url} alt={name} />
  </div>
{/each}

<div
  class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
  {#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>