function loadHTML(id, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading component:", error);
    });
}

// Load header and footer
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");