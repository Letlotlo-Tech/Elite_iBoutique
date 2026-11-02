
document.addEventListener("DOMContentLoaded", () => {
  const businessEmail = "tshabalalaletlotlo8@gmail.com";
  const businessPhone = "+27676181497";
  const currentPage = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a[data-page]").forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("header nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
  }

  const targets = document.querySelectorAll(
    "main section, .product-card, .service-card, .contact-card, .card, .feature, .value"
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(el => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".buttons .btn").forEach(button => {
    const label = button.textContent.toLowerCase();
    if (label.includes("contact") || label.includes("email")) {
      button.addEventListener("click", () => {
        location.href = `mailto:${businessEmail}?subject=${encodeURIComponent("Enquiry - Elite iPhone Boutique")}`;
      });
    } else if (label.includes("phone") || label.includes("call")) {
      button.addEventListener("click", () => { location.href = `tel:${businessPhone}`; });
    } else if (label.includes("facebook") || label.includes("instagram")) {
      button.addEventListener("click", () => {
        alert("The official social-media profile link has not yet been supplied. Please contact us by email or phone.");
      });
    }
  });

  document.querySelectorAll(".product-card .btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const productName = card?.querySelector("h3")?.textContent.trim() || "Product enquiry";
      location.href = `enquiry.html?product=${encodeURIComponent(productName)}`;
    });
  });

  document.querySelectorAll(".service-card .arrow-btn").forEach(button => {
    const card = button.closest(".service-card");
    const paragraph = card?.querySelector(".service-content p");
    if (!paragraph) return;
    const extra = document.createElement("p");
    extra.className = "service-extra";
    extra.textContent = "Contact Elite iPhone Boutique for more information about this service and availability.";
    extra.hidden = true;
    paragraph.after(extra);
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      extra.hidden = expanded;
      button.setAttribute("aria-expanded", String(!expanded));
      button.textContent = expanded ? "›" : "⌄";
    });
  });

  const productSelect = document.getElementById("product");
  if (productSelect) {
    const requested = new URLSearchParams(location.search).get("product");
    if (requested) {
      const normalise = value => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      const aliases = [
        { match: ["iphone", "iphones"], value: "iphones" },
        { match: ["airpods", "earpods", "earbuds"], value: "airpods" },
        { match: ["charger", "chargers", "cable", "cables"], value: "chargers" },
        { match: ["case", "cases"], value: "cases" },
        { match: ["watch", "watches", "apple watch"], value: "watches" },
        { match: ["accessory", "accessories"], value: "accessories" }
      ];
      const wanted = normalise(requested);
      let option = Array.from(productSelect.options).find(item =>
        normalise(item.text) === wanted || normalise(item.value) === wanted
      );
      if (!option) {
        const alias = aliases.find(item => item.match.some(word => wanted.includes(word)));
        if (alias) option = Array.from(productSelect.options).find(item => item.value === alias.value);
      }
      if (option) productSelect.value = option.value;
    }
  }

  const form = document.querySelector(".enquiry-form");
  if (form) {
    const name = form.querySelector("#fullname");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");
    const product = form.querySelector("#product");
    const message = form.querySelector("#enquiry");
    const status = document.createElement("p");
    status.className = "form-message";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    form.prepend(status);

    [name, email, phone, product, message].forEach(field => {
      if (field) field.required = true;
    });
    if (phone) {
      phone.setAttribute("inputmode", "tel");
      phone.addEventListener("input", () => phone.setCustomValidity(""));
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      status.textContent = "";
      status.classList.remove("error", "success");
      const digits = (phone?.value || "").replace(/\D/g, "");
      if (phone && digits.length < 9) {
        phone.setCustomValidity("Please enter a valid phone number with at least 9 digits.");
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Please check the highlighted fields and try again.";
        status.classList.add("error");
        return;
      }
      const subject = "Website enquiry - Elite iPhone Boutique";
      const body = [
        "New enquiry for Elite iPhone Boutique", "",
        `Name: ${name.value.trim()}`,
        `Email: ${email.value.trim()}`,
        `Phone: ${phone.value.trim()}`,
        `Product / service: ${product.options[product.selectedIndex].text}`,
        "", "Enquiry:", message.value.trim()
      ].join("\n");
      status.textContent = "Your email application is opening with your enquiry prepared. Please press Send in your email application to deliver it.";
      status.classList.add("success");
      location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  document.querySelectorAll(".contact-item").forEach(item => {
    const heading = item.querySelector("strong")?.textContent.trim().toUpperCase();
    const paragraph = item.querySelector("p");
    if (!heading || !paragraph) return;
    if (heading === "EMAIL") paragraph.innerHTML = `<a href="mailto:${businessEmail}">${businessEmail}</a>`;
    if (heading === "PHONE") paragraph.innerHTML = `<a href="tel:${businessPhone}">067 618 1497</a>`;
  });

  const mapButton = document.querySelector(".map-card .btn");
  if (mapButton) {
    mapButton.addEventListener("click", () => {
      window.open("https://www.google.com/maps/search/?api=1&query=Johannesburg%2C%20South%20Africa", "_blank", "noopener,noreferrer");
    });
  }
});
