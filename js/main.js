(function () {
  "use strict";

  // Sticky header shadow
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var navToggleIcon = document.getElementById("navToggleIcon");
  navToggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggleIcon.innerHTML = isOpen
      ? '<use href="#icon-close"></use>'
      : '<use href="#icon-menu"></use>';
  });
  document.getElementById("mainNav").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggleIcon.innerHTML = '<use href="#icon-menu"></use>';
    }
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Quote form -> mailto
  var form = document.getElementById("quoteForm");
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var data = new FormData(form);
    var fullName = data.get("fullName") || "";
    var email = data.get("email") || "";
    var phone = data.get("phone") || "(not provided)";
    var date = data.get("date") || "(not specified)";
    var propertyType = data.get("propertyType") || "";
    var service = data.get("service") || "";
    var frequency = data.get("frequency") || "";
    var message = data.get("message") || "(none)";

    var subject = "Quote Request — " + fullName + " (" + service + ")";
    var body =
      "Name: " + fullName + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone + "\n" +
      "Property type: " + propertyType + "\n" +
      "Service needed: " + service + "\n" +
      "Preferred frequency: " + frequency + "\n" +
      "Preferred date: " + date + "\n\n" +
      "Details:\n" + message;

    var mailto =
      "mailto:ali.mavini126@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;

    status.textContent =
      "Opening your email app with your request pre-filled — just hit send. If nothing opens, email us directly at ali.mavini126@gmail.com.";
    status.classList.add("is-visible");
  });
})();
