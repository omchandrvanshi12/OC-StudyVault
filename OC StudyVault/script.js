/* ==========================
   OC StudyVault
   script.js
========================== */

/* --------------------------
   Search Functionality
-------------------------- */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(
            ".subject-card, .pyq-card, .resource-card"
        );

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* --------------------------
   Reveal On Scroll
-------------------------- */

const revealElements = document.querySelectorAll(
    ".subject-card, .pyq-card, .resource-card, .section-title"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* --------------------------
   Navbar Scroll Effect
-------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* --------------------------
   Smooth Card Hover Glow
-------------------------- */

const cards = document.querySelectorAll(
    ".subject-card, .pyq-card, .resource-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
            "0 20px 50px rgba(99,102,241,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 20px 50px rgba(0,0,0,.35)";

    });

});

/* --------------------------
   Typing Effect Hero Title
-------------------------- */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const originalText = heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let index = 0;

    function typeEffect() {

        if (index < originalText.length) {

            heroTitle.innerHTML += originalText.charAt(index);

            index++;

            setTimeout(typeEffect, 20);

        }

    }

    typeEffect();

}

/* --------------------------
   Back To Top Button
-------------------------- */

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backToTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.bottom = "25px";
backTop.style.right = "25px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.borderRadius = "50%";
backTop.style.border = "none";
backTop.style.cursor = "pointer";
backTop.style.fontSize = "20px";
backTop.style.display = "none";
backTop.style.zIndex = "999";
backTop.style.color = "white";
backTop.style.background =
    "linear-gradient(135deg,#6366F1,#8B5CF6)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* --------------------------
   Welcome Console Message
-------------------------- */

console.log(
`
🚀 OC StudyVault Loaded Successfully

Built for students.
Powered by knowledge.

`
);