(function () {
  const filterButtons = document.querySelectorAll(".filtro");
  const pubs = document.querySelectorAll(".pub");
  const searchInput = document.getElementById("busca");
  const emptyState = document.getElementById("vazio");

  if (!pubs.length) return;

  let activeFilter = "todos";

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function applyFilters() {
    const searchTerm = searchInput ? normalizeText(searchInput.value.trim()) : "";
    let visibleCount = 0;

    pubs.forEach((pub) => {
      const categories = (pub.dataset.cat || "").split(" ");
      const matchesCategory =
        activeFilter === "todos" || categories.includes(activeFilter);

      const matchesSearch =
        !searchTerm ||
        normalizeText(pub.textContent).includes(searchTerm);

      const shouldShow = matchesCategory && matchesSearch;

      pub.hidden = !shouldShow;

      if (shouldShow) visibleCount++;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("ativo");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("ativo");
      button.setAttribute("aria-pressed", "true");

      activeFilter = button.dataset.filtro || "todos";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
})();
