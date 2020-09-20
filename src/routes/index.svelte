<script context="module">
    import posts from './post/_posts.js'
</script>

<script>
    import HomeHero from '../components/HomeHero.svelte'
    import PostItem from '../components/PostItem.svelte'
    import Footer from '../components/Footer.svelte'
</script>

<style>
    .postList {
        margin: 50px 70px;
    }

    .postList h1 {
        font-size: 40px;
        font-family: "Maison Neue Bold";
        border-bottom: 10px solid gold;
        display: inline-block;
        line-height: 0.8;
    }

    @media screen and (max-width: 600px) {
        .postList {
            margin: 30px 20px;
        }

        .postList h1 {
            font-size: 35px;
        }
    }
</style>

<svelte:head>
    <title>Ratnasambhav's Blog</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ratnasambhav's Blog" />
    <meta property="og:description" content="I write about things I like, which is mostly web development and video games." />
    <meta property="twitter:title" content="Ratnasambhav's Blog" />
    <meta property="twitter:description" content="I write about things I like, which is mostly web development and video games." />
</svelte:head>

<HomeHero/>

<div class="postList">
    <h1>Recent Posts</h1>
    {#each posts as post}
        <PostItem post={post}/>
    {/each}
</div>

<Footer/>