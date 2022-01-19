<script context="module">
    import { client } from '$lib/graphql-client'
    import { educationsQuery } from '$lib/graphql-queries'
  
    export const load = async () => {
      const { educations } = await client.request(educationsQuery)
  
      return {
        props: {
          educations,
        },
      }
    }
  </script>

<script>
    export let educations
</script>

<svelte:head>
    <title>Portfolio | Blog</title>
</svelte:head>

  <h1 class="text-4xl mb-10 font-extrabold">Let's check out my educations</h1>

  {#each educations as {levelOfEducation , slug, about, coverImage, tags }}
    <div class="card text-center shadow-2xl mb-20"> 
      <figure class="">
        <img
          class=""
          src={coverImage.url}
          alt={`Cover image for ${levelOfEducation}`}
        />
      </figure>
      <div class="card-body prose">
        <h2 class="title">{levelOfEducation}</h2>
        <!-- {@html marked(content).slice(0, 150)} -->
        <div class="flex justify-center mt-5 space-x-2">
          {#each tags as tag}
            <span class="badge badge-primary">{tag}</span>
          {/each}
        </div>
        <div class="justify-center card-actions">
          <a href={`/education/${slug}`} class="btn btn-outline btn-primary"
            >Read &rArr;</a
          >
        </div>
      </div>
    </div>
  {/each}