document.addEventListener("DOMContentLoaded", function () {
  fetch('includes/footer.html')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      console.log("✅ Footer loaded.");
      document.getElementById("footer-include").innerHTML = data;
    })
    .catch(error => console.error("❌ Error loading footer:", error));
});
