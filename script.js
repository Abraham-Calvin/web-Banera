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
            "about-quote": "\"Obat yang berkualitas, pelayanan yang tulus \nkarena setiap kesehatan yang terjaga adalah kebahagiaan yang nyata.\"",

            // PROFIL PERUSAHAAN
            "profile-title": "Profil Perusahaan",
            "profile-desc": "PT. BANERA MEDIKA FARMA (BMF) adalah perusahaan Pedagang Besar Farmasi (PBF) yang berlokasi di Jln. Dr. Soetomo No. 31B, Kel. Watu, Kec. Langke Rembong, Kabupaten Manggarai, NTT. \nPerusahaan ini berawal pada tahun 2020 dengan nama CV. Banera Medika, yang bergerak di bidang apotik melalui Apotek Banera Medika. Seiring dengan perkembangan bisnis, CV. Banera Medika melakukan ekspansi dengan membuka cabang di Borong, Kabupaten Manggarai Timur, dan Bajawa, Kabupaten Ngada, NTT dalam rentang waktu tiga tahun. \nPada tahun 2023, perusahaan meningkatkan statusnya menjadi PT. BANERA MEDIKA FARMA dengan akta notaris resmi dan pengesahan dari Kementerian Hukum dan HAM RI. \nPada tahun 2024, PT. Banera Medika Farma melanjutkan proses pendaftaran sebagai Perusahaan Perdagangan Besar Farmasi (PBF) di Kementerian Kesehatan Republik Indonesia, memperoleh Nomor Induk Berusaha (NIB) dan Nomor Izin PBF.",

            // PENGANTAR
            "introduction-title": "Pengantar",
            "introduction-desc": "Sebagai perusahaan yang bergerak dalam distribusi farmasi, PT. BANERA MEDIKA FARMA (BMF) berkomitmen untuk memberikan pelayanan distribusi obat-obatan yang terintegrasi di Indonesia. Pengalaman yang telah terbangun selama empat tahun dalam menjalankan apotek di berbagai kota di Flores, NTT, menjadi landasan kuat dalam membangun sistem distribusi yang efektif, terpercaya, dan profesional. Guna menjaga stabilitas perusahaan dan memastikan keberlanjutannya, PT. Banera Medika Farma terus melakukan inovasi, kolaborasi, serta kemitraan strategis untuk menciptakan rantai pasok farmasi yang harmonis dari hulu ke hilir.",

            // VISI & MISI
            "vision-title": "Visi",
            "vision-desc": "Menjadi Perusahaan Farmasi Lokal yang Bermutu dan Terpercaya.",
            "mission-title": "Misi",
            "mission-1": "Mengembangkan pelayanan dan membangun sinergi yang kuat dengan mitra bisnis.",
            "mission-2": "Mengelola usaha dengan manajemen yang profesional, transparan, dan efisien.",
            "mission-3": "Memberikan nilai tambah dan manfaat yang optimal bagi seluruh mitra usaha.",

            // RUANG LINGKUP
            "scope-title": "Ruang Lingkup Usaha",
            "scope-desc": "Sebagai perusahaan distribusi farmasi, PT. Banera Medika Farma berperan sebagai pusat distribusi obat-obatan yang telah berpengalaman dalam melayani masyarakat melalui jaringan apotek mitra yang tersebar di wilayah NTT, khususnya di sektor kefarmasian.",

            // STRUKTUR ORGANISASI
            "organization-title": "Struktur Organisasi",
            "organization-desc": "Untuk memastikan efektivitas operasional dan pertumbuhan bisnis yang berkelanjutan, PT. Banera Medika Farma memiliki struktur organisasi yang solid, dengan tugas dan tanggung jawab yang jelas dalam setiap unit kerja.",

            // PENGURUS PERUSAHAAN
            "management-title": "Pengurus Perusahaan",
            "management-desc": "Komitmen perusahaan dalam memberikan pelayanan terbaik didukung oleh kepemimpinan yang profesional dan berpengalaman di industri farmasi.",

            // TATA KELOLA
            "governance-title": "Tata Kelola Perusahaan",
            "governance-1": "Pedoman Tata Kelola Perusahaan – Menjamin transparansi, akuntabilitas, dan profesionalisme dalam pengelolaan perusahaan.",
            "governance-2": "Pedoman Bentuk Kepentingan – Menyelaraskan tujuan bisnis dengan kepentingan pelanggan, mitra, dan pemangku kepentingan lainnya.",
            "governance-3": "Pedoman Manajemen Risiko – Mengelola dan memitigasi risiko operasional untuk menjaga keberlanjutan bisnis.",
            "governance-4": "Pedoman Umum Sistem Pengendalian Internal – Membangun sistem pengendalian internal yang kuat untuk menjaga efektivitas dan efisiensi perusahaan.",

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
            "about-quote": "\"Quality medicine, sincere service \nbecause every preserved health is a true happiness.\"",

            // COMPANY PROFILE
            "profile-title": "Company Profile",
            "profile-desc": "PT. BANERA MEDIKA FARMA (BMF) is a Major Pharmaceutical Supplier (PBF) located at Jln. Dr. Soetomo No. 31B, Kel. Watu, Langke Rembong District, Manggarai Regency, NTT. \nThe company started in 2020 under the name CV. Banera Medika, operating in pharmacy services through Apotek Banera Medika. Over the next three years, CV. Banera Medika expanded by opening branches in Borong, Manggarai Timur Regency, and Bajawa, Ngada Regency, NTT. \nIn 2023, the company upgraded its status to PT. BANERA MEDIKA FARMA with an official notarial deed and approval from the Indonesian Ministry of Law and Human Rights. \nIn 2024, PT. Banera Medika Farma continued the registration process as a Large Pharmaceutical Trading Company (PBF) with the Indonesian Ministry of Health, obtaining its Business Identification Number (NIB) and PBF License Number.",

            // INTRODUCTION
            "introduction-title": "Introduction",
            "introduction-desc": "As a company engaged in pharmaceutical distribution, PT. BANERA MEDIKA FARMA (BMF) is committed to providing integrated pharmaceutical distribution services throughout Indonesia. The solid experience built over four years of operating pharmacies in various cities across Flores, NTT, serves as a strong foundation for establishing an effective, trustworthy, and professional distribution system. To maintain corporate stability and ensure sustainability, PT. Banera Medika Farma continuously innovates, collaborates, and establishes strategic partnerships to create a seamless pharmaceutical supply chain from upstream to downstream.",

            // VISION & MISSION
            "vision-title": "Vision",
            "vision-desc": "To become a high-quality and trusted local pharmaceutical company.",
            "mission-title": "Mission",
            "mission-1": "Develop services and build strong synergy with business partners.",
            "mission-2": "Manage the business with professionalism, transparency, and efficiency.",
            "mission-3": "Provide added value and optimal benefits for all business partners.",

            // BUSINESS SCOPE
            "scope-title": "Business Scope",
            "scope-desc": "As a pharmaceutical distribution company, PT. Banera Medika Farma serves as a central distributor of medicines with extensive experience in serving communities through a network of partner pharmacies spread across NTT, particularly in the pharmaceutical sector.",

            // ORGANIZATIONAL STRUCTURE
            "organization-title": "Organizational Structure",
            "organization-desc": "To ensure operational effectiveness and sustainable business growth, PT. Banera Medika Farma has a solid organizational structure with clear duties and responsibilities in each working unit.",

            // COMPANY MANAGEMENT
            "management-title": "Company Management",
            "management-desc": "The company's commitment to providing the best service is supported by professional leadership with extensive experience in the pharmaceutical industry.",

            // CORPORATE GOVERNANCE
            "governance-title": "Corporate Governance",
            "governance-1": "Corporate Governance Guidelines – Ensuring transparency, accountability, and professionalism in corporate management.",
            "governance-2": "Interest Alignment Guidelines – Aligning business objectives with the interests of customers, partners, and other stakeholders.",
            "governance-3": "Risk Management Guidelines – Managing and mitigating operational risks to maintain business continuity.",
            "governance-4": "General Internal Control Guidelines – Establishing a strong internal control system to maintain corporate effectiveness and efficiency.",


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

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang]?.[key]) {
                // Jika teks mengandung tag HTML, pakai innerHTML, jika tidak pakai innerText
                if (/<[a-z][\s\S]*>/i.test(translations[lang][key])) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.innerText = translations[lang][key];
                }
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
        if (window.scrollY > window.innerHeight * 0.25) {
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

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah efek loncat langsung

            const targetID = this.getAttribute("href").substring(1); // Ambil ID tujuan
            const targetElement = document.getElementById(targetID);

            // 🔹 Dapatkan tinggi navbar dan sub-navbar
            const navbar = document.querySelector("header");
            const subNavbar = document.querySelector(".sub-navbar");
            const subNavbarHeight = subNavbar ? subNavbar.offsetHeight : 0;
            const totalOffset = subNavbarHeight + 10; // Tambahkan sedikit margin

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - totalOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Efek scroll smooth
                });
            }
        });
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

// X+wvV1q5gY8FFf9CCuZgeYBysUnSMFbfGq9Sho1ozP0=