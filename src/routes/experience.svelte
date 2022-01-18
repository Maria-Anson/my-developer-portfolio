<script context="module">
    import { client } from '$lib/graphql-client'
    import { experiencesQuery } from '$lib/graphql-queries'
  
    export const load = async () => {
      const { experiences } = await client.request(experiencesQuery)
  
      return {
        props: {
          experiences,
        },
      }
    }
</script>

<script>
  export let experiences
  const {
    intro,
    timeline,
    certificates,
  } = experiences[0]
</script>

<h1 class="font-bold text-center mb-20 text-5xl">My Professional Experiences</h1>
<p></p>

<article div class="prose prose-lg">
  {@html (intro)}
  <p></p>
  {@html (timeline.html)}
  <p></p>
  
  <p><strong>Experience Certificates</strong></p>
  <iframe src="https://docs.google.com/gview?url={certificates[0].url}&embedded=true" frameborder="0" scrolling="yes" height="500 px" width = "350 px" align="left"> </iframe> 
  <iframe src="https://docs.google.com/gview?url={certificates[1].url}&embedded=true" frameborder="0" scrolling="yes"  height="500 px" width = "350 px" align="right"> </iframe>
</article>
