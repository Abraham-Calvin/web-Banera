document.addEventListener("DOMContentLoaded", function () {
    const langButtons = document.querySelectorAll(".language-switch button");

    // Objek untuk menyimpan teks dalam berbagai bahasa
    const translations = {
        "id": {
            //NAVBAR
            "menu-tentang": "Tentang Kami",
            "menu-ceo": "CEO",
            "menu-ecatalog": "E-Catalog",
            "menu-sejarah": "Sejarah",
            "menu-testimoni": "Testimoni",
            "menu-pencapaian": "Pencapaian",
            "menu-gerai": "Gerai & Rumah Sakit",
            //JUDUL
            "tentang-title": "Tentang Kami",
            "ceo-title": "CEO",
            "ecatalog-title": "E-Catalog",
            "sejarah-title": "Sejarah",
            "testimoni-title": "Testimoni",
            "pencapaian-title": "Pencapaian",
            "gerai-title": "Gerai & Rumah Sakit",
            //DESKRIPSI
            "tentang-desc": "Banera adalah perusahaan farmasi terkemuka yang berkomitmen menghadirkan produk berkualitas tinggi...",
            "ceo-desc": "Profil CEO kami, visi, dan misi dalam memimpin perusahaan...",
            "ecatalog-desc": "Daftar produk yang tersedia dari Banera",
            "sejarah-desc": "Perjalanan Banera dari awal hingga kini...",
            "testimoni-desc": "Ulasan dan pengalaman pelanggan kami...",
            "pencapaian-desc": "Penghargaan dan pencapaian Banera selama bertahun-tahun...",
            "gerai-desc": "Lokasi gerai dan rumah sakit mitra Banera..."
        },
        "en": {
            //NAVBAR
            "menu-tentang": "About Us",
            "menu-ceo": "CEO",
            "menu-ecatalog": "E-Catalog",
            "menu-sejarah": "History",
            "menu-testimoni": "Testimonials",
            "menu-pencapaian": "Achievements",
            "menu-gerai": "Stores & Hospitals",
            //TITLE
            "tentang-title": "About Us",
            "ceo-title": "CEO",
            "ecatalog-title": "E-Catalog",
            "sejarah-title": "History",
            "testimoni-title": "Testimonials",
            "pencapaian-title": "Achievements",
            "gerai-title": "Stores & Hospitals",
            //DESCRIPTION
            "tentang-desc": "Banera is a leading pharmaceutical company committed to providing high-quality products...",
            "ceo-desc": "Our CEO profile, vision, and mission in leading the company...",
            "ecatalog-desc": "List of available products from Banera",
            "sejarah-desc": "Banera's journey from the beginning until now...",
            "testimoni-desc": "Reviews and experiences from our customers...",
            "pencapaian-desc": "Awards and achievements Banera has received over the years...",
            "gerai-desc": "Locations of Banera stores and partner hospitals..."
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        let selectedLang = localStorage.getItem("selectedLanguage") || "id"; // Default ke Indonesia
        translatePage(selectedLang);
    
        document.getElementById("lang-id").addEventListener("click", function () {
            setLanguage("id");
        });
    
        document.getElementById("lang-en").addEventListener("click", function () {
            setLanguage("en");
        });
    });
    
    function setLanguage(language) {
        localStorage.setItem("selectedLanguage", language);
        translatePage(language);
    }
    
    // Fungsi untuk mengganti bahasa
    function changeLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Event listener untuk tombol bahasa
    langButtons.forEach(button => {
        button.addEventListener("click", function () {
            const lang = this.id === "lang-id" ? "id" : "en";
            changeLanguage(lang);
        });
    });
});