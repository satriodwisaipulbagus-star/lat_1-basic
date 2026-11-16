// ===== Dark / Light Mode =====
const themeToggle = document.getElementById("theme-toggle");

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {}
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

// ===== Menu Mobile =====
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  iconOpen.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    setMenu(mobileMenu.classList.contains("hidden"));
  });

  // Tutup menu setelah salah satu tautan diklik
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Tutup menu jika layar diperlebar ke ukuran desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMenu(false);
  });
}

// ===== Tahun otomatis di footer =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Formulir Kontak (tampilan saja, belum terhubung ke server) =====
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function showStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = "rounded-lg px-4 py-3 text-sm";
  if (type === "error") {
    formStatus.classList.add("bg-red-100", "text-red-800", "dark:bg-red-900/30", "dark:text-red-300");
  } else {
    formStatus.classList.add("bg-brand-100", "text-brand-800", "dark:bg-brand-900/40", "dark:text-brand-300");
  }
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      showStatus("Mohon lengkapi semua kolom dan pastikan format email benar.", "error");
      contactForm.reportValidity();
      return;
    }

    showStatus("Formulir valid. Pada Tahap 1 ini tampilan saja, pesan belum dikirim ke server.", "info");
    contactForm.reset();
  });
}

// ===== Teks peran yang bergantian di Hero =====
const roleEl = document.getElementById("role-text");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (roleEl && !reduceMotion) {
  const roles = ["Web Developer", "Data Analyst", "Informatics Student"];
  let roleIndex = 0;

  setInterval(() => {
    roleEl.classList.add("opacity-0");            // memudar
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length; // pindah ke peran berikutnya
      roleEl.textContent = roles[roleIndex];
      roleEl.classList.remove("opacity-0");       // muncul kembali
    }, 300);
  }, 2500);
}

// ===== Bar skill terisi saat kartu terlihat =====
const skillBars = document.querySelectorAll(".skill-bar");

function fillBars(container) {
  container.querySelectorAll(".skill-bar").forEach((bar) => {
    bar.style.width = bar.dataset.level + "%";
  });
}

if ("IntersectionObserver" in window) {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillBars(entry.target);
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  // Pantau kartu yang memuat bar skill
  document.querySelectorAll("#skills .grid > div").forEach((card) => barObserver.observe(card));
} else {
  skillBars.forEach((bar) => {
    bar.style.width = bar.dataset.level + "%";
  });
}

// ===== Animasi muncul saat scroll =====
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target); // animasi hanya sekali
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  // Browser lama: langsung tampilkan semuanya
  revealEls.forEach((el) => el.classList.add("is-visible"));
}