document.addEventListener("DOMContentLoaded", function () {
  var html = document.documentElement;

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  });

  document.querySelectorAll(".palette-select").forEach(function (sel) {
    sel.value = html.getAttribute("data-palette") || "amber";
    sel.addEventListener("change", function () {
      html.setAttribute("data-palette", sel.value);
      try {
        localStorage.setItem("palette", sel.value);
      } catch (e) {}
    });
  });
});
