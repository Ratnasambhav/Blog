<style>
  .footer {
    padding: 70px 0 30px 0;
    text-align: center;
  }

  .links {
    display: flex;
    max-width: 500px;
    margin: 0 auto 30px auto;
    justify-content: space-around;
  }

  .links a {
    color: #000;
    font-size: 16px;
    font-family: "Maison Neue Light";
    text-decoration: 1px underline #000;
    transition: color 200ms ease-in, text-decoration 200ms ease-in;
  }

  .links a:hover {
    color: gold;
    text-decoration: 1px underline gold;
  }

  span {
    font-size: 16px;
    font-family: "Maison Mono";
  }
</style>

<div class="footer">
  <div class="links">
    <a href="/">Home</a>
    <a href="https://github.com/Ratnasambhav/" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/ratnasambhav/" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/ratnasambhav732" target="_blank">Twitter</a>
  </div>
  <span>Made with Svelte, Sapper and 💛</span>
</div>