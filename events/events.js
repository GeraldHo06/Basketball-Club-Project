document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".events-filter button");
      const items = document.querySelectorAll(".events-card");

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