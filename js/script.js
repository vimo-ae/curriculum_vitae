const navbarBtn = document.getElementById("navbarBtn");
const mobileNavbar = document.getElementById("mobileNavbar");

navbarBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hidden");
});

document.querySelectorAll("#mobileNavbar a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNavbar.classList.add("hidden");
  });
});



const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-green-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-green-300");
    }
  });

  navLinks.forEach(link => {
  link.classList.remove("text-green-300", "active");

  if (link.getAttribute("href") === `#${current}`) {
    link.classList.add("text-green-300", "active");
  }
});
});




const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);



document.querySelectorAll(".demoLink").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href || href === "#" || href.trim() === "") {
      e.preventDefault();
      alert("Maaf, project ini belum tersedia secara online..");
    }
  });
});
