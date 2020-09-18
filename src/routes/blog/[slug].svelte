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

	.content {
		max-width: 900px;
		margin: 40px auto;
		padding: 0 20px
	}

	.content :global(p, li) {
		font-size: 18px;
		font-family: "Maison Neue"
	}

	.content :global(ul) {
		list-style: square;
	}

	.content :global(pre, code) {
		font-size: 18px;
		font-family: "Maison Mono";
	}

	.content :global(pre) {
		padding: 15px;
		overflow-x: scroll;
		border-radius: 5px;
		border: 2px solid gold;
		background-color: #FFF;
	}

	.content :global(pre code) {
		padding: 0;
		border-radius: 0;
		border: none
	}

	.content :global(code) {
		padding: 0 3px;
		border-radius: 5px;
		border: 1px solid gold;
		background-color: #FFF;
	}

	.content :global(h2) {
		font-family: "Maison Neue Bold";
		font-size: 30px;
		margin-top: 50px;
	}
</style>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<PostHero title={post.metadata.title} date={post.metadata.date}/>
<div class='content'>
	{@html post.html}
</div>
