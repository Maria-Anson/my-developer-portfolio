<script context="module">
    import { client } from '$lib/graphql-client';
    import { certificationsQuery } from '$lib/graphql-queries';
  
    export const load = async () => {
      const { certifications } = await client.request(certificationsQuery);
  
      return {
        props: {
          certifications,
        },
      };
    };
  </script>
  
  <script>
    import { onMount } from 'svelte';
    let Carousel;
    let carousel;
    let isClient = false;
  
    export let certifications;
  
    // Flatten the data
    let images = [];
    if (certifications.length > 0) {
      const { certification_file, certificationName, orgName } = certifications[0];
      images = certification_file.map((file, index) => ({
        url: file.url,
        description: `${certificationName[index]} - ${orgName[index]}`
      }));
    }
  
    const handleNextClick = () => {
      if (carousel) {
        carousel.goToNext();
      }
    };
  
    onMount(async () => {
      isClient = true;
      const module = await import('svelte-carousel');
      Carousel = module.default;
    });
  </script>
  
  <style>
    .carousel-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 118%;
      margin: auto;
      overflow: hidden; /* Ensure content doesn't overflow */
    }
    .img-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%; /* Full width of the carousel container */
      max-width: 800px; /* Maximum width */
    }
    .img-container img {
      width: 100%; /* Make the image fill the container */
      height: auto;
    }
    .img-title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
</style>

  <!-- <style>
    .img-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img-title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style> -->
  
  <svelte:head>
    <title>Certifications</title>
  </svelte:head>
  
  <main>
    <div class="carousel-container">
      {#if isClient && Carousel}
        <Carousel bind:this={carousel} let:loaded autoplay autoplayDuration={3000}>
          {#each images as src, imageIndex (src)}
            <div class="img-container">
              {#if loaded.includes(imageIndex)}
                <img src={src.url} alt={src.description} />
                <div class="img-title">{src.description}</div>
              {/if}
            </div>
          {/each}
        </Carousel>
      {:else}
        <p>Loading carousel...</p>
      {/if}
    </div>
    <article div class="prose prose-lg">  
          {@html (certifications[0].content.html)}
      </article>
  </main>