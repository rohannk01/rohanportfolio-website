<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Me</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <header>
    <nav>
      <h2 class="logo">Rohan<span>K</span></h2>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="achievements.html">Achievements</a></li>
        <li><a href="contact.php" class="active">Contact</a></li>
      </ul>
      <button id="theme-toggle" class="theme-btn">🌙</button>
    </nav>
  </header>

  <section class="section">
    <h1>Contact Me</h1>
    <form method="POST" action="">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" class="btn">Send</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST['name'];
      echo "<p class='fade-in visible'>Thanks, <b>$name</b>! Your message has been received.</p>";
    }
    ?>
  </section>
</body>
</html>