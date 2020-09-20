<script>
    export let post

    const date = new Date(post.metadata.date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
</script>

<style>
    div {
        margin: 80px 0;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .title {
        margin: 0;
        font-size: 35px;
        display: inline-block;
        font-family: "Maison Neue Demi";
        transition: box-shadow 200ms ease-in;
    }

    .title:hover {
        box-shadow: 0px 10px 0px 0px gold;
    }

    .summary {
        font-size: 20px;
        font-family: "Maison Neue";
    }

    .date {
        font-size: 15px;
        color: #7c7c7c;
        font-family: "Maison Mono";
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 30px;
        }

        .summary {
            font-size: 16px;
        }

        .date {
            font-size: 12px;
        }
    }
</style>

<div>
    <a href={`blog/${post.slug}`}>
        <h2 class="title">{post.metadata.title}</h2>
        <p class="summary">{post.metadata.summary}</p>
        <p class="date">{`${da}th ${mo}, ${ye}`}</p>
    </a>
</div>