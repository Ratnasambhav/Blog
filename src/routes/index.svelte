<script context="module">
    import posts from './blog/_posts.js'
</script>

<script>
    import HomeHero from '../components/HomeHero.svelte'
    import PostItem from '../components/PostItem.svelte'
</script>

<style>
    .postList {
        margin: 100px 70px;
    }

    .postList h1 {
        font-size: 40px;
        font-family: "Maison Neue Bold";
        text-decoration: underline gold 10px;
    }

    @media screen and (max-width: 600px) {
        .postList {
            margin: 100px 30px;
        }

        .postList h1 {
            font-size: 35px;
        }
    }
</style>

<svelte:head>
    <title>Ratnasambhav's Blog</title>
</svelte:head>

<HomeHero/>

<div class="postList">
    <h1>Recent Posts</h1>
    {#each posts as post}
        <PostItem post={post}/>
    {/each}
</div>