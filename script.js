document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Objek untuk terjemahan multi-bahasa
    const translations = {
        "id": {
            "menu-home": "Beranda",
            "menu-about": "Tentang Kami",
            "menu-ecatalog": "E-Catalog",
            "menu-gerai": "Gerai & Rumah Sakit",
            "menu-contact": "Hubungi Kami",
            "home-title": "Selamat Datang di Banera",
            "home-desc": "PT. Banera Medika Farma adalah perusahaan farmasi terkemuka...",
            "about-title": "Tentang Kami",
            "about-desc": "Banera adalah perusahaan farmasi terkemuka..."
        },
        "en": {
            "menu-home": "Home",
            "menu-about": "About Us",
            "menu-ecatalog": "E-Catalog",
            "menu-gerai": "Stores & Hospitals",
            "menu-contact": "Contact Us",
            "home-title": "Welcome to Banera",
            "home-desc": "PT. Banera Medika Farma is a leading pharmaceutical company...",
            "about-title": "About Us",
            "about-desc": "Banera is a leading pharmaceutical company..."
        }
    };

    // 🔹 Ambil elemen tombol bahasa
    const langID = document.getElementById("btn-lang-id");
    const langEN = document.getElementById("btn-lang-en");

    // 🔹 Ambil bahasa yang disimpan di localStorage, default "id"
    let selectedLang = localStorage.getItem("selectedLanguage") || "id";
    translatePage(selectedLang);
    setActiveLang(selectedLang);

    // 🔹 Event listener untuk tombol bahasa
    langID?.addEventListener("click", () => setLanguage("id"));
    langEN?.addEventListener("click", () => setLanguage("en"));

    function setLanguage(language) {
        localStorage.setItem("selectedLanguage", language);
        translatePage(language);
        setActiveLang(language);
    }

    function translatePage(lang) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang]?.[key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    function setActiveLang(lang) {
        if (lang === "id") {
            langID?.classList.add("active");
            langEN?.classList.remove("active");
        } else {
            langID?.classList.remove("active");
            langEN?.classList.add("active");
        }
    }

    // 🔹 Menu Toggle (Burger Menu)
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector("nav ul");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuButton.classList.toggle("active");
        });
    }
});
