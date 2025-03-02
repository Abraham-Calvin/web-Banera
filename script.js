document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Objek untuk terjemahan multi-bahasa
    const translations = {
        "id": {
            // NAVBAR
            "menu-home": "Beranda",
            "menu-about": "Tentang Kami",
            "menu-ecatalog": "E-Catalog",
            "menu-gerai": "Gerai & Rumah Sakit",
            "menu-contact": "Hubungi Kami",

            // BERANDA
            "home-title": "Selamat Datang di Banera",
            "home-desc": "PT. Banera Medika Farma adalah perusahaan farmasi terkemuka...",

            // TENTANG KAMI
            "about-title": "Tentang Kami",
            "about-desc": "Banera adalah perusahaan farmasi terkemuka...",

            // E-CATALOG
            "ecatalog-desc": "Daftar produk yang tersedia dari Banera...",

            // GERAI
            "gerai-title": "Gerai & Rumah Sakit",
            "gerai-desc": "Lokasi gerai dan rumah sakit mitra Banera...",

            // HUBUNGI KAMI
            "contact-title": "Hubungi Kami",
            "contact-desc": "Jika Anda memiliki pertanyaan, silakan hubungi kami melalui formulir di bawah ini.",
            "name-title": "Nama",
            "name-desc": "Masukan nama Anda",
        },
        "_en": {
            // NAVBAR
            "menu-home": "Home",
            "menu-about": "About Us",
            "menu-ecatalog": "E-Catalog",
            "menu-gerai": "Stores & Hospitals",
            "menu-contact": "Contact Us",

            // HOME
            "home-title": "Welcome to Banera",
            "home-desc": "PT. Banera Medika Farma is a leading pharmaceutical company...",

            // ABOUT US
            "about-title": "About Us",
            "about-desc": "Banera is a leading pharmaceutical company...",

            // E-CATALOG
            "ecatalog-desc": "Product list from Banera",

            // STORES
            "gerai-title": "Stores & Hospitals",
            "gerai-desc": "Stores & Hospitals's location that works with Banera",

            // Contact Us
            "contact-title": "Contact Us",
            "contact-desc": "If You have question, please contact Us from the formulir beneath",
            "name-title": "Name",
            "name-desc": "Input Your name",
            
        },
        get "en"() {
            return this["_en"];
        },
        set "en"(value) {
            this["_en"] = value;
        },
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

document.addEventListener("DOMContentLoaded", function () {
    function updateScrollbar() {
        let scrollTop = Math.ceil(window.scrollY);
        let maxScroll = Math.ceil(document.documentElement.scrollHeight - window.innerHeight);
        let zoomLevel = window.visualViewport?.scale || 1;

        if (scrollTop <= 0) {
            // Jika di atas, buat atas lurus (0px), bawah tetap bulat
            document.documentElement.style.setProperty("--scrollbar-top-radius", "0px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "50px");
        } else if (scrollTop + zoomLevel >= maxScroll) {
            // Jika di bawah, buat bawah lurus (0px), atas tetap bulat
            document.documentElement.style.setProperty("--scrollbar-top-radius", "50px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "0px");
        } else {
            // Jika di tengah, buat semuanya bulat
            document.documentElement.style.setProperty("--scrollbar-top-radius", "50px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "50px");
        }
    }

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    updateScrollbar();
});

document.addEventListener('DOMContentLoaded', function() {
    var mybutton = document.getElementById("up-button");

    window.addEventListener("scroll", function() {
        // Jika user scroll lebih dari 5vh, tombol muncul
        if (window.scrollY > window.innerHeight * 0.5) { 
            mybutton.style.opacity = "1";
            mybutton.style.pointerEvents = "auto"; 
        } else {
            mybutton.style.opacity = "0";
            mybutton.style.pointerEvents = "none"; 
        }
    });

    // Saat tombol diklik, scroll ke atas dengan efek smooth
    mybutton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});






