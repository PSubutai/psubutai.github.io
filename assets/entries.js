document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".entry-toggle").forEach(function (btn) {
    var body = btn.closest("tr").nextElementSibling;
    var arrow = btn.querySelector(".arrow");

    btn.addEventListener("click", function () {
      var next = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(next));
      body.hidden = !next;
      arrow.textContent = next ? "▴" : "▾";
    });
  });
});
