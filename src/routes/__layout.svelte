<script>
  import Footer from '$lib/components/footer.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SP0MC696LV';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);}
    window.gtag('js', new Date());
    window.gtag('config', 'G-SP0MC696LV');
  });

</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
<Footer />
