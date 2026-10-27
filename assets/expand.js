document.addEventListener("DOMContentLoaded", function () {
  var LIMIT = 120;

  document.querySelectorAll(".desc").forEach(function (cell) {
    var full = cell.textContent.trim();
    if (full.length <= LIMIT) return;

    var short = full.slice(0, LIMIT).trim() + "…";
    var expanded = false;

    cell.textContent = "";

    var textEl = document.createElement("span");
    textEl.className = "desc-text";
    textEl.textContent = short;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "desc-toggle";
    btn.textContent = "more";
    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener("click", function () {
      expanded = !expanded;
      textEl.textContent = expanded ? full : short;
      btn.textContent = expanded ? "less" : "more";
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    cell.appendChild(textEl);
    cell.appendChild(document.createTextNode(" "));
    cell.appendChild(btn);
  });
});
