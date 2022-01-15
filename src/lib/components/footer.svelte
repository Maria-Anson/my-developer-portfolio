<script>
    import FacebookIcon from './icons/facebook-icon.svelte'
    import TwitterIcon from './icons/twitter-icon.svelte'
    import YouTubeIcon from './icons/you-tube-icon.svelte'
    import LinkedinIcon from './icons/linkedin-icon.svelte'
    import GithubIcon from './icons/github-icon.svelte'
    import InstagramIcon from './icons/instagram-icon.svelte'
    import MailIcon from './icons/mail-icon.svelte';
  </script>
  
  <footer
    class="p-10 footer bg-primary text-primary-content footer-center"
  >
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/projects">Portfolio</a>
      <a class="link link-hover" href="/posts">Blog</a>
      <a class="link link-hover" href="/about">About</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="mailto:mariaansona@gmail.com">
          <MailIcon/>
        </a>
        <a href="https://www.linkedin.com/in/maria-anson/">
          <LinkedinIcon/>
        </a>
        <a href="https://github.com/Maria-Anson">
          <GithubIcon/>
        </a>
        <a href="https://www.facebook.com/anson.anzz/">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/AnzzKrzy">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/anzz_krzy/">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/channel/UCt6zAJm4mh0Cfs7ckNl93kg/videos">
          <YouTubeIcon />
        </a>
      </div>
    </div>
    <div>
      <p>Reach me at mariaansona@gmail.com</p>
    </div>
    <div>
      <p>
        Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
        by Maria Anson
      </p>
    </div>
  </footer>