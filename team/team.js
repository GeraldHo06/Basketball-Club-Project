document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("position");
    const newsCards = document.querySelectorAll(".member-card");

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
