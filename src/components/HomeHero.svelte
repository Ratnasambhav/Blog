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
    font-family: "Maison Neue Bold";
  }

  p {
    font-family: "Maison Neue";
    font-size: 27px;
    max-width: 600px;
  }

  .social {
    width: 220px;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
  }

  .social a {
    color: inherit;
    font-size: 20px;
    font-family: "Maison Neue Light";
  }

  .social a img {
    max-height: 30px;
    border-radius: 50%;
    transition: background-color 200ms ease-in;
  }

  .social a img:hover {
    background-color: gold;
  }

  @media screen and (max-width: 830px) {
    .wrapper {
      padding: 70px 50px;
    }

    h1 {
      font-size: 70px;
    }

    p {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 656px) {
    .wrapper {
      padding: 70px 40px;
    }

    h1 {
      font-size: 60px;
    }

    p {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 548px) {
    .wrapper {
      padding: 70px 40px;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 399px) {
    .wrapper {
      padding: 70px 20px;
    }

    h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 350px) {
    .wrapper {
      padding: 70px 20px;
    }

    h1 {
      font-size: 35px;
    }
  }
</style>

<div class="wrapper">
  <div class="line" />
  <h1>Ratnasambhav's Blog</h1>
  <p>
    Hello there! <br /><br /> I'm Ratnasambhav Priyadarshi. I work at Amazon Web
    Services in Bengaluru. <br /><br /> I write about things I like, which is mostly
    web developemt and video games.
  </p>
  <div class="social">
    <a href="https://github.com/Ratnasambhav/">
      <img src="github.png" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/ratnasambhav/">
      <img src="linkedin.png" alt="LinkedIn" />
    </a>
    <a href="https://twitter.com/ratnasambhav732">
      <img src="twitter.png" alt="Twitter" />
    </a>
  </div>
</div>
