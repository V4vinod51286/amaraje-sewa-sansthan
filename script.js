(() => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  const langToggle = document.getElementById("langToggle");
  let language = "en";

  document.getElementById("year").textContent = new Date().getFullYear();

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }),
  );

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language === "hi" ? "hi" : "en";
    document.body.classList.toggle("hindi", language === "hi");
    document.querySelectorAll("[data-en][data-hi]").forEach((el) => {
      const value = el.dataset[language];
      if (value !== undefined) el.innerHTML = value;
    });
    langToggle.textContent = language === "en" ? "हिन्दी" : "English";
    langToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Hindi" : "Switch to English",
    );
  }
  langToggle.addEventListener("click", () =>
    setLanguage(language === "en" ? "hi" : "en"),
  );

  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Amaraje Seva Sansthan enquiry: ${data.get("interest")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email or phone: ${data.get("email")}`,
      `Interest: ${data.get("interest")}`,
      `Message: ${data.get("message") || "(not provided)"}`,
    ].join("\n");
    // Replace this address with the organisation's official email before publishing.
    const contactEmail = "Amaraje.sewa.sansthan@gmail.com";
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
