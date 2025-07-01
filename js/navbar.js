document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <header class="navbar">
      <div class="navbar-left">
        <img src="assets/images/themark.png" alt="Founder's Mark" class="founders-icon" />
        <div class="navbar-logo">Tavern & Board</div>
      </div>
      <nav class="navbar-links">
        <a href="dashboard.html">Dashboard</a>
        <a href="lore.html">Lore</a>
        <a href="experiences.html">Experiences</a>
        <a href="investor.html">Investor</a>
        <a href="contact.html">Contact</a>
        <a href="about.html">About</a>
        <a href="login.html">Login</a->  |<a href="signup.html">Sign Up</a>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
