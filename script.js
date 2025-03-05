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
            "name-desc": "Masukkan nama Anda",
            "message-title": "Pesan",
            "submit-btn": "Kirim",
            "placeholder-name": "Masukkan nama Anda",
            "placeholder-email": "Masukkan email Anda",
            "placeholder-message": "Tulis pesan Anda...",

            // HAK CIPTA
            "copyrights": "© 2025 Banera. Semua hak dilindungi."
        },
        "en": {
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

            // CONTACT US
            "contact-title": "Contact Us",
            "contact-desc": "If you have questions, please contact us using the form below.",
            "name-title": "Name",
            "name-desc": "Enter your name",
            "message-title": "Message",
            "submit-btn": "Submit",
            "placeholder-name": "Enter your name",
            "placeholder-email": "Enter your email",
            "placeholder-message": "Write your message...",

            // COPYRIGHT
            "copyrights": "© 2025 Banera. All rights reserved."
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

        document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
            const key = element.getAttribute("data-translate-placeholder");
            if (translations[lang]?.[key]) {
                element.placeholder = translations[lang][key];
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

    menuButton?.addEventListener("click", function () {
        navMenu?.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

    // 🔹 Efek Scrollbar Custom
    function updateScrollbar() {
        let scrollTop = Math.ceil(window.scrollY);
        let maxScroll = Math.ceil(document.documentElement.scrollHeight - window.innerHeight);
        let thumbHeight = document.documentElement.scrollHeight / 20; // Tentukan tinggi minimal thumb

        if (scrollTop <= 0) {
            document.documentElement.style.setProperty("--scrollbar-top-radius", "0px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "50px");
        } else if (scrollTop >= maxScroll) {
            document.documentElement.style.setProperty("--scrollbar-top-radius", "50px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "0px");
        } else {
            document.documentElement.style.setProperty("--scrollbar-top-radius", "50px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "50px");
        }

        // Jika thumb terlalu kecil, paksa ukurannya menjadi min 20px dan hilangkan radius
        if (thumbHeight < 20) {
            document.documentElement.style.setProperty("--scrollbar-thumb-height", "20px");
            document.documentElement.style.setProperty("--scrollbar-top-radius", "0px");
            document.documentElement.style.setProperty("--scrollbar-bottom-radius", "0px");
        }
    }

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    updateScrollbar();

    // 🔹 Tombol Scroll ke Atas
    const upButton = document.getElementById("up-button");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight * 0.5) {
            upButton.style.opacity = "1";
            upButton.style.pointerEvents = "auto";
        } else {
            upButton.style.opacity = "0";
            upButton.style.pointerEvents = "none";
        }
    });

    upButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    const submitButton = form.querySelector(".btn-submit");
    const responseMessage = document.createElement("p");
    responseMessage.classList.add("response-message");
    form.appendChild(responseMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil data dari input form
        const formData = new FormData(form);

        // Ubah tombol menjadi "Loading..."
        submitButton.textContent = "Mengirim...";
        submitButton.disabled = true;

        // Kirim data ke submit-form.php
        fetch("submit-form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                responseMessage.textContent = "✅ Pesan berhasil dikirim!";
                responseMessage.style.color = "green";
                form.reset(); // Bersihkan form
            } else {
                responseMessage.textContent = "❌ Gagal mengirim pesan!";
                responseMessage.style.color = "red";
            }
        })
        .catch(error => {
            responseMessage.textContent = "⚠️ Terjadi kesalahan. Coba lagi.";
            responseMessage.style.color = "orange";
        })
        .finally(() => {
            // Kembalikan tombol ke keadaan semula
            submitButton.textContent = "Kirim";
            submitButton.disabled = false;
        });
    });
});
