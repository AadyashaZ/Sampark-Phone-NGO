// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
    mobileMenu.style.left = "0";
});
closeBtn.addEventListener("click", () => {
    mobileMenu.style.left = "-260px";
});

// =========================
// DARK MODE
// =========================
const darkModeBtn = document.getElementById("darkModeBtn");
if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️";

        } else {
            darkModeBtn.textContent = "🌙";
        }
    });
}

// =========================
// DONATE POPUP
// =========================
function openPopup() {
    document.getElementById("donatePopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("donatePopup").style.display = "none";
}

// =========================
// VOLUNTEER POPUP
// =========================
function openVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "flex";
}

function closeVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "none";
}

// =========================
// HELP POPUP
// =========================
function openHelpPopup() {
    document.getElementById("helpPopup").style.display = "flex";
}

function closeHelpPopup() {
    document.getElementById("helpPopup").style.display = "none";
}

// =========================
// SCROLL TO TOP BUTTON
// =========================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";

    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// RANDOM KINDNESS QUOTES
// =========================
const quotes = [
    "💛 No act of kindness is ever wasted.",
    "🌱 Small acts create big change.",
    "🤝 Together we can make a difference.",
    "✨ Kindness costs nothing but means everything.",
    "🌍 Be the reason someone smiles today."
];
const quoteBtn = document.getElementById("quoteBtn");
if (quoteBtn) {
    quoteBtn.addEventListener("click", () => {
        const randomIndex =
            Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent =
            quotes[randomIndex];
    });
}