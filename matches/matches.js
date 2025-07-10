function filterbydate() {
  const filter = document.getElementById("date-type").value;
  const table = document.getElementById("match-table");
  const rows = table.getElementsByTagName("tr");
  const today = new Date().setHours(0, 0, 0, 0); 

  for (let i = 1; i < rows.length; i++) {
    const td = rows[i].getElementsByTagName("td")[0];
    if (td) {
      const rowDate = new Date(td.textContent.trim()).setHours(0, 0, 0, 0);

      const isUpcoming = rowDate >= today;
      const isPassed = rowDate < today;

      if (filter === "Upcoming" && !isUpcoming) {
        rows[i].style.display = "none";
      } else if (filter === "Passed" && !isPassed) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  }
}