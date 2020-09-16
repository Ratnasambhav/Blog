<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import PostHero from '../../components/PostHero.svelte'

	export let post;
</script>

<style>
	.content :global(h1:nth-child(1)) {
		display: none
	}
</style>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<PostHero title={post.metadata.title} date={post.metadata.date}/>
<div class='content'>
	{@html post.html}
</div>
