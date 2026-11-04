(function () {
  "use strict";
  var doc = document;
  doc.documentElement.classList.remove("no-js");

  /* mobile drawer */
  var t = doc.getElementById("mob-toggle"), d = doc.getElementById("mob-drawer"),
      o = doc.getElementById("mob-overlay"), c = doc.getElementById("drawer-close");
  function openMenu() {
    d.removeAttribute("hidden"); o.classList.add("visible");
    t.setAttribute("aria-expanded", "true"); t.setAttribute("aria-label", "Close navigation menu");
    doc.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    d.setAttribute("hidden", ""); o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false"); t.setAttribute("aria-label", "Open navigation menu");
    doc.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener("click", closeMenu); }
    o.addEventListener("click", closeMenu);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeMenu(); } });
  }

  /* FAQ accordion (max-height toggle) */
  var qs = doc.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode.parentNode;
      var open = item.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* hide the floating call button while the footer is on screen */
  var fab = doc.getElementById("fab-call"), ft = doc.querySelector("footer.site-footer");
  if (fab && ft && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      fab.classList.toggle("hide", es[0].isIntersecting);
    }, { threshold: 0.05 }).observe(ft);
  }
})();
