<?php
require_once __DIR__ . '/../config/config.php';
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Gomitolo APS - 2025</title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#hero" id="nav-home"></a></li>
            <li><a href="#about" id="nav-about"> </a></li>
            <li><a href="#team" id="nav-team"></a></li>
            <li><a href="#mission" id="nav-mission"> </a></li>
            <li><a href="#services" id="nav-services"></a></li>
            <li><a href="#contact" id="nav-contact"></a></li>
        </ul>
    </nav>

    <section id="hero">
        <div class="hero-content">
            <h1 id="hero-title"></h1>
            <p id="hero-subtitle"></p>
        </div>
        <div class="gomitolo-animato" style="top: 15%; left: 15%; width: 150px; height: 150px; animation-delay: 0s;"></div>
        <div class="gomitolo-animato" style="top: 20%; left: 75%; width: 200px; height: 200px; animation-delay: 2s;"></div>
        <div class="gomitolo-animato" style="top: 70%; left: 80%; width: 100px; height: 100px; animation-delay: 4s;"></div>
        <div class="gomitolo-animato" style="top: 80%; left: 20%; width: 100px; height: 100px; animation-delay: 5s;"></div>
        <div class="gomitolo-animato" style="bottom: 30%; left: 40%; width: 250px; height: 250px; animation-delay: 0s;"></div>
        <div class="gomitolo" style="top: 30%; right: 15%;"></div>
    </section>

    <section id="about">
        <h2 id="about-title"></h2>
        <br>
        <p id="about-content"></p>
    </section>

    <section id="team">
        <h2 id="team-title"></h2>
        <div class="team-grid" id="team-grid"></div>
    </section>

    <section id="mission">
        <h2 id="mission-title"></h2>
        <br>
        <p id="mission-content"></p>
    </section>

    <section id="services">
        <h2 id="services-title"></h2>
        <div class="services-grid" id="services-grid"></div>
    </section>

    <section id="contact">
        <h2>Contatti</h2>
        <form class="contact-form">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" required placeholder="Il tuo nome">

            <label for="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome" required placeholder="Il tuo cognome">

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="La tua email">

            <label for="telefono">Telefono</label>
            <input type="tel" id="telefono" name="telefono" required placeholder="Il tuo numero">

            <label for="messaggio">Messaggio</label>
            <textarea id="messaggio" name="messaggio" required placeholder="Scrivi il tuo messaggio"></textarea>

            <button type="submit">Invia</button>
        </form>
    </section>>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <a class="navbar-brand" href="index.php">IL GOMITOLO PSICOLOGIA</a>
            </div>
    
            <div class="footer-info">
                <div class="footer-info-block">
                    <div class="info">
                        <i class="bi bi-geo-alt"></i>
                        <p>Via Pietro Trucchi, 25<br>Venaria Reale, TO 10078<br>C.F. 97873680017<br>P. IVA 12592960012</p>
                    </div>
                </div>
                <div class="footer-info-block">
                    <iframe style="border-radius: 4px" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22522.34279522732!2d7.625795318206036!3d45.12040111228038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886fb9316a459b%3A0xc86a1a0f1d13211c!2sIl%20Gomitolo%20Psicologia!5e0!3m2!1sit!2sit!4v1647705666905!5m2!1sit!2sit" 
                        width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="footer-info-block">
                    <div class="info">
                        <div>
                            <i class="bi bi-phone"></i>
                            <p>+39 3792966184</p>
                        </div>
                        <div class="email">
                            <i class="bi bi-envelope"></i>
                            <p>info@ilgomitoloaps.it</p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="footer-social">
                <div class="social-links">
                    <a target="_blank" href="https://www.facebook.com/Il-Gomitolo-Psicologia-105419675382834" class="facebook"><img src="./images/fb.png" alt="Facebook" width="35" height="35"></a>
                    <a target="_blank" href="https://www.instagram.com/ilgomitolopsicologia/" class="instagram"><img src="./images/ig2.png" alt="Instagram" width="35" height="35"></a>
                </div>
            </div>

            <p>© Copyrights ilGomitolo. All rights reserved.</p>
        </div>
    </footer>

    <script src="./script/main.js"></script>
</body>
</html>