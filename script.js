document.addEventListener("DOMContentLoaded", function () {
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

    let selectedLang = localStorage.getItem("selectedLanguage") || "id";
    translatePage(selectedLang);

    document.getElementById("lang-id").addEventListener("click", function () {
        setLanguage("id");
    });

    document.getElementById("lang-en").addEventListener("click", function () {
        setLanguage("en");
    });

    function setLanguage(language) {
        localStorage.setItem("selectedLanguage", language);
        translatePage(language);
    }

    function translatePage(lang) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});