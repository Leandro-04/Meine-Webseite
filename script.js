document.addEventListener("DOMContentLoaded", function () {
    // Textschreibeffekt
    const text = "Leandro Schmidt"; // Dein Text hier
    const typingTextElement = document.getElementById("typing-text");

    function type() {
        typingTextElement.textContent = "";
        let charIndex = 0;

        function addChar() {
            if (charIndex < text.length) {
                typingTextElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(addChar, 100);
            } else {
                setTimeout(deleteChars, 1000);
            }
        }



        function deleteChars() {
            if (charIndex > 0) {
                typingTextElement.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteChars, 100);
            } else {
                setTimeout(type, 1000);
            }
        }

        addChar();
    }

    type();

    // Smooth Scrolling
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const button1 = document.querySelector("#buttons-container button:nth-child(1)");
    const button2 = document.querySelector("#buttons-container button:nth-child(2)");
    const button3 = document.querySelector("#buttons-container button:nth-child(3)");
    const button4 = document.querySelector("#buttons-container button:nth-child(4)");

    if (button1) {
        button1.addEventListener("click", function () {
            scrollToSection("about");
        });
    }

    
    if (button2) {
        button2.addEventListener("click", function () {
            scrollToSection("skills");
        });
    }

    if (button3) {
        button3.addEventListener("click", function () {
            scrollToSection("projects");
        });
    }

    if (button4) {
        button4.addEventListener("click", function () {
            scrollToSection("contact");
        });
    }

    window.addEventListener("scroll", function () {
        let scrolled = window.scrollY;

        // Logik für das Erscheinen des Elements
        let elements = document.querySelectorAll('.appear');

        elements.forEach(function (element) {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position <= windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });

    });

    document.addEventListener("DOMContentLoaded", function () {
        const section = document.querySelector('.first-section');

        function createShape() {
            const shape = document.createElement('div');
            const shapeType = Math.floor(Math.random() * 3);
            const startPosX = Math.random() * section.clientWidth;
            const startPosY = Math.random() * section.clientHeight;
            const size = Math.random() * 50 + 20;  // Größe zwischen 20 und 70

            shape.classList.add('floating-shape');
            shape.style.top = `${startPosY}px`;
            shape.style.left = `${startPosX}px`;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;

            switch (shapeType) {
                case 0:  // Kreis (standardmäßig)
                    break;
                case 1:
                    shape.classList.add('shape-square');
                    break;
                case 2:
                    shape.classList.add('shape-star');
                    break;
                // Fügen Sie hier ggf. weitere Formen hinzu
            }

            section.appendChild(shape);

            // Entfernt die Form nach 5 Sekunden
            setTimeout(() => {
                section.removeChild(shape);
            }, 5000);
        }

        // Erstellt alle 700 Millisekunden eine neue Form
        setInterval(createShape, 700);
    });




    // Funktion, um festzustellen, ob ein Element im Viewport ist
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fade-In beim Scrollen
    document.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.style.opacity = 1;
            }
        });
    });



    // Kontaktformular
    const contactForm = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = contactForm.querySelector("#name").value;
            const email = contactForm.querySelector("#email").value;
            const message = contactForm.querySelector("#message").value;

            const resultMessage = `
                Vielen Dank, ${name}!
                <br>
                Deine Nachricht wurde gesendet:
                <br>
                E-Mail: ${email}
                <br>
                Nachricht: ${message}
            `;

            if (confirmation) {
                confirmation.innerHTML = resultMessage;
            }

            contactForm.reset();
        });
    }
});
