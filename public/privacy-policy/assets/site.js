(function () {
  "use strict";

  var body = document.body;
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-set-lang]"));
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a, .topnav a, footer.site a[href^='#']"));
  var baseTargets = tocLinks.map(function (a) { return a.getAttribute("href").replace(/-ar$/, ""); });

  function setLang(lang, persist) {
    var isAr = lang === "ar";
    body.dataset.lang = isAr ? "ar" : "en";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";

    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });

    tocLinks.forEach(function (a, i) {
      a.setAttribute("href", isAr ? baseTargets[i] + "-ar" : baseTargets[i]);
    });

    if (persist) {
      try { localStorage.setItem("twsila-policy-lang", lang); } catch (e) {}
    }
    observeSections();
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang, true); });
  });

  var stored = null;
  try { stored = localStorage.getItem("twsila-policy-lang"); } catch (e) {}
  var initial = stored || (new URLSearchParams(location.search).get("lang")) ||
    ((navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en");
  setLang(initial === "ar" ? "ar" : "en", false);

  var observer = null;

  function observeSections() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;

    var article = document.querySelector("article[data-l='" + body.dataset.lang + "']");
    if (!article) return;
    var sections = Array.prototype.slice.call(article.querySelectorAll("section[id]"));

    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        document.querySelectorAll(".toc a").forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-96px 0px -70% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
