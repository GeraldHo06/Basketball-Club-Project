document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("newstype");
    const newsCards = document.querySelectorAll(".news-card");

    dropdown.addEventListener("change", () => {
      const selected = dropdown.value;

      newsCards.forEach(card => {
        const type = card.getAttribute("data-type");

        if (selected === "all" || type === selected) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
