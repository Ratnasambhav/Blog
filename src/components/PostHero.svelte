<script>
  export let title
  export let date

  date = new Date(date)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
</script>

<style>
  .wrapper {
    padding: 70px 70px;
    background-color: rgb(25, 169, 116);
  }

  .line {
    height: 15px;
    width: 100%;
    background-color: gold;
  }

  h1 {
    font-size: 80px;
    max-width: 800px;
    font-family: "Maison Neue Bold";
  }

  .date {
    font-size: 24px;
    font-family: "Maison Mono";
  }
</style>

<div class="wrapper">
  <div class="line"/>
  <h1>{title}</h1>
  <p class="date">{`${da}th ${mo}, ${ye}`}</p>
  <a href="/">Home</a>
</div>