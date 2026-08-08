<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				projects,
				authors
			}
		};
	};
</script>

<script>
	export let projects;
	export let authors;

	const author = authors[0];
</script>

<svelte:head>
	<title>{author.name} | Data Scientist</title>
	<meta
		name="description"
		content={`Explore ${author.name}'s data science, machine learning, and analytics work.`}
	/>
</svelte:head>

<section class="hero mb-24 overflow-hidden rounded-3xl bg-base-200 shadow-xl">
	<div
		class="hero-content w-full flex-col gap-10 px-6 py-12 md:px-12 md:py-16 lg:flex-row-reverse lg:justify-between"
	>
		<img
			class="h-56 w-56 rounded-3xl object-cover shadow-2xl md:h-64 md:w-64"
			src={author.picture.url}
			alt={author.name}
		/>

		<div class="max-w-2xl text-center lg:text-left">
			<p class="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Portfolio</p>
			<h1 class="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
				{author.name}
			</h1>
			<div class="hero-intro mb-8 space-y-4 text-xl leading-relaxed text-base-content/80">
				{@html marked(author.intro)}
			</div>
			<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
				<a class="btn btn-primary" href="/projects">View selected work</a>
				<a class="btn btn-outline btn-primary" href="/resume">View résumé</a>
			</div>
		</div>
	</div>
</section>

<div class="mb-10 text-center">
	<p class="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Featured work</p>
	<h2 class="text-4xl font-extrabold">Selected projects</h2>
</div>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
