const footer = `
  <a href="index.html">Home</a> <br />
  <hr />
  <a href="about.html">About</a> <br />
  <hr />
  <a href="programmes.html">Programmes</a> <br />
  <hr />
  <a href="tools.html">Tools</a> <br />
  <hr />
  <hr />
  <a href="contact.html">Contact</a>
  <hr />
</section>

<section>
  <div class="footer_sect">
    <a href="">
      <img src="./static/images/x.jpeg" alt="" />
    </a>
    <a href="">
      <img src="./static/images/in.jpeg" alt="" />
    </a>
  </div>
  <a href="">your_company_emai@gmail.com</a>
</section>

<section>
  <div class="footer_sect">
    <img id="footer_logo" src="./static/images/log.jpeg" alt="" />
  </div>
  company mission or motto here
</section>

<section id="credits">
  &copy; 2024 Company name. All rights reserved. | Made by Frank.
  <a href="mailto:francischege602@gmail.com">Contact developer</a>
</section>`;

document.getElementById("footer").innerHTML = footer;
