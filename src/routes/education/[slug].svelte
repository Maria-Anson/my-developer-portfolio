<script context="module">
    import { client } from '$lib/graphql-client'
    import { educationQuery } from '$lib/graphql-queries'
  
    export const load = async ({ params }) => {
      const { slug } = params
      const variables = { slug }
      const { education } = await client.request(educationQuery, variables)
  
      return {
        props: {
          education,
        },
      }
    }
  </script>

<script>
    export let education
  
    const { levelOfEducation, academyname, subHeading, tags, url, about, coverImage } = education
  </script>

<svelte:head>
    <title>Blog | {levelOfEducation}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <a href = {url} target="_blank" rel="noopener noreferrer">
    <img
      class="rounded-xl"
      src={coverImage.url}
      alt={`Cover image for ${levelOfEducation}`}
    /></a>
</div>

<div class="prose prose-xl">
    <h2>{academyname}</h2>
    <h3>{subHeading}</h3>
</div>

<div class="mb-5 flex justify-between">
    <div>
      {#if tags}
        <div class="mt-5 space-x-2">
          {#each tags as tag}
            <span class="badge badge-primary">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
</div>

<article div class="prose prose-lg">
    {@html (about[0].html)}
</article>
