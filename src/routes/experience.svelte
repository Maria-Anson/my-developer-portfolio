<script context="module">
    import { client } from '$lib/graphql-client'
    import { experiencesQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
  
    export const load = async () => {
      const { experiences } = await client.request(experiencesQuery)
  
      return {
        props: {
          experiences,
        },
      }
    }
</script>

<style>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script>
  export let experiences
  const {
    intro,
    timelineseries,
    logo,
    certificates,
  } = experiences[0]
</script>

<h1 class="font-bold text-center mb-20 text-5xl">My Professional Experiences</h1>

<article div class="prose prose-lg">
{#each timelineseries as sep_time }
  <div class="card text-center shadow-2xl mb-20">
    
    <div class="row">
      <a href = {sep_time.references[0].url} target="_blank" rel="noopener noreferrer">
      <img
        class="rounded-xl center"  
        src={sep_time.references[0].url}
        alt={`Logo image`}
      /></a>
    </div> 

    <div class="card-body-prose">
      {@html sep_time.html}
    </div>
  </div>
{/each}
</article>

<article div class="prose prose-lg">
<p><strong>Experience Certificates</strong></p>
{#each certificates as certificate, index }
  <iframe src="https://docs.google.com/gview?url={certificates[index].url}&embedded=true" frameborder="0" scrolling="yes" height="500 px" width = "350 px" align="left"> </iframe> 
{/each}
</article>
