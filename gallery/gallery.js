document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".gallery-filter button");
      const items = document.querySelectorAll(".gallery-card");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          items.forEach(item => {
            const type = item.getAttribute("data-type");
            item.style.display = (filter === "all" || filter === type) ? "block" : "none";
          });
        });
      });
    });