<script context="module">
  import { client } from '$lib/graphql-client'
  import { gql } from 'graphql-request'

  export const load = async () => {
    const query = gql`
      query GetProjects {
        projects {
          name
          slug
          description
          tags
          demo
          sourceCode
          image {
            url
          }
        }
      }
    `
    const { projects } = await client.request(query)

    return {
      props: {
        projects,
      },
    }
  }
</script>

<script>
  export let projects
</script>

<h1>Recent Projects by Me</h1>

<div>
  {#each projects as { name, slug, description, image }}
    <div>
      <img src={image[0].url} alt={name} />
      <a href={`/projects/${slug}`}>
        <div>
          <h2>{name}</h2>
          <p>
            {description.slice(0, 80)}...
          </p>
        </div>
      </a>
    </div>
  {/each}
</div>